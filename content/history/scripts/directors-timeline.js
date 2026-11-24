if (!window.asf) {
  window.asf = {};
}

window.asf.directorsTimelineChart = function (chartDom, timelineData) {
  if (!chartDom || !Array.isArray(timelineData) || timelineData.length === 0) {
    return;
  }

  const fullDateFmt = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const monthYearFmt = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short'
  });
  const MS_PER_DAY = 86400000;

  let minTime = Infinity;
  let maxEnd = -Infinity;
  timelineData.forEach(function (person) {
    person.segments.forEach(function (seg) {
      const s = seg.start.getTime();
      const e = seg.end.getTime();
      if (s < minTime) minTime = s;
      if (e > maxEnd) maxEnd = e;
    });
  });

  // Normalize each director with precomputed tenure and current-board status.
  const directors = timelineData.map(function (person) {
    const segments = person.segments
      .slice()
      .sort(function (a, b) {
        return a.start.getTime() - b.start.getTime();
      });
    let totalMs = 0;
    let firstStart = Infinity;
    let lastEnd = -Infinity;
    let isCurrent = false;
    segments.forEach(function (seg) {
      const s = seg.start.getTime();
      const e = seg.end.getTime();
      totalMs += Math.max(0, e - s);
      if (s < firstStart) firstStart = s;
      if (e > lastEnd) lastEnd = e;
      if (e === maxEnd) isCurrent = true;
    });
    return {
      id: person.id,
      name: person.name,
      segments: segments,
      totalMs: totalMs,
      firstStart: firstStart,
      lastEnd: lastEnd,
      isCurrent: isCurrent
    };
  });

  const directorsById = new Map();
  directors.forEach(function (d) {
    directorsById.set(d.id, d);
  });

  // Infer annual Board term boundaries from the primary transition date in each year.
  const countsByYear = new Map();
  directors.forEach(function (d) {
    d.segments.forEach(function (seg) {
      [seg.start, seg.end].forEach(function (dt) {
        const y = dt.getFullYear();
        const t = dt.getTime();
        if (!countsByYear.has(y)) {
          countsByYear.set(y, new Map());
        }
        const yearMap = countsByYear.get(y);
        yearMap.set(t, (yearMap.get(t) || 0) + 1);
      });
    });
  });

  const termBoundaries = Array.from(countsByYear.keys())
    .sort(function (a, b) {
      return a - b;
    })
    .map(function (y) {
      let bestTime = null;
      let bestCount = -1;
      countsByYear.get(y).forEach(function (count, t) {
        if (count > bestCount) {
          bestCount = count;
          bestTime = t;
        }
      });
      return { year: y, time: bestTime };
    });

  const terms = [];
  for (let i = 0; i < termBoundaries.length - 1; i++) {
    const startBound = termBoundaries[i];
    const endBound = termBoundaries[i + 1];
    const members = [];
    directors.forEach(function (d) {
      const overlapping = d.segments.filter(function (seg) {
        return seg.start.getTime() < endBound.time && seg.end.getTime() > startBound.time;
      });
      if (overlapping.length > 0) {
        const isFullTerm = overlapping.some(function (seg) {
          return seg.start.getTime() <= startBound.time && seg.end.getTime() >= endBound.time;
        });
        members.push({
          director: d,
          isFullTerm: isFullTerm,
          segmentsInTerm: overlapping
        });
      }
    });
    // Sort members inside each term: full-term before partial, then alphabetically.
    members.sort(function (a, b) {
      if (a.isFullTerm !== b.isFullTerm) return a.isFullTerm ? -1 : 1;
      return a.director.name.localeCompare(b.director.name);
    });
    terms.push({
      label: startBound.year + '\u2013' + endBound.year,
      startTime: startBound.time,
      endTime: endBound.time,
      isCurrent: endBound.time === maxEnd,
      members: members
    });
  }
  terms.reverse();

  const currentDirectors = directors
    .filter(function (d) {
      return d.isCurrent;
    })
    .sort(function (a, b) {
      return b.totalMs - a.totalMs || a.name.localeCompare(b.name);
    });

  function formatDuration(ms) {
    const days = ms / MS_PER_DAY;
    if (days < 45) {
      const months = Math.max(1, Math.round(days / 30.4375));
      return months + (months === 1 ? ' mo' : ' mos');
    }
    const years = days / 365.25;
    if (years >= 10) {
      return years.toFixed(1) + ' yrs';
    }
    const rounded = Math.round(years * 10) / 10;
    return rounded.toFixed(1) + (rounded === 1 ? ' yr' : ' yrs');
  }

  function formatSegmentList(segments) {
    return segments
      .map(function (seg) {
        const endLabel = seg.end.getTime() === maxEnd
          ? fullDateFmt.format(seg.end) + ' (current term)'
          : fullDateFmt.format(seg.end);
        return fullDateFmt.format(seg.start) + ' \u2013 ' + endLabel;
      })
      .join('  \u00b7  ');
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function injectStyles() {
    if (document.getElementById('asf-dt-styles')) return;
    const style = document.createElement('style');
    style.id = 'asf-dt-styles';
    style.textContent = [
      '.asf-dt-root { font-family: inherit; color: #1f2937; margin: 1.25rem 0 1.5rem; }',
      '.asf-dt-root * { box-sizing: border-box; }',
      '.asf-dt-current { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 1rem 1.15rem; box-shadow: 0 2px 10px rgba(40, 38, 94, 0.06); margin-bottom: 1rem; }',
      '.asf-dt-current-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.75rem; }',
      '.asf-dt-current-title { font-family: Montserrat, sans-serif; font-size: 1rem; font-weight: 700; color: #28265E; margin: 0; }',
      '.asf-dt-stats { font-size: 0.82rem; color: #6b7280; }',
      '.asf-dt-current-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.5rem; }',
      '.asf-dt-current-card { display: flex; flex-direction: column; align-items: flex-start; text-align: left; width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 0.5rem 0.7rem; cursor: pointer; transition: border-color 0.15s, background-color 0.15s, box-shadow 0.15s; }',
      '.asf-dt-current-card:hover { border-color: #7C297D; background: #FEF4FF; }',
      '.asf-dt-current-card.is-selected { border-color: #7C297D; background: #FEF4FF; box-shadow: 0 0 0 2px rgba(124, 41, 125, 0.18); }',
      '.asf-dt-card-name { font-size: 0.88rem; font-weight: 600; color: #28265E; line-height: 1.3; }',
      '.asf-dt-card-meta { font-size: 0.75rem; color: #6b7280; line-height: 1.3; margin-top: 0.1rem; }',
      '.asf-dt-controls { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.65rem; margin-bottom: 0.85rem; }',
      '.asf-dt-tabs { display: inline-flex; background: #e5e7eb; border-radius: 8px; padding: 3px; gap: 3px; }',
      '.asf-dt-tab { border: none; background: transparent; color: #374151; font-size: 0.82rem; font-weight: 600; padding: 0.38rem 0.85rem; border-radius: 6px; cursor: pointer; transition: background-color 0.15s, color 0.15s; }',
      '.asf-dt-tab:hover { color: #28265E; }',
      '.asf-dt-tab.is-active { background: #28265E; color: #fff; }',
      '.asf-dt-tools { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; }',
      '.asf-dt-search-wrap { position: relative; display: inline-flex; align-items: center; }',
      '.asf-dt-search { border: 1px solid #d1d5db; border-radius: 6px; padding: 0 1.8rem 0 0.65rem; height: 36px; line-height: 1.2; font-size: 0.82rem; background: #fff; color: #111827; min-width: 210px; }',
      '.asf-dt-search:focus { outline: none; border-color: #7C297D; box-shadow: 0 0 0 2px rgba(124, 41, 125, 0.15); }',
      '.asf-dt-clear-btn { position: absolute; right: 0.35rem; border: none; background: transparent; color: #6b7280; font-size: 1rem; line-height: 1; cursor: pointer; padding: 0.1rem 0.25rem; }',
      '.asf-dt-clear-btn:hover { color: #111827; }',
      '.asf-dt-sort-group { display: inline-flex; align-items: center; background: #e5e7eb; border-radius: 6px; padding: 2px; gap: 2px; height: 36px; }',
      '.asf-dt-sort-btn { border: none; background: transparent; color: #374151; font-size: 0.78rem; font-weight: 600; padding: 0.25rem 0.55rem; border-radius: 5px; cursor: pointer; white-space: nowrap; transition: background-color 0.12s, color 0.12s; }',
      '.asf-dt-sort-btn:hover { color: #28265E; }',
      '.asf-dt-sort-btn.is-active { background: #fff; color: #28265E; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08); }',
      '.asf-dt-detail { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.6rem; background: #FEF4FF; border: 1px solid #e9d5ff; border-left: 4px solid #7C297D; border-radius: 8px; padding: 0.65rem 0.9rem; margin-bottom: 0.85rem; }',
      '.asf-dt-detail-main { font-size: 0.85rem; line-height: 1.45; }',
      '.asf-dt-detail-title { font-weight: 700; color: #28265E; margin-right: 0.45rem; }',
      '.asf-dt-detail-dates { color: #4b5563; font-size: 0.8rem; margin-top: 0.15rem; }',
      '.asf-dt-detail-close { border: 1px solid #d8b4fe; background: #fff; color: #7C297D; border-radius: 6px; padding: 0.25rem 0.6rem; font-size: 0.78rem; font-weight: 600; cursor: pointer; }',
      '.asf-dt-detail-close:hover { background: #7C297D; color: #fff; }',
      '.asf-dt-panel { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(40, 38, 94, 0.05); }',
      '.asf-dt-term-row { display: grid; grid-template-columns: 175px minmax(0, 1fr); gap: 0.75rem; padding: 0.65rem 1rem; border-bottom: 1px solid #f3f4f6; align-items: start; }',
      '.asf-dt-term-row:last-child { border-bottom: none; }',
      '.asf-dt-term-row.is-dimmed { opacity: 0.42; }',
      '.asf-dt-term-row.is-current-term { background: #faf5ff; }',
      '.asf-dt-term-label { display: flex; flex-direction: column; }',
      '.asf-dt-term-years { font-size: 0.88rem; font-weight: 700; color: #28265E; display: inline-flex; align-items: center; gap: 0.4rem; white-space: nowrap; }',
      '.asf-dt-badge { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.03em; background: #7C297D; color: #fff; border-radius: 999px; padding: 0.08rem 0.42rem; }',
      '.asf-dt-term-dates { font-size: 0.72rem; color: #6b7280; margin-top: 0.12rem; }',
      '.asf-dt-term-members { display: flex; flex-wrap: wrap; gap: 0.35rem; }',
      '.asf-dt-pill { border: 1px solid #d1d5db; background: #f9fafb; color: #1f2937; border-radius: 999px; padding: 0.2rem 0.6rem; font-size: 0.78rem; line-height: 1.3; cursor: pointer; transition: all 0.12s ease; }',
      '.asf-dt-pill:hover { border-color: #7C297D; color: #7C297D; background: #FEF4FF; }',
      '.asf-dt-pill.is-partial { border-style: dashed; }',
      '.asf-dt-pill.is-selected { background: #7C297D; border-color: #7C297D; color: #fff; font-weight: 600; }',
      '.asf-dt-pill.is-dimmed { opacity: 0.35; }',
      '.asf-dt-dir-head { display: grid; grid-template-columns: 270px minmax(0, 1fr) 72px; gap: 0.75rem; padding: 0.55rem 1rem; background: #f9fafb; border-bottom: 1px solid #e5e7eb; font-size: 0.75rem; font-weight: 700; color: #4b5563; align-items: center; }',
      '.asf-dt-axis { position: relative; height: 1.1rem; }',
      '.asf-dt-axis-tick { position: absolute; top: 0; transform: translateX(-50%); font-size: 0.7rem; color: #6b7280; white-space: nowrap; }',
      '.asf-dt-axis-tick.is-start { transform: translateX(0); }',
      '.asf-dt-axis-tick.is-end { transform: translateX(-100%); }',
      '.asf-dt-dir-row { display: grid; grid-template-columns: 270px minmax(0, 1fr) 72px; gap: 0.75rem; padding: 0.45rem 1rem; border-bottom: 1px solid #f3f4f6; align-items: center; cursor: pointer; transition: background-color 0.12s; }',
      '.asf-dt-dir-row:last-child { border-bottom: none; }',
      '.asf-dt-dir-row:hover { background: #f9fafb; }',
      '.asf-dt-dir-row.is-selected { background: #FEF4FF; }',
      '.asf-dt-dir-name { font-size: 0.82rem; font-weight: 600; color: #1f2937; line-height: 1.3; }',
      '.asf-dt-dir-id { font-size: 0.72rem; font-weight: 400; color: #6b7280; margin-left: 0.3rem; white-space: nowrap; }',
      '.asf-dt-track { position: relative; height: 14px; background: #f3f4f6; border-radius: 4px; overflow: hidden; }',
      '.asf-dt-gridline { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(0, 0, 0, 0.06); pointer-events: none; }',
      '.asf-dt-bar { position: absolute; top: 2px; bottom: 2px; background: #28265E; border-radius: 3px; opacity: 0.88; min-width: 3px; }',
      '.asf-dt-dir-row.is-current .asf-dt-bar { background: #7C297D; opacity: 0.95; }',
      '.asf-dt-dir-dur { font-size: 0.76rem; color: #4b5563; text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }',
      '.asf-dt-empty { padding: 1.5rem; text-align: center; color: #6b7280; font-size: 0.88rem; }',
      '.asf-dt-footnote { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem; margin-top: 0.55rem; font-size: 0.76rem; color: #6b7280; }',
      '@media (max-width: 820px) {',
      '  .asf-dt-current-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }',
      '  .asf-dt-term-row { grid-template-columns: 1fr; gap: 0.45rem; }',
      '  .asf-dt-term-label { flex-direction: row; align-items: baseline; gap: 0.6rem; }',
      '  .asf-dt-dir-head { display: none; }',
      '  .asf-dt-dir-row { grid-template-columns: minmax(0, 1fr) 64px; row-gap: 0.25rem; }',
      '  .asf-dt-track { grid-column: 1 / -1; order: 3; }',
      '}',
      '@media (max-width: 520px) {',
      '  .asf-dt-current-grid { grid-template-columns: 1fr; }',
      '  .asf-dt-search { min-width: 160px; width: 100%; }',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  injectStyles();

  const state = {
    view: 'terms', // 'terms' | 'directors'
    query: '',
    sortBy: 'recent', // 'recent' | 'tenure' | 'earliest' | 'name'
    selectedId: null
  };

  const root = el('div', 'asf-dt-root');
  chartDom.innerHTML = '';
  chartDom.style.height = 'auto';
  chartDom.appendChild(root);

  // Current Board Section
  const currentCard = el('section', 'asf-dt-current');
  const currentHead = el('div', 'asf-dt-current-head');
  const latestTermLabel = terms.length > 0 ? terms[0].label : 'Current';
  currentHead.appendChild(el('h2', 'asf-dt-current-title', 'Current Board (' + latestTermLabel + ')'));
  currentHead.appendChild(
    el(
      'span',
      'asf-dt-stats',
      currentDirectors.length + ' current directors \u00b7 ' + directors.length + ' total since ' + new Date(minTime).getFullYear()
    )
  );
  currentCard.appendChild(currentHead);

  const currentGrid = el('div', 'asf-dt-current-grid');
  const currentCardButtons = new Map();
  currentDirectors.forEach(function (d) {
    const btn = el('button', 'asf-dt-current-card');
    btn.type = 'button';
    btn.title = 'Click to highlight ' + d.name + '\u2019s terms';
    btn.appendChild(el('span', 'asf-dt-card-name', d.name));
    btn.appendChild(
      el(
        'span',
        'asf-dt-card-meta',
        '@' + d.id + ' \u00b7 ' + formatDuration(d.totalMs) + ' (' + d.segments.length + (d.segments.length === 1 ? ' span)' : ' spans)')
      )
    );
    btn.addEventListener('click', function () {
      state.selectedId = state.selectedId === d.id ? null : d.id;
      renderSelectionAndBody();
    });
    currentCardButtons.set(d.id, btn);
    currentGrid.appendChild(btn);
  });
  currentCard.appendChild(currentGrid);
  root.appendChild(currentCard);

  // Controls Toolbar
  const controls = el('div', 'asf-dt-controls');
  const tabs = el('div', 'asf-dt-tabs');
  tabs.setAttribute('role', 'tablist');

  const tabTerms = el('button', 'asf-dt-tab is-active', 'By Term (' + terms.length + ')');
  tabTerms.type = 'button';
  tabTerms.setAttribute('role', 'tab');

  const tabDirectors = el('button', 'asf-dt-tab', 'By Director (' + directors.length + ')');
  tabDirectors.type = 'button';
  tabDirectors.setAttribute('role', 'tab');

  tabs.appendChild(tabTerms);
  tabs.appendChild(tabDirectors);
  controls.appendChild(tabs);

  const tools = el('div', 'asf-dt-tools');
  const searchWrap = el('div', 'asf-dt-search-wrap');
  const searchInput = el('input', 'asf-dt-search');
  searchInput.type = 'search';
  searchInput.placeholder = 'Filter name or ID\u2026';
  searchInput.setAttribute('aria-label', 'Filter directors by name or Apache ID');

  const clearSearchBtn = el('button', 'asf-dt-clear-btn', '\u00d7');
  clearSearchBtn.type = 'button';
  clearSearchBtn.title = 'Clear filter';
  clearSearchBtn.style.display = 'none';

  searchWrap.appendChild(searchInput);
  searchWrap.appendChild(clearSearchBtn);
  tools.appendChild(searchWrap);

  const sortGroup = el('div', 'asf-dt-sort-group');
  sortGroup.setAttribute('role', 'group');
  sortGroup.setAttribute('aria-label', 'Sort directors');
  const sortButtons = new Map();
  [
    ['recent', 'Recent'],
    ['tenure', 'Longest'],
    ['earliest', 'Earliest'],
    ['name', 'A\u2013Z']
  ].forEach(function (opt) {
    const btn = el('button', 'asf-dt-sort-btn', opt[1]);
    btn.type = 'button';
    btn.title = 'Sort by ' + opt[1].toLowerCase();
    btn.classList.toggle('is-active', opt[0] === state.sortBy);
    btn.addEventListener('click', function () {
      state.sortBy = opt[0];
      sortButtons.forEach(function (b, k) {
        b.classList.toggle('is-active', k === state.sortBy);
      });
      renderDirectorsView();
    });
    sortButtons.set(opt[0], btn);
    sortGroup.appendChild(btn);
  });
  sortGroup.style.display = 'none';
  tools.appendChild(sortGroup);
  controls.appendChild(tools);
  root.appendChild(controls);

  // Selected Director Detail Banner
  const detailBanner = el('div', 'asf-dt-detail');
  detailBanner.style.display = 'none';
  root.appendChild(detailBanner);

  // Main Panel + Footnote
  const panel = el('div', 'asf-dt-panel');
  root.appendChild(panel);

  const footnote = el('div', 'asf-dt-footnote');
  root.appendChild(footnote);

  function matchesQuery(d, q) {
    if (!q) return true;
    return d.name.toLowerCase().indexOf(q) !== -1 || d.id.toLowerCase().indexOf(q) !== -1;
  }

  function renderDetailBanner() {
    currentCardButtons.forEach(function (btn, id) {
      btn.classList.toggle('is-selected', state.selectedId === id);
    });

    if (!state.selectedId || !directorsById.has(state.selectedId)) {
      detailBanner.style.display = 'none';
      detailBanner.innerHTML = '';
      return;
    }

    const d = directorsById.get(state.selectedId);
    detailBanner.innerHTML = '';
    detailBanner.style.display = 'flex';

    const main = el('div', 'asf-dt-detail-main');
    const titleLine = el('div');
    titleLine.appendChild(el('span', 'asf-dt-detail-title', d.name + ' (@' + d.id + ')'));
    titleLine.appendChild(
      el(
        'span',
        null,
        formatDuration(d.totalMs) + ' total' + (d.isCurrent ? ' \u00b7 Current Director' : '')
      )
    );
    main.appendChild(titleLine);
    main.appendChild(el('div', 'asf-dt-detail-dates', formatSegmentList(d.segments)));

    const closeBtn = el('button', 'asf-dt-detail-close', 'Clear selection');
    closeBtn.type = 'button';
    closeBtn.addEventListener('click', function () {
      state.selectedId = null;
      renderSelectionAndBody();
    });

    detailBanner.appendChild(main);
    detailBanner.appendChild(closeBtn);
  }

  function renderTermsView() {
    panel.innerHTML = '';
    const q = state.query.trim().toLowerCase();
    let shownTerms = 0;

    terms.forEach(function (term) {
      const hasQueryMatch = !q || term.members.some(function (m) {
        return matchesQuery(m.director, q);
      });
      if (q && !hasQueryMatch) {
        return;
      }
      shownTerms++;

      const hasSelected = state.selectedId && term.members.some(function (m) {
        return m.director.id === state.selectedId;
      });

      const row = el('div', 'asf-dt-term-row');
      if (term.isCurrent) row.classList.add('is-current-term');
      if (state.selectedId && !hasSelected) row.classList.add('is-dimmed');

      const labelCol = el('div', 'asf-dt-term-label');
      const yearsEl = el('div', 'asf-dt-term-years', term.label);
      if (term.isCurrent) {
        yearsEl.appendChild(el('span', 'asf-dt-badge', 'Current'));
      }
      labelCol.appendChild(yearsEl);
      labelCol.appendChild(
        el(
          'div',
          'asf-dt-term-dates',
          monthYearFmt.format(new Date(term.startTime)) + ' \u2013 ' + monthYearFmt.format(new Date(term.endTime))
        )
      );
      row.appendChild(labelCol);

      const membersCol = el('div', 'asf-dt-term-members');
      term.members.forEach(function (m) {
        const d = m.director;
        const pill = el('button', 'asf-dt-pill', d.name + (m.isFullTerm ? '' : ' *'));
        pill.type = 'button';
        if (!m.isFullTerm) pill.classList.add('is-partial');

        const isSel = state.selectedId === d.id;
        const isQueryMatch = q && matchesQuery(d, q);
        if (isSel || isQueryMatch) {
          pill.classList.add('is-selected');
        } else if (state.selectedId || q) {
          pill.classList.add('is-dimmed');
        }

        const termSegText = formatSegmentList(m.segmentsInTerm);
        pill.title = d.name + ' (@' + d.id + ')' + (m.isFullTerm ? '' : ' \u2014 Mid-term: ' + termSegText);
        pill.addEventListener('click', function () {
          state.selectedId = state.selectedId === d.id ? null : d.id;
          renderSelectionAndBody();
        });
        membersCol.appendChild(pill);
      });
      row.appendChild(membersCol);
      panel.appendChild(row);
    });

    if (shownTerms === 0) {
      panel.appendChild(el('div', 'asf-dt-empty', 'No directors match \u201c' + state.query + '\u201d.'));
    }

    footnote.innerHTML = '';
    footnote.appendChild(
      el(
        'span',
        null,
        '* Dashed pill indicates partial / mid-term service. Click any director to highlight all terms served.'
      )
    );
    if (q) {
      footnote.appendChild(el('span', null, 'Showing ' + shownTerms + ' of ' + terms.length + ' terms'));
    }
  }

  function renderDirectorsView() {
    panel.innerHTML = '';
    const q = state.query.trim().toLowerCase();
    const filtered = directors.filter(function (d) {
      return matchesQuery(d, q);
    });

    filtered.sort(function (a, b) {
      if (state.sortBy === 'tenure') {
        return b.totalMs - a.totalMs || b.lastEnd - a.lastEnd || a.name.localeCompare(b.name);
      }
      if (state.sortBy === 'earliest') {
        return a.firstStart - b.firstStart || a.name.localeCompare(b.name);
      }
      if (state.sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      // 'recent'
      return b.lastEnd - a.lastEnd || b.firstStart - a.firstStart || a.name.localeCompare(b.name);
    });

    const span = Math.max(1, maxEnd - minTime);
    const minYear = new Date(minTime).getFullYear();
    const maxYear = new Date(maxEnd).getFullYear();
    const tickYears = [minYear];
    for (let y = Math.ceil((minYear + 1) / 5) * 5; y < maxYear; y += 5) {
      if (y - minYear >= 3 && maxYear - y >= 4) {
        tickYears.push(y);
      }
    }
    tickYears.push(maxYear);

    // Axis header
    const head = el('div', 'asf-dt-dir-head');
    head.appendChild(el('span', null, 'Director'));
    const axis = el('div', 'asf-dt-axis');
    tickYears.forEach(function (y, idx) {
      const t = idx === 0
        ? minTime
        : idx === tickYears.length - 1
          ? maxEnd
          : new Date(y, 0, 1).getTime();
      const pct = ((t - minTime) / span) * 100;
      const tick = el('span', 'asf-dt-axis-tick', String(y));
      if (idx === 0) tick.classList.add('is-start');
      if (idx === tickYears.length - 1) tick.classList.add('is-end');
      tick.style.left = pct.toFixed(2) + '%';
      axis.appendChild(tick);
    });
    head.appendChild(axis);
    const durHead = el('span', null, 'Tenure');
    durHead.style.textAlign = 'right';
    head.appendChild(durHead);
    panel.appendChild(head);

    if (filtered.length === 0) {
      panel.appendChild(el('div', 'asf-dt-empty', 'No directors match \u201c' + state.query + '\u201d.'));
    } else {
      filtered.forEach(function (d) {
        const row = el('div', 'asf-dt-dir-row');
        if (d.isCurrent) row.classList.add('is-current');
        if (state.selectedId === d.id) row.classList.add('is-selected');
        row.title = d.name + ' (@' + d.id + '): ' + formatSegmentList(d.segments);

        const nameCol = el('div', 'asf-dt-dir-name', d.name);
        nameCol.appendChild(el('span', 'asf-dt-dir-id', '@' + d.id));
        row.appendChild(nameCol);

        const track = el('div', 'asf-dt-track');
        tickYears.slice(1, -1).forEach(function (y) {
          const line = el('div', 'asf-dt-gridline');
          const pct = ((new Date(y, 0, 1).getTime() - minTime) / span) * 100;
          line.style.left = pct.toFixed(2) + '%';
          track.appendChild(line);
        });

        d.segments.forEach(function (seg) {
          const leftPct = ((seg.start.getTime() - minTime) / span) * 100;
          const widthPct = ((seg.end.getTime() - seg.start.getTime()) / span) * 100;
          const bar = el('div', 'asf-dt-bar');
          bar.style.left = leftPct.toFixed(3) + '%';
          bar.style.width = widthPct.toFixed(3) + '%';
          track.appendChild(bar);
        });
        row.appendChild(track);

        row.appendChild(el('div', 'asf-dt-dir-dur', formatDuration(d.totalMs)));
        row.addEventListener('click', function () {
          state.selectedId = state.selectedId === d.id ? null : d.id;
          renderSelectionAndBody();
        });
        panel.appendChild(row);
      });
    }

    footnote.innerHTML = '';
    footnote.appendChild(
      el(
        'span',
        null,
        'Purple bars indicate current directors; navy bars indicate former directors. Click any row for exact dates.'
      )
    );
    footnote.appendChild(el('span', null, 'Showing ' + filtered.length + ' of ' + directors.length + ' directors'));
  }

  function renderSelectionAndBody() {
    renderDetailBanner();
    tabTerms.classList.toggle('is-active', state.view === 'terms');
    tabDirectors.classList.toggle('is-active', state.view === 'directors');
    sortGroup.style.display = state.view === 'directors' ? 'inline-flex' : 'none';
    if (state.view === 'terms') {
      renderTermsView();
    } else {
      renderDirectorsView();
    }
  }

  tabTerms.addEventListener('click', function () {
    if (state.view !== 'terms') {
      state.view = 'terms';
      renderSelectionAndBody();
    }
  });

  tabDirectors.addEventListener('click', function () {
    if (state.view !== 'directors') {
      state.view = 'directors';
      renderSelectionAndBody();
    }
  });

  searchInput.addEventListener('input', function () {
    state.query = searchInput.value;
    clearSearchBtn.style.display = state.query ? 'inline-block' : 'none';
    renderSelectionAndBody();
  });

  clearSearchBtn.addEventListener('click', function () {
    state.query = '';
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    renderSelectionAndBody();
  });

  renderSelectionAndBody();
};
