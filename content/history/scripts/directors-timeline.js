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
  const DAYS_PER_YEAR = 365.25;

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

  // Normalize each director with precomputed tenure and status flags.
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

  // Build chronological terms first so we can compute term-over-term turnover.
  const termsChrono = [];
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
    members.sort(function (a, b) {
      if (a.isFullTerm !== b.isFullTerm) return a.isFullTerm ? -1 : 1;
      return a.director.name.localeCompare(b.director.name);
    });

    const prevIds = i > 0
      ? new Set(termsChrono[i - 1].members.map(function (m) { return m.director.id; }))
      : null;
    const incomingCount = prevIds
      ? members.filter(function (m) { return !prevIds.has(m.director.id); }).length
      : 0;

    termsChrono.push({
      label: startBound.year + '\u2013' + endBound.year,
      startTime: startBound.time,
      endTime: endBound.time,
      isCurrent: endBound.time === maxEnd,
      incomingCount: incomingCount,
      hasPrev: i > 0,
      members: members
    });
  }

  // Summary analytics
  const currentDirectors = directors
    .filter(function (d) { return d.isCurrent; })
    .sort(function (a, b) { return a.name.localeCompare(b.name); });
  const formerCount = directors.length - currentDirectors.length;

  const sortedByTenure = directors
    .slice()
    .sort(function (a, b) { return a.totalMs - b.totalMs; });
  const midIdx = Math.floor(sortedByTenure.length / 2);
  const medianMs = sortedByTenure.length % 2 === 1
    ? sortedByTenure[midIdx].totalMs
    : (sortedByTenure[midIdx - 1].totalMs + sortedByTenure[midIdx].totalMs) / 2;
  const avgMs = directors.reduce(function (sum, d) { return sum + d.totalMs; }, 0) / directors.length;

  function formatDuration(ms) {
    const days = ms / MS_PER_DAY;
    if (days < 45) {
      const months = Math.max(1, Math.round(days / 30.4375));
      return months + (months === 1 ? ' mo' : ' mos');
    }
    const years = days / DAYS_PER_YEAR;
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
      '.asf-dt-root { font-family: inherit; color: #1f2937; margin: 1.15rem 0 1.25rem; }',
      '.asf-dt-root * { box-sizing: border-box; }',
      '.asf-dt-summary { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 0.9rem 1.1rem; box-shadow: 0 2px 10px rgba(40, 38, 94, 0.05); margin-bottom: 0.9rem; }',
      '.asf-dt-stats-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #f3f4f6; }',
      '.asf-dt-stat { display: flex; flex-direction: column; min-width: 0; }',
      '.asf-dt-stat-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; color: #6b7280; font-weight: 600; }',
      '.asf-dt-stat-value { font-family: Montserrat, sans-serif; font-size: 1.05rem; font-weight: 700; color: #28265E; line-height: 1.25; margin-top: 0.12rem; }',
      '.asf-dt-stat-sub { font-size: 0.75rem; color: #6b7280; margin-top: 0.1rem; }',
      '.asf-dt-current-line { padding-top: 0.7rem; font-size: 0.84rem; line-height: 1.6; color: #374151; }',
      '.asf-dt-current-label { font-weight: 700; color: #28265E; margin-right: 0.35rem; }',
      '.asf-dt-inline-btn { border: none; background: transparent; padding: 0.08rem 0.3rem; margin: 0; border-radius: 4px; font: inherit; color: #28265E; cursor: pointer; transition: background-color 0.12s, color 0.12s; }',
      '.asf-dt-inline-btn:hover { background: #FEF4FF; color: #7C297D; }',
      '.asf-dt-inline-btn.is-selected { background: #7C297D; color: #fff; font-weight: 600; }',
      '.asf-dt-controls { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.55rem; margin-bottom: 0.75rem; }',
      '.asf-dt-controls-left { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; }',
      '.asf-dt-tabs { display: inline-flex; background: #e5e7eb; border-radius: 8px; padding: 3px; gap: 3px; }',
      '.asf-dt-tab { border: none; background: transparent; color: #374151; font-size: 0.82rem; font-weight: 600; padding: 0.35rem 0.8rem; border-radius: 6px; cursor: pointer; white-space: nowrap; transition: background-color 0.12s, color 0.12s; }',
      '.asf-dt-tab:hover { color: #28265E; }',
      '.asf-dt-tab.is-active { background: #28265E; color: #fff; }',
      '.asf-dt-cohorts { display: inline-flex; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 8px; padding: 2px; gap: 2px; }',
      '.asf-dt-cohort-btn { border: none; background: transparent; color: #4b5563; font-size: 0.78rem; font-weight: 600; padding: 0.3rem 0.6rem; border-radius: 6px; cursor: pointer; white-space: nowrap; transition: background-color 0.12s, color 0.12s; }',
      '.asf-dt-cohort-btn:hover { color: #28265E; }',
      '.asf-dt-cohort-btn.is-active { background: #fff; color: #7C297D; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08); }',
      '.asf-dt-tools { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; }',
      '.asf-dt-search-wrap { position: relative; display: inline-flex; align-items: center; }',
      '.asf-dt-search { border: 1px solid #d1d5db; border-radius: 6px; padding: 0 1.8rem 0 0.65rem; height: 34px; line-height: 1.2; font-size: 0.82rem; background: #fff; color: #111827; min-width: 195px; }',
      '.asf-dt-search:focus { outline: none; border-color: #7C297D; box-shadow: 0 0 0 2px rgba(124, 41, 125, 0.15); }',
      '.asf-dt-clear-btn { position: absolute; right: 0.35rem; border: none; background: transparent; color: #6b7280; font-size: 1rem; line-height: 1; cursor: pointer; padding: 0.1rem 0.25rem; }',
      '.asf-dt-clear-btn:hover { color: #111827; }',
      '.asf-dt-sort-group { display: inline-flex; align-items: center; background: #e5e7eb; border-radius: 6px; padding: 2px; gap: 2px; height: 34px; }',
      '.asf-dt-sort-btn { border: none; background: transparent; color: #374151; font-size: 0.78rem; font-weight: 600; padding: 0.22rem 0.55rem; border-radius: 5px; cursor: pointer; white-space: nowrap; transition: background-color 0.12s, color 0.12s; }',
      '.asf-dt-sort-btn:hover { color: #28265E; }',
      '.asf-dt-sort-btn.is-active { background: #fff; color: #28265E; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08); }',
      '.asf-dt-panel { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(40, 38, 94, 0.05); }',
      '.asf-dt-context-bar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; padding: 0.55rem 1rem; background: #FEF4FF; border-bottom: 1px solid #f3e8ff; font-size: 0.8rem; color: #4b5563; }',
      '.asf-dt-context-strong { font-weight: 700; color: #28265E; margin-right: 0.35rem; }',
      '.asf-dt-context-hint { font-size: 0.74rem; color: #6b7280; }',
      '.asf-dt-term-row { display: grid; grid-template-columns: 215px minmax(0, 1fr); gap: 0.75rem; padding: 0.65rem 1rem; border-bottom: 1px solid #f3f4f6; align-items: start; }',
      '.asf-dt-term-row:last-child { border-bottom: none; }',
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
      '.asf-dt-pill.is-matched { border-color: #7C297D; color: #7C297D; background: #FEF4FF; font-weight: 600; }',
      '.asf-dt-pill.is-dimmed { opacity: 0.4; }',
      '.asf-dt-dir-head { display: grid; grid-template-columns: 270px minmax(0, 1fr) 72px; gap: 0.75rem; padding: 0.55rem 1rem; background: #f9fafb; border-bottom: 1px solid #e5e7eb; font-size: 0.75rem; font-weight: 700; color: #4b5563; align-items: center; }',
      '.asf-dt-axis { position: relative; height: 1.1rem; }',
      '.asf-dt-axis-tick { position: absolute; top: 0; transform: translateX(-50%); font-size: 0.7rem; color: #6b7280; white-space: nowrap; }',
      '.asf-dt-axis-tick.is-start { transform: translateX(0); }',
      '.asf-dt-axis-tick.is-end { transform: translateX(-100%); }',
      '.asf-dt-dir-row { display: grid; grid-template-columns: 270px minmax(0, 1fr) 72px; gap: 0.75rem; padding: 0.48rem 1rem; border-bottom: 1px solid #f3f4f6; align-items: center; cursor: pointer; transition: background-color 0.12s; }',
      '.asf-dt-dir-row:last-child { border-bottom: none; }',
      '.asf-dt-dir-row:hover { background: #f9fafb; }',
      '.asf-dt-dir-name { font-size: 0.82rem; font-weight: 600; color: #1f2937; line-height: 1.3; }',
      '.asf-dt-dir-id { font-size: 0.72rem; font-weight: 400; color: #6b7280; margin-left: 0.3rem; white-space: nowrap; }',
      '.asf-dt-dir-spans { grid-column: 1 / -1; font-size: 0.78rem; color: #4b5563; padding-top: 0.25rem; border-top: 1px dashed #e5e7eb; }',
      '.asf-dt-track { position: relative; height: 14px; background: #f3f4f6; border-radius: 4px; overflow: hidden; }',
      '.asf-dt-gridline { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(0, 0, 0, 0.06); pointer-events: none; }',
      '.asf-dt-bar { position: absolute; top: 2px; bottom: 2px; background: #28265E; border-radius: 3px; opacity: 0.88; min-width: 3px; }',
      '.asf-dt-dir-row.is-current .asf-dt-bar { background: #7C297D; opacity: 0.95; }',
      '.asf-dt-dir-dur { font-size: 0.76rem; color: #4b5563; text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }',
      '.asf-dt-empty { padding: 1.5rem; text-align: center; color: #6b7280; font-size: 0.88rem; }',
      '.asf-dt-footnote { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem; margin-top: 0.55rem; font-size: 0.76rem; color: #6b7280; }',
      '@media (max-width: 820px) {',
      '  .asf-dt-term-row { grid-template-columns: 1fr; gap: 0.45rem; }',
      '  .asf-dt-term-label { flex-direction: row; flex-wrap: wrap; align-items: baseline; gap: 0.6rem; }',
      '  .asf-dt-dir-head { display: none; }',
      '  .asf-dt-dir-row { grid-template-columns: minmax(0, 1fr) 64px; row-gap: 0.25rem; }',
      '  .asf-dt-track { grid-column: 1 / -1; order: 3; }',
      '  .asf-dt-dir-spans { order: 4; }',
      '}',
      '@media (max-width: 520px) {',
      '  .asf-dt-stats-grid { grid-template-columns: 1fr; gap: 0.55rem; }',
      '  .asf-dt-search { min-width: 155px; width: 100%; }',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  injectStyles();

  const state = {
    view: 'terms',        // 'terms' | 'directors'
    cohort: 'all',        // 'all' | 'current'
    query: '',
    termOrder: 'desc',    // 'desc' (2026->1999) | 'asc' (1999->2026)
    sortBy: 'recent',     // 'recent' | 'tenure' | 'earliest' | 'name'
    sortDir: 'desc',      // 'asc' | 'desc'
    selectedId: null
  };

  const DEFAULT_SORT_DIR = {
    recent: 'desc',
    tenure: 'desc',
    earliest: 'asc',
    name: 'asc'
  };

  const root = el('div', 'asf-dt-root');
  chartDom.innerHTML = '';
  chartDom.style.height = 'auto';
  chartDom.appendChild(root);

  function toggleDirectorSelection(id) {
    if (window.getSelection && window.getSelection().toString()) {
      return;
    }
    state.selectedId = state.selectedId === id ? null : id;
    renderAll();
    // Keep the filtered detail view in the viewport when clicking while scrolled down.
    if (state.selectedId) {
      const panelTop = panel.getBoundingClientRect().top;
      if (panelTop < 12 || panelTop > window.innerHeight - 80) {
        controls.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Summary & Current Board Line
  const summary = el('section', 'asf-dt-summary');
  const statsGrid = el('div', 'asf-dt-stats-grid');

  const firstYear = new Date(minTime).getFullYear();
  const lastYear = new Date(maxEnd).getFullYear();

  function addStat(label, value, sub) {
    const box = el('div', 'asf-dt-stat');
    box.appendChild(el('span', 'asf-dt-stat-label', label));
    box.appendChild(el('span', 'asf-dt-stat-value', value));
    if (sub) box.appendChild(el('span', 'asf-dt-stat-sub', sub));
    statsGrid.appendChild(box);
  }

  addStat('Board Span', firstYear + '\u2013' + lastYear, termsChrono.length + ' annual terms');
  addStat(
    'Directors',
    directors.length + ' total',
    currentDirectors.length + ' current \u00b7 ' + formerCount + ' former'
  );
  addStat(
    'Typical Tenure',
    formatDuration(medianMs) + ' median',
    formatDuration(avgMs) + ' average'
  );
  summary.appendChild(statsGrid);

  const latestTermLabel = termsChrono.length > 0 ? termsChrono[termsChrono.length - 1].label : 'Current';
  const currentLine = el('div', 'asf-dt-current-line');
  currentLine.appendChild(el('span', 'asf-dt-current-label', 'Current Board (' + latestTermLabel + '):'));
  const currentInlineButtons = new Map();
  currentDirectors.forEach(function (d, idx) {
    const btn = el('button', 'asf-dt-inline-btn', d.name);
    btn.type = 'button';
    btn.title = '@' + d.id + ' \u00b7 ' + formatDuration(d.totalMs) + ' \u2014 click to filter';
    btn.addEventListener('click', function () {
      toggleDirectorSelection(d.id);
    });
    currentInlineButtons.set(d.id, btn);
    currentLine.appendChild(btn);
    if (idx < currentDirectors.length - 1) {
      currentLine.appendChild(document.createTextNode('\u00b7'));
    }
  });
  summary.appendChild(currentLine);
  root.appendChild(summary);

  // Controls Toolbar
  const controls = el('div', 'asf-dt-controls');
  const controlsLeft = el('div', 'asf-dt-controls-left');

  const tabs = el('div', 'asf-dt-tabs');
  tabs.setAttribute('role', 'tablist');

  const tabTerms = el('button', 'asf-dt-tab', 'By Term (' + termsChrono.length + ')');
  tabTerms.type = 'button';
  tabTerms.setAttribute('role', 'tab');

  const tabDirectors = el('button', 'asf-dt-tab', 'By Director (' + directors.length + ')');
  tabDirectors.type = 'button';
  tabDirectors.setAttribute('role', 'tab');

  tabs.appendChild(tabTerms);
  tabs.appendChild(tabDirectors);
  controlsLeft.appendChild(tabs);

  const cohorts = el('div', 'asf-dt-cohorts');
  cohorts.setAttribute('role', 'group');
  cohorts.setAttribute('aria-label', 'Filter cohort');
  const cohortButtons = new Map();
  [
    ['all', 'All (' + directors.length + ')'],
    ['current', 'Current (' + currentDirectors.length + ')']
  ].forEach(function (c) {
    const btn = el('button', 'asf-dt-cohort-btn', c[1]);
    btn.type = 'button';
    btn.addEventListener('click', function () {
      state.cohort = c[0];
      state.selectedId = null;
      renderAll();
    });
    cohortButtons.set(c[0], btn);
    cohorts.appendChild(btn);
  });
  controlsLeft.appendChild(cohorts);
  controls.appendChild(controlsLeft);

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

  const termOrderBtn = el('button', 'asf-dt-sort-btn');
  termOrderBtn.type = 'button';
  termOrderBtn.style.background = '#fff';
  termOrderBtn.style.border = '1px solid #d1d5db';
  termOrderBtn.style.height = '34px';
  termOrderBtn.style.padding = '0 0.65rem';
  termOrderBtn.addEventListener('click', function () {
    state.termOrder = state.termOrder === 'desc' ? 'asc' : 'desc';
    renderAll();
  });
  tools.appendChild(termOrderBtn);

  const sortGroup = el('div', 'asf-dt-sort-group');
  sortGroup.setAttribute('role', 'group');
  sortGroup.setAttribute('aria-label', 'Sort directors');
  const sortButtons = new Map();
  [
    ['recent', 'Recent'],
    ['tenure', 'Tenure'],
    ['earliest', 'Joined'],
    ['name', 'Name']
  ].forEach(function (opt) {
    const btn = el('button', 'asf-dt-sort-btn');
    btn.type = 'button';
    btn.addEventListener('click', function () {
      if (state.sortBy === opt[0]) {
        state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortBy = opt[0];
        state.sortDir = DEFAULT_SORT_DIR[opt[0]];
      }
      renderAll();
    });
    sortButtons.set(opt[0], btn);
    sortGroup.appendChild(btn);
  });
  tools.appendChild(sortGroup);
  controls.appendChild(tools);
  root.appendChild(controls);

  // Main Panel + Footnote
  const panel = el('div', 'asf-dt-panel');
  root.appendChild(panel);

  const footnote = el('div', 'asf-dt-footnote');
  root.appendChild(footnote);

  function matchesCohortAndQuery(d, q) {
    if (state.cohort === 'current' && !d.isCurrent) return false;
    if (q && d.name.toLowerCase().indexOf(q) === -1 && d.id.toLowerCase().indexOf(q) === -1) {
      return false;
    }
    return true;
  }

  function updateSortLabels() {
    termOrderBtn.textContent = state.termOrder === 'desc' ? 'Newest \u2193' : 'Oldest \u2191';
    termOrderBtn.title = state.termOrder === 'desc'
      ? 'Showing newest terms first (click for oldest first)'
      : 'Showing oldest terms first (click for newest first)';

    sortButtons.forEach(function (btn, key) {
      const isActive = state.sortBy === key;
      btn.classList.toggle('is-active', isActive);
      const dir = isActive ? state.sortDir : DEFAULT_SORT_DIR[key];
      const arrow = dir === 'asc' ? ' \u2191' : ' \u2193';
      if (key === 'name') {
        btn.textContent = dir === 'asc' ? 'A\u2013Z' : 'Z\u2013A';
      } else if (key === 'recent') {
        btn.textContent = 'Recent' + (isActive ? arrow : '');
      } else if (key === 'tenure') {
        btn.textContent = 'Tenure' + (isActive ? arrow : '');
      } else if (key === 'earliest') {
        btn.textContent = 'Joined' + (isActive ? arrow : '');
      }
      btn.title = isActive ? 'Click to reverse sort order' : 'Sort by ' + key;
    });
  }

  function renderSelectedContextBar(countLabel) {
    if (!state.selectedId || !directorsById.has(state.selectedId)) return;
    const d = directorsById.get(state.selectedId);
    const bar = el('div', 'asf-dt-context-bar');
    const left = el('div');
    left.appendChild(el('span', 'asf-dt-context-strong', d.name + ' (@' + d.id + ')'));
    left.appendChild(
      el(
        'span',
        null,
        formatDuration(d.totalMs) + ' \u00b7 ' + countLabel + ' \u00b7 ' + formatSegmentList(d.segments)
      )
    );
    bar.appendChild(left);
    bar.appendChild(el('span', 'asf-dt-context-hint', 'Click director again to show all'));
    panel.appendChild(bar);
  }

  function renderTermsView() {
    panel.innerHTML = '';
    const q = state.query.trim().toLowerCase();
    const hasFilter = Boolean(q) || state.cohort !== 'all';
    const selectedDirector = state.selectedId ? directorsById.get(state.selectedId) : null;

    const orderedTerms = state.termOrder === 'desc' ? termsChrono.slice().reverse() : termsChrono;
    const visibleTerms = orderedTerms.filter(function (term) {
      if (selectedDirector) {
        return term.members.some(function (m) { return m.director.id === selectedDirector.id; });
      }
      if (hasFilter) {
        return term.members.some(function (m) { return matchesCohortAndQuery(m.director, q); });
      }
      return true;
    });

    if (selectedDirector) {
      renderSelectedContextBar(
        visibleTerms.length + (visibleTerms.length === 1 ? ' term' : ' terms')
      );
    }

    visibleTerms.forEach(function (term) {
      const row = el('div', 'asf-dt-term-row');
      if (term.isCurrent) row.classList.add('is-current-term');

      const labelCol = el('div', 'asf-dt-term-label');
      const yearsEl = el('div', 'asf-dt-term-years', term.label);
      if (term.isCurrent) {
        yearsEl.appendChild(el('span', 'asf-dt-badge', 'Current'));
      }
      labelCol.appendChild(yearsEl);
      const changeText = term.hasPrev
        ? (term.incomingCount === 0 ? 'no changes' : term.incomingCount + ' incoming')
        : 'founding board';
      labelCol.appendChild(
        el(
          'div',
          'asf-dt-term-dates',
          monthYearFmt.format(new Date(term.startTime)) + ' \u2013 ' + monthYearFmt.format(new Date(term.endTime)) + ' \u00b7 ' + changeText
        )
      );
      row.appendChild(labelCol);

      const membersCol = el('div', 'asf-dt-term-members');
      term.members.forEach(function (m) {
        const d = m.director;
        const pill = el('button', 'asf-dt-pill', d.name + (m.isFullTerm ? '' : ' *'));
        pill.type = 'button';
        if (!m.isFullTerm) pill.classList.add('is-partial');

        const isSel = selectedDirector && selectedDirector.id === d.id;
        const isFilterMatch = !selectedDirector && hasFilter && matchesCohortAndQuery(d, q);
        if (isSel) {
          pill.classList.add('is-selected');
        } else if (isFilterMatch) {
          pill.classList.add('is-matched');
        } else if (!selectedDirector && hasFilter) {
          pill.classList.add('is-dimmed');
        }

        const termSegText = formatSegmentList(m.segmentsInTerm);
        pill.title = d.name + ' (@' + d.id + ', ' + formatDuration(d.totalMs) + ')'
          + (m.isFullTerm ? '' : ' \u2014 Mid-term: ' + termSegText)
          + (isSel ? ' \u2014 click again to show all' : ' \u2014 click to filter');
        pill.addEventListener('click', function () {
          toggleDirectorSelection(d.id);
        });
        membersCol.appendChild(pill);
      });
      row.appendChild(membersCol);
      panel.appendChild(row);
    });

    if (visibleTerms.length === 0) {
      panel.appendChild(el('div', 'asf-dt-empty', 'No terms match the current filter.'));
    }

    footnote.innerHTML = '';
    footnote.appendChild(
      el(
        'span',
        null,
        '* Dashed pill indicates partial / mid-term service. Click any director to filter to their terms.'
      )
    );
    footnote.appendChild(
      el(
        'span',
        null,
        'Showing ' + visibleTerms.length + ' of ' + termsChrono.length + ' terms'
      )
    );
  }

  function renderDirectorsView() {
    panel.innerHTML = '';
    const q = state.query.trim().toLowerCase();
    const selectedDirector = state.selectedId ? directorsById.get(state.selectedId) : null;

    const filtered = selectedDirector
      ? [selectedDirector]
      : directors.filter(function (d) { return matchesCohortAndQuery(d, q); });

    const dirSign = state.sortDir === 'asc' ? 1 : -1;
    filtered.sort(function (a, b) {
      let cmp = 0;
      if (state.sortBy === 'tenure') {
        cmp = a.totalMs - b.totalMs || a.lastEnd - b.lastEnd;
      } else if (state.sortBy === 'earliest') {
        cmp = a.firstStart - b.firstStart;
      } else if (state.sortBy === 'name') {
        cmp = a.name.localeCompare(b.name);
      } else {
        cmp = a.lastEnd - b.lastEnd || a.firstStart - b.firstStart;
      }
      if (cmp !== 0) return cmp * dirSign;
      return a.name.localeCompare(b.name);
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
      panel.appendChild(el('div', 'asf-dt-empty', 'No directors match the current filter.'));
    } else {
      filtered.forEach(function (d) {
        const isSelected = Boolean(selectedDirector && selectedDirector.id === d.id);
        const row = el('div', 'asf-dt-dir-row');
        if (d.isCurrent) row.classList.add('is-current');
        row.title = d.name + ' (@' + d.id + '): ' + formatSegmentList(d.segments)
          + (isSelected ? ' \u2014 click again to show all' : ' \u2014 click to inspect');

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

        if (isSelected) {
          const termCount = termsChrono.filter(function (t) {
            return t.members.some(function (m) { return m.director.id === d.id; });
          }).length;
          row.appendChild(
            el(
              'div',
              'asf-dt-dir-spans',
              termCount + (termCount === 1 ? ' term' : ' terms') + ' \u00b7 ' + formatSegmentList(d.segments) + '  (click row again to show all)'
            )
          );
        }

        row.addEventListener('click', function () {
          toggleDirectorSelection(d.id);
        });
        panel.appendChild(row);
      });
    }

    footnote.innerHTML = '';
    footnote.appendChild(
      el(
        'span',
        null,
        'Purple bars indicate current directors; navy bars indicate former directors. Click any row to focus & see exact dates.'
      )
    );
    footnote.appendChild(el('span', null, 'Showing ' + filtered.length + ' of ' + directors.length + ' directors'));
  }

  function renderAll() {
    currentInlineButtons.forEach(function (btn, id) {
      btn.classList.toggle('is-selected', state.selectedId === id);
    });
    tabTerms.classList.toggle('is-active', state.view === 'terms');
    tabDirectors.classList.toggle('is-active', state.view === 'directors');
    cohortButtons.forEach(function (btn, key) {
      btn.classList.toggle('is-active', state.cohort === key);
    });

    termOrderBtn.style.display = state.view === 'terms' ? 'inline-block' : 'none';
    sortGroup.style.display = state.view === 'directors' ? 'inline-flex' : 'none';
    updateSortLabels();

    if (state.view === 'terms') {
      renderTermsView();
    } else {
      renderDirectorsView();
    }
  }

  tabTerms.addEventListener('click', function () {
    if (state.view !== 'terms') {
      state.view = 'terms';
      renderAll();
    }
  });

  tabDirectors.addEventListener('click', function () {
    if (state.view !== 'directors') {
      state.view = 'directors';
      renderAll();
    }
  });

  searchInput.addEventListener('input', function () {
    state.query = searchInput.value;
    state.selectedId = null;
    clearSearchBtn.style.display = state.query ? 'inline-block' : 'none';
    renderAll();
  });

  clearSearchBtn.addEventListener('click', function () {
    state.query = '';
    state.selectedId = null;
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    renderAll();
  });

  renderAll();
};
