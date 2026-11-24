(function () {
  'use strict';

  const MS_PER_DAY = 86400000;
  const DAYS_PER_YEAR = 365.25;

  const fullDateFmt = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  const monthYearFmt = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' });

  const DIRECTOR_SORTS = [
    { id: 'name-asc', label: 'Name (A\u2013Z)', compare: (a, b) => a.name.localeCompare(b.name) },
    { id: 'name-desc', label: 'Name (Z\u2013A)', compare: (a, b) => b.name.localeCompare(a.name) },
    { id: 'tenure-desc', label: 'Longest tenure', compare: (a, b) => b.totalMs - a.totalMs || b.lastEnd - a.lastEnd },
    { id: 'tenure-asc', label: 'Shortest tenure', compare: (a, b) => a.totalMs - b.totalMs || a.lastEnd - b.lastEnd },
    { id: 'recent-desc', label: 'Most recent', compare: (a, b) => b.lastEnd - a.lastEnd || b.firstStart - a.firstStart },
    { id: 'earliest-asc', label: 'Earliest joined', compare: (a, b) => a.firstStart - b.firstStart }
  ];

  const TERM_SORTS = [
    { id: 'desc', label: 'Newest first' },
    { id: 'asc', label: 'Oldest first' }
  ];

  const ICONS = {
    chevron: 'M4.427 6.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 6H4.604a.25.25 0 00-.177.427z',
    check: 'M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z'
  };

  // --- Formatting & DOM Helpers ---

  function formatDuration(ms) {
    const days = ms / MS_PER_DAY;
    if (days < 45) {
      const months = Math.max(1, Math.round(days / 30.4375));
      return `${months} ${months === 1 ? 'mo' : 'mos'}`;
    }
    const years = Math.round((days / DAYS_PER_YEAR) * 10) / 10;
    return `${years.toFixed(1)} ${years === 1 ? 'yr' : 'yrs'}`;
  }

  function formatSegmentList(segments, maxEnd) {
    return segments
      .map((seg) => {
        const end = seg.end.getTime() === maxEnd
          ? `${fullDateFmt.format(seg.end)} (current term)`
          : fullDateFmt.format(seg.end);
        return `${fullDateFmt.format(seg.start)} \u2013 ${end}`;
      })
      .join('  \u00b7  ');
  }

  const cx = (...names) => names.filter(Boolean).join(' ');

  function append(parent, child) {
    if (child === undefined || child === null || child === false) return;
    if (Array.isArray(child)) {
      for (const item of child) append(parent, item);
    } else {
      parent.appendChild(child instanceof Node ? child : document.createTextNode(String(child)));
    }
  }

  function h(tag, attrs, ...children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [key, val] of Object.entries(attrs)) {
        if (val === undefined || val === null) continue;
        if (key === 'className') {
          if (val) node.className = val;
        } else if (key === 'style') {
          Object.assign(node.style, val);
        } else if (key.startsWith('on') && typeof val === 'function') {
          node.addEventListener(key.slice(2).toLowerCase(), val);
        } else if (key === 'type' || key === 'title' || key === 'placeholder' || key === 'value') {
          node[key] = val;
        } else {
          node.setAttribute(key, String(val));
        }
      }
    }
    append(node, children);
    return node;
  }

  function svgIcon(pathD, className) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', className);
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', pathD);
    path.setAttribute('fill', 'currentColor');
    svg.appendChild(path);
    return svg;
  }

  // --- Pure Domain Model ---

  function inferAnnualTerms(directors, maxEnd) {
    const countsByYear = new Map();
    for (const d of directors) {
      for (const seg of d.segments) {
        for (const dt of [seg.start, seg.end]) {
          const y = dt.getFullYear();
          const t = dt.getTime();
          if (!countsByYear.has(y)) countsByYear.set(y, new Map());
          const yearMap = countsByYear.get(y);
          yearMap.set(t, (yearMap.get(t) || 0) + 1);
        }
      }
    }

    const boundaries = Array.from(countsByYear.keys())
      .sort((a, b) => a - b)
      .map((year) => {
        let bestTime = null;
        let bestCount = -1;
        countsByYear.get(year).forEach((count, time) => {
          if (count > bestCount) {
            bestCount = count;
            bestTime = time;
          }
        });
        return { year, time: bestTime };
      });

    const terms = [];
    for (let i = 0; i < boundaries.length - 1; i++) {
      const startBound = boundaries[i];
      const endBound = boundaries[i + 1];
      const members = [];

      for (const director of directors) {
        const segmentsInTerm = director.segments.filter(
          (seg) => seg.start.getTime() < endBound.time && seg.end.getTime() > startBound.time
        );
        if (segmentsInTerm.length > 0) {
          const isFullTerm = segmentsInTerm.some(
            (seg) => seg.start.getTime() <= startBound.time && seg.end.getTime() >= endBound.time
          );
          members.push({ director, isFullTerm, segmentsInTerm });
        }
      }

      members.sort((a, b) => (a.isFullTerm !== b.isFullTerm
        ? (a.isFullTerm ? -1 : 1)
        : a.director.name.localeCompare(b.director.name)));

      const prevIds = i > 0 ? new Set(terms[i - 1].members.map((m) => m.director.id)) : null;
      const incomingCount = prevIds ? members.filter((m) => !prevIds.has(m.director.id)).length : 0;

      terms.push({
        label: `${startBound.year}\u2013${endBound.year}`,
        startTime: startBound.time,
        endTime: endBound.time,
        isCurrent: endBound.time === maxEnd,
        incomingCount,
        hasPrev: i > 0,
        members
      });
    }
    return terms;
  }

  function buildAxisScale(minTime, maxEnd) {
    const span = Math.max(1, maxEnd - minTime);
    const minYear = new Date(minTime).getFullYear();
    const maxYear = new Date(maxEnd).getFullYear();
    const tickYears = [minYear];
    for (let y = Math.ceil((minYear + 1) / 5) * 5; y < maxYear; y += 5) {
      if (y - minYear >= 3 && maxYear - y >= 4) tickYears.push(y);
    }
    tickYears.push(maxYear);

    const axisTicks = tickYears.map((year, idx) => {
      const isStart = idx === 0;
      const isEnd = idx === tickYears.length - 1;
      const time = isStart ? minTime : isEnd ? maxEnd : new Date(year, 0, 1).getTime();
      return {
        label: String(year),
        pct: `${(((time - minTime) / span) * 100).toFixed(2)}%`,
        isStart,
        isEnd
      };
    });

    return {
      span,
      minYear,
      maxYear,
      axisTicks,
      gridlinePcts: axisTicks.slice(1, -1).map((t) => t.pct)
    };
  }

  function buildTimelineModel(timelineData) {
    let minTime = Infinity;
    let maxEnd = -Infinity;
    for (const person of timelineData) {
      for (const seg of person.segments) {
        const s = seg.start.getTime();
        const e = seg.end.getTime();
        if (s < minTime) minTime = s;
        if (e > maxEnd) maxEnd = e;
      }
    }

    const directors = timelineData.map((person) => {
      const segments = person.segments.slice().sort((a, b) => a.start.getTime() - b.start.getTime());
      let totalMs = 0;
      let firstStart = Infinity;
      let lastEnd = -Infinity;
      let isCurrent = false;
      for (const seg of segments) {
        const s = seg.start.getTime();
        const e = seg.end.getTime();
        totalMs += Math.max(0, e - s);
        if (s < firstStart) firstStart = s;
        if (e > lastEnd) lastEnd = e;
        if (e === maxEnd) isCurrent = true;
      }
      return { id: person.id, name: person.name, segments, totalMs, firstStart, lastEnd, isCurrent, termCount: 0 };
    });

    const directorsById = new Map(directors.map((d) => [d.id, d]));
    const terms = inferAnnualTerms(directors, maxEnd);
    for (const term of terms) {
      for (const m of term.members) m.director.termCount += 1;
    }

    const currentDirectors = directors.filter((d) => d.isCurrent).sort((a, b) => a.name.localeCompare(b.name));
    const sortedByTenure = directors.slice().sort((a, b) => a.totalMs - b.totalMs);
    const mid = Math.floor(sortedByTenure.length / 2);
    const medianMs = sortedByTenure.length % 2 === 1
      ? sortedByTenure[mid].totalMs
      : (sortedByTenure[mid - 1].totalMs + sortedByTenure[mid].totalMs) / 2;
    const avgMs = directors.reduce((sum, d) => sum + d.totalMs, 0) / directors.length;
    const scale = buildAxisScale(minTime, maxEnd);

    return {
      minTime,
      maxEnd,
      span: scale.span,
      axisTicks: scale.axisTicks,
      gridlinePcts: scale.gridlinePcts,
      directors,
      directorsById,
      currentDirectors,
      terms,
      stats: {
        firstYear: scale.minYear,
        lastYear: scale.maxYear,
        formerCount: directors.length - currentDirectors.length,
        latestTermLabel: terms.length > 0 ? terms[terms.length - 1].label : 'Current',
        medianMs,
        avgMs
      }
    };
  }

  // --- UI Sections ---

  function matchesFilter(director, cohort, query) {
    if (cohort === 'current' && !director.isCurrent) return false;
    if (query && !director.name.toLowerCase().includes(query) && !director.id.toLowerCase().includes(query)) {
      return false;
    }
    return true;
  }

  function createSummary(model, onToggleDirector) {
    const inlineButtons = new Map();
    const { stats } = model;

    const statBox = (label, value, sub) => h('div', { className: 'asf-dt-stat' },
      h('span', { className: 'asf-dt-stat-label' }, label),
      h('span', { className: 'asf-dt-stat-value' }, value),
      sub && h('span', { className: 'asf-dt-stat-sub' }, sub)
    );

    const currentItems = [h('span', { className: 'asf-dt-current-label' }, `Current Board (${stats.latestTermLabel}):`)];
    model.currentDirectors.forEach((d, idx) => {
      const btn = h('button', {
        type: 'button',
        className: 'asf-dt-inline-btn',
        title: `@${d.id} \u00b7 ${formatDuration(d.totalMs)} \u2014 click to filter`,
        onClick: () => onToggleDirector(d.id)
      }, d.name);
      inlineButtons.set(d.id, btn);
      currentItems.push(btn, idx < model.currentDirectors.length - 1 && '\u00b7');
    });

    const el = h('section', { className: 'asf-dt-summary' },
      h('div', { className: 'asf-dt-stats-grid' },
        statBox('Board Span', `${stats.firstYear}\u2013${stats.lastYear}`, `${model.terms.length} annual terms`),
        statBox('Directors', `${model.directors.length} total`, `${model.currentDirectors.length} current \u00b7 ${stats.formerCount} former`),
        statBox('Typical Tenure', `${formatDuration(stats.medianMs)} median`, `${formatDuration(stats.avgMs)} average`)
      ),
      h('div', { className: 'asf-dt-current-line' }, currentItems)
    );

    return {
      el,
      update(state) {
        inlineButtons.forEach((btn, id) => btn.classList.toggle('is-selected', state.selectedId === id));
      }
    };
  }

  function createToolbar(model, onAction) {
    const tabDirectors = h('button', {
      type: 'button',
      className: 'asf-dt-tab',
      role: 'tab',
      onClick: () => onAction({ type: 'view', view: 'directors' })
    }, `By Director (${model.directors.length})`);

    const tabTerms = h('button', {
      type: 'button',
      className: 'asf-dt-tab',
      role: 'tab',
      onClick: () => onAction({ type: 'view', view: 'terms' })
    }, `By Term (${model.terms.length})`);

    const cohortButtons = new Map();
    const cohorts = h('div', { className: 'asf-dt-cohorts', role: 'group', 'aria-label': 'Filter cohort' },
      [['all', `All (${model.directors.length})`], ['current', `Current (${model.currentDirectors.length})`]].map(([key, label]) => {
        const btn = h('button', {
          type: 'button',
          className: 'asf-dt-cohort-btn',
          onClick: () => onAction({ type: 'cohort', cohort: key })
        }, label);
        cohortButtons.set(key, btn);
        return btn;
      })
    );

    const searchInput = h('input', {
      type: 'search',
      className: 'asf-dt-search',
      placeholder: 'Filter name or ID\u2026',
      'aria-label': 'Filter directors by name or Apache ID',
      onInput: () => onAction({ type: 'query', query: searchInput.value })
    });

    const clearSearchBtn = h('button', {
      type: 'button',
      className: 'asf-dt-clear-btn',
      title: 'Clear filter',
      style: { display: 'none' },
      onClick: () => {
        searchInput.value = '';
        searchInput.focus();
        onAction({ type: 'query', query: '' });
      }
    }, '\u00d7');

    const sortValue = h('span', { className: 'asf-dt-sort-value' }, DIRECTOR_SORTS[0].label);
    const sortTrigger = h('button', {
      type: 'button',
      className: 'asf-dt-sort-trigger',
      'aria-haspopup': 'menu',
      'aria-expanded': 'false',
      onClick: (e) => {
        e.stopPropagation();
        onAction({ type: 'toggle-menu' });
      }
    },
      h('span', { className: 'asf-dt-sort-prefix' }, 'Sort:'),
      sortValue,
      svgIcon(ICONS.chevron, 'asf-dt-chevron')
    );

    const sortMenu = h('div', { className: 'asf-dt-sort-menu', role: 'menu' });
    const sortWrap = h('div', { className: 'asf-dt-sort-wrap' }, sortTrigger, sortMenu);

    document.addEventListener('click', (e) => {
      if (sortWrap.isConnected && !sortWrap.contains(e.target)) {
        onAction({ type: 'close-menu' });
      }
    });
    document.addEventListener('keydown', (e) => {
      if (sortWrap.isConnected && e.key === 'Escape' && onAction({ type: 'close-menu' })) {
        sortTrigger.focus();
      }
    });

    const el = h('div', { className: 'asf-dt-controls' },
      h('div', { className: 'asf-dt-controls-left' },
        h('div', { className: 'asf-dt-tabs', role: 'tablist' }, tabDirectors, tabTerms),
        cohorts
      ),
      h('div', { className: 'asf-dt-tools' },
        h('div', { className: 'asf-dt-search-wrap' }, searchInput, clearSearchBtn),
        sortWrap
      )
    );

    return {
      el,
      update(state) {
        tabDirectors.classList.toggle('is-active', state.view === 'directors');
        tabTerms.classList.toggle('is-active', state.view === 'terms');
        cohortButtons.forEach((btn, key) => btn.classList.toggle('is-active', state.cohort === key));
        clearSearchBtn.style.display = state.query ? 'inline-block' : 'none';

        const isTerms = state.view === 'terms';
        const options = isTerms ? TERM_SORTS : DIRECTOR_SORTS;
        const activeId = isTerms ? state.termOrder : state.directorSort;
        const activeOpt = options.find((o) => o.id === activeId) || options[0];

        sortTrigger.setAttribute('aria-expanded', state.sortMenuOpen ? 'true' : 'false');
        sortMenu.classList.toggle('is-open', state.sortMenuOpen);
        sortValue.textContent = activeOpt.label;
        sortMenu.innerHTML = '';
        append(sortMenu, options.map((opt) => {
          const isSel = opt.id === activeOpt.id;
          return h('button', {
            type: 'button',
            className: cx('asf-dt-sort-item', isSel && 'is-selected'),
            role: 'menuitemradio',
            'aria-checked': isSel ? 'true' : 'false',
            onClick: () => onAction({ type: 'sort', id: opt.id })
          }, svgIcon(ICONS.check, 'asf-dt-check'), opt.label);
        }));
      }
    };
  }

  function renderTermsView(panel, footnote, model, state, onToggleDirector) {
    panel.innerHTML = '';
    const q = state.query.trim().toLowerCase();
    const hasFilter = Boolean(q) || state.cohort !== 'all';
    const selected = state.selectedId ? model.directorsById.get(state.selectedId) : null;

    const ordered = state.termOrder === 'desc' ? model.terms.slice().reverse() : model.terms;
    const visible = ordered.filter((term) => (selected
      ? term.members.some((m) => m.director.id === selected.id)
      : !hasFilter || term.members.some((m) => matchesFilter(m.director, state.cohort, q))));

    if (selected) {
      const countLabel = `${visible.length} ${visible.length === 1 ? 'term' : 'terms'}`;
      panel.appendChild(h('div', { className: 'asf-dt-context-bar' },
        h('div', null,
          h('span', { className: 'asf-dt-context-strong' }, `${selected.name} (@${selected.id})`),
          h('span', null, `${formatDuration(selected.totalMs)} \u00b7 ${countLabel} \u00b7 ${formatSegmentList(selected.segments, model.maxEnd)}`)
        ),
        h('span', { className: 'asf-dt-context-hint' }, 'Click director again to show all')
      ));
    }

    if (visible.length === 0) {
      panel.appendChild(h('div', { className: 'asf-dt-empty' }, 'No terms match the current filter.'));
    } else {
      append(panel, visible.map((term) => {
        const changeText = term.hasPrev
          ? (term.incomingCount === 0 ? 'no changes' : `${term.incomingCount} incoming`)
          : 'founding board';
        const dateRange = `${monthYearFmt.format(new Date(term.startTime))} \u2013 ${monthYearFmt.format(new Date(term.endTime))} \u00b7 ${changeText}`;

        const pills = term.members.map((m) => {
          const d = m.director;
          const isSel = Boolean(selected && selected.id === d.id);
          const isMatch = !selected && hasFilter && matchesFilter(d, state.cohort, q);
          const midTerm = m.isFullTerm ? '' : ` \u2014 Mid-term: ${formatSegmentList(m.segmentsInTerm, model.maxEnd)}`;

          return h('button', {
            type: 'button',
            className: cx(
              'asf-dt-pill',
              !m.isFullTerm && 'is-partial',
              isSel && 'is-selected',
              isMatch && 'is-matched',
              !selected && hasFilter && !isMatch && 'is-dimmed'
            ),
            title: `${d.name} (@${d.id}, ${formatDuration(d.totalMs)})${midTerm} \u2014 ${isSel ? 'click again to show all' : 'click to filter'}`,
            onClick: () => onToggleDirector(d.id)
          }, d.name + (m.isFullTerm ? '' : ' *'));
        });

        return h('div', { className: cx('asf-dt-term-row', term.isCurrent && 'is-current-term') },
          h('div', { className: 'asf-dt-term-label' },
            h('div', { className: 'asf-dt-term-years' }, term.label, term.isCurrent && h('span', { className: 'asf-dt-badge' }, 'Current')),
            h('div', { className: 'asf-dt-term-dates' }, dateRange)
          ),
          h('div', { className: 'asf-dt-term-members' }, pills)
        );
      }));
    }

    footnote.innerHTML = '';
    append(footnote, [
      h('span', null, '* Dashed pill indicates partial / mid-term service. Click any director to filter to their terms.'),
      h('span', null, `Showing ${visible.length} of ${model.terms.length} terms`)
    ]);
  }

  function renderDirectorsView(panel, footnote, model, state, onToggleDirector) {
    panel.innerHTML = '';
    const q = state.query.trim().toLowerCase();
    const selected = state.selectedId ? model.directorsById.get(state.selectedId) : null;
    const activeSort = DIRECTOR_SORTS.find((o) => o.id === state.directorSort) || DIRECTOR_SORTS[0];

    const filtered = selected
      ? [selected]
      : model.directors
          .filter((d) => matchesFilter(d, state.cohort, q))
          .sort((a, b) => activeSort.compare(a, b) || a.name.localeCompare(b.name));

    panel.appendChild(h('div', { className: 'asf-dt-dir-head' },
      h('span', null, 'Director'),
      h('div', { className: 'asf-dt-axis' }, model.axisTicks.map((t) => h('span', {
        className: cx('asf-dt-axis-tick', t.isStart && 'is-start', t.isEnd && 'is-end'),
        style: { left: t.pct }
      }, t.label))),
      h('span', { style: { textAlign: 'right' } }, 'Tenure')
    ));

    if (filtered.length === 0) {
      panel.appendChild(h('div', { className: 'asf-dt-empty' }, 'No directors match the current filter.'));
    } else {
      append(panel, filtered.map((d) => {
        const isSelected = Boolean(selected && selected.id === d.id);
        const segSummary = formatSegmentList(d.segments, model.maxEnd);
        const gridlines = model.gridlinePcts.map((pct) => h('div', { className: 'asf-dt-gridline', style: { left: pct } }));
        const bars = d.segments.map((seg) => h('div', {
          className: 'asf-dt-bar',
          style: {
            left: `${(((seg.start.getTime() - model.minTime) / model.span) * 100).toFixed(3)}%`,
            width: `${(((seg.end.getTime() - seg.start.getTime()) / model.span) * 100).toFixed(3)}%`
          }
        }));

        return h('div', {
          className: cx('asf-dt-dir-row', d.isCurrent && 'is-current'),
          title: `${d.name} (@${d.id}): ${segSummary} \u2014 ${isSelected ? 'click again to show all' : 'click to inspect'}`,
          onClick: () => onToggleDirector(d.id)
        },
          h('div', { className: 'asf-dt-dir-name' }, d.name, h('span', { className: 'asf-dt-dir-id' }, `@${d.id}`)),
          h('div', { className: 'asf-dt-track' }, gridlines, bars),
          h('div', { className: 'asf-dt-dir-dur' }, formatDuration(d.totalMs)),
          isSelected && h('div', { className: 'asf-dt-dir-spans' },
            `${d.termCount} ${d.termCount === 1 ? 'term' : 'terms'} \u00b7 ${segSummary}  (click row again to show all)`
          )
        );
      }));
    }

    footnote.innerHTML = '';
    append(footnote, [
      h('span', null, 'Purple bars indicate current directors; navy bars indicate former directors. Click any row to focus & see exact dates.'),
      h('span', null, `Showing ${filtered.length} of ${model.directors.length} directors`)
    ]);
  }

  // --- Public Entrypoint ---

  function directorsTimelineChart(chartDom, timelineData) {
    if (!chartDom || !Array.isArray(timelineData) || timelineData.length === 0) return;

    const model = buildTimelineModel(timelineData);
    const state = {
      view: 'directors',
      cohort: 'current',
      query: '',
      termOrder: 'desc',
      directorSort: 'name-asc',
      selectedId: null,
      sortMenuOpen: false
    };

    function toggleDirector(id) {
      if (window.getSelection && window.getSelection().toString()) return;
      state.selectedId = state.selectedId === id ? null : id;
      render();
      if (state.selectedId) {
        const panelTop = panel.getBoundingClientRect().top;
        if (panelTop < 12 || panelTop > window.innerHeight - 80) {
          toolbar.el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    function handleToolbarAction(action) {
      if (action.type === 'view') {
        if (state.view === action.view) return false;
        state.view = action.view;
        state.sortMenuOpen = false;
        render();
      } else if (action.type === 'cohort') {
        state.cohort = action.cohort;
        state.selectedId = null;
        state.sortMenuOpen = false;
        render();
      } else if (action.type === 'query') {
        state.query = action.query;
        state.selectedId = null;
        render();
      } else if (action.type === 'toggle-menu') {
        state.sortMenuOpen = !state.sortMenuOpen;
        toolbar.update(state);
      } else if (action.type === 'close-menu') {
        if (!state.sortMenuOpen) return false;
        state.sortMenuOpen = false;
        toolbar.update(state);
      } else if (action.type === 'sort') {
        if (state.view === 'terms') state.termOrder = action.id;
        else state.directorSort = action.id;
        state.sortMenuOpen = false;
        render();
      }
      return true;
    }

    const summary = createSummary(model, toggleDirector);
    const toolbar = createToolbar(model, handleToolbarAction);
    const panel = h('div', { className: 'asf-dt-panel' });
    const footnote = h('div', { className: 'asf-dt-footnote' });

    chartDom.innerHTML = '';
    chartDom.style.height = 'auto';
    chartDom.appendChild(h('div', { className: 'asf-dt-root' }, summary.el, toolbar.el, panel, footnote));

    function render() {
      summary.update(state);
      toolbar.update(state);
      if (state.view === 'terms') {
        renderTermsView(panel, footnote, model, state, toggleDirector);
      } else {
        renderDirectorsView(panel, footnote, model, state, toggleDirector);
      }
    }

    render();
  }

  if (!window.asf) window.asf = {};
  window.asf.directorsTimelineChart = directorsTimelineChart;
})();
