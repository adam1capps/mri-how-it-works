/* ===========================================================================
   Roof MRI - Quick Reference Guide
   Gate (acknowledgement) + identity watermark + anti-screenshot deterrents
   + the data-driven checklist guide (landing + step detail views).

   NOTE: Client-side gating and the deterrents below RAISE THE BAR against
   casual screenshots and sharing, but they are NOT hard security. The dynamic
   identity watermark is the strongest deterrent: any leaked screenshot carries
   the viewer's name, email, and timestamp. For true protection, gate the
   content server-side and only deliver it after a verified login.
   =========================================================================== */
(function () {
  'use strict';

  /* ----------------------------------------------------------------------- */
  /* Guide content                                                           */
  /* Step 1 is complete (verbatim from the live design). Steps 2-4 carry the */
  /* landing-card data; their checklists are added as screenshots arrive.    */
  /* ----------------------------------------------------------------------- */
  // OWNER: Roof MRI App URL (used by the Step 4 links).
  var APP_URL = 'https://scanning.roof-mri.com';

  var STEPS = [
    {
      n: 1,
      title: 'Grid Prep & Field Safety',
      desc: 'Prepare your grid and ensure site safety before scanning',
      color: '#e9edf5',
      sections: [
        { code: '1.1', title: 'Request Roof Grid', items: [
          'Login to Roof MRI App and submit your request.',
          'Receive grid in 24-48 hours (rush options available).',
          'Confirm grid accuracy and print 2-3 copies.'
        ]},
        { code: '1.2', title: 'Prepare Recon Kit', items: [
          'Make sure all items are in the kit and batteries are functioning properly.'
        ]},
        { code: '1.3', title: 'Verify Access & Safety', items: [
          'Confirm compliance with all OSHA, state, and local safety regulations.',
          'Prepare all necessary personal protective equipment (PPE) and fall protection gear.'
        ]},
        { code: '1.4', title: 'Check Weather Conditions', items: [
          'Confirm the roof is dry and no rain has occurred in the past 24–48 hours.',
          'Take backpack blower for all gravel and ballasted roofs.'
        ]}
      ],
      fieldRule: 'Do not proceed with the scan if the roof is wet, icy, or unsafe. Moisture detection accuracy depends on dry surface conditions.'
    },
    {
      n: 2,
      title: 'Calibration & Moisture Check',
      desc: 'Calibrate your equipment and verify moisture readings',
      color: '#12b76a',
      sections: [
        { code: '2.1', title: 'Print the grid', items: [
          'Have the printed grid available on site before starting.'
        ]},
        { code: '2.2', title: 'Gather tools', items: [
          'RWS, MEX5, calibration checkbox, pin probes, pre-punch tool.'
        ]},
        { code: '2.3', title: 'Prepare MEX5', items: [
          'Place MEX5 on the calibration checkbox',
          'Verify the display behaves as expected',
          'Take a photo',
          'If the display does not behave as expected, stop and resolve.'
        ]},
        { code: '2.4', title: 'Establish a baseline area', items: [
          'Place MEX5 on an area believed to be dry',
          'Move across nearby areas to identify the lowest relative response',
          'Mark this area on the grid as the baseline'
        ]},
        { code: '2.5', title: 'Identify a contrasting area', items: [
          'Locate an area that shows a clearly higher response than the baseline / floor reading.',
          'IMPORTANT: Your Calibration Point should be at least 40 REL higher than the Floor but no higher than 80.'
        ]},
        { code: '2.6', title: 'Verify consistency', items: [
          'Move the tool slightly within the same area',
          'Confirm the response remains consistent',
          'If inconsistent, relocate and repeat'
        ]},
        { code: '2.7', title: 'Calibrate RWS', items: [
          'Set RWS to yellow-yellow, sensitivity 1',
          'Place RWS next to MEX5 in the selected area',
          'Adjust RWS Sensitivity Knob until the needle rests at the same reading as is on the MEX5',
          'Take a photo of the devices side-by-side showing the calibration to the roof system',
          'Not performing as expected? Repeat the prior steps starting from 2.3.'
        ]},
        { code: '2.8', title: 'Moisture Confirmation', items: [
          'Insert roof probes toward the decking',
          'Confirm your MEX5 automatically changes to WME.',
          'Observe the response on the screen as you probe the roof.',
          'Tool behavior consistent with moisture presence may be noted',
          '** Take at least one photo confirming moisture reading **',
          '** Take a final photo of the pins touching a dry roof surface and the device reading 0.0 **'
        ]},
        { code: '2.9', title: 'Patch probe locations', items: [
          'Seal the two probe openings created during the check.'
        ]}
      ],
      fieldRule: 'If your moisture meter’s behavior is unclear or inconsistent, stop and re-establish the baseline before continuing. If problems continue please refer to your Tramex Manuals for troubleshooting the device.'
    },
    {
      n: 3,
      title: 'Roof Scan and Data Collection',
      desc: 'Systematically scan the roof and record findings',
      color: '#f5c518',
      sections: [
        { code: '3.1', title: 'Begin the scan', items: [
          'Begin the scan using the printed grid.',
          'Start in a corner of the first grid square, typically 5 feet in from each wall.',
          'Turn on the audible beeper on the RWS.'
        ]},
        { code: '3.2', title: 'Walk the roof', items: [
          'Walk the roof, following the grid lines and listening for fluctuations.'
        ]},
        { code: '3.3', title: 'Record moisture readings', items: [
          'Record moisture readings on the grid sheet.',
          'Simplify the reading: record a "4" for a 40s reading, "5" for a 50s reading, "6" for a 60s reading, etc. Do not record exact decimals.'
        ]},
        { code: '3.4', title: 'Complete all sections', items: [
          'Repeat the scan for all required roof sections.'
        ]}
      ],
      fieldRule: ''
    },
    {
      n: 4,
      title: 'Get Moisture Report',
      desc: 'Submit your data and receive your detailed report',
      color: '#ef4444',
      sections: [
        { code: '4.1', title: 'Fill out your request', items: [
          { html: 'All MRI Contractors get Unlimited Reports. Fill out your request on the home page of the <a href="' + APP_URL + '" target="_blank" rel="noopener">Roof MRI App</a>.' }
        ]},
        { code: '4.2', title: 'Upload your completed grid sheets', items: [
          'Upload your completed Roof MRI Grid Sheets with moisture reading recordings.'
        ]},
        { code: '4.3', title: 'Enter required information', items: [
          { html: 'Enter all required information into the <a href="' + APP_URL + '" target="_blank" rel="noopener">app</a> (floor reading, moisture probe values, calibration readings, etc.).' }
        ]},
        { code: '4.4', title: 'Submit the report request', items: [
          'Submit the report request.'
        ]},
        { code: '4.5', title: 'Await the final report', items: [
          'Await the final report (approx. 48-72 hours).'
        ]}
      ],
      fieldRule: ''
    }
  ];

  var ACK_KEY = 'roofmri_ack_v1';
  var CHK_PREFIX = 'roofmri_chk_v1:';

  var gate    = document.getElementById('gate');
  var app     = document.getElementById('app');
  var form    = document.getElementById('gate-form');
  var errorEl = document.getElementById('gate-error');
  var terms   = document.getElementById('terms');
  var hint    = document.getElementById('scrollhint');
  var watermark = document.getElementById('watermark');
  var shield  = document.getElementById('blur-shield');
  var welcome = document.getElementById('welcome');
  var stepsList = document.getElementById('steps-list');
  var viewLanding = document.getElementById('view-landing');
  var viewStep = document.getElementById('view-step');
  var overallProgress = document.getElementById('overall-progress');

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ----------------------------------------------------------------------- */
  /* Watermark                                                               */
  /* ----------------------------------------------------------------------- */
  function applyWatermark(identity) {
    var when = new Date().toLocaleString();
    var line1 = esc(identity.name || 'Authorized Viewer');
    var line2 = esc(identity.email || '');
    var line3 = 'CONFIDENTIAL · Roof MRI™ · ' + esc(when);
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="440" height="260">' +
      '<g transform="rotate(-28 220 130)" fill="#9fb0d8" font-family="Inter, sans-serif" text-anchor="middle">' +
      '<text x="220" y="118" font-size="18" font-weight="700">' + line1 + '</text>' +
      '<text x="220" y="142" font-size="15">' + line2 + '</text>' +
      '<text x="220" y="166" font-size="11" letter-spacing="1">' + line3 + '</text>' +
      '</g></svg>';
    watermark.style.backgroundImage = 'url("data:image/svg+xml;utf8,' + encodeURIComponent(svg) + '")';
    watermark.classList.add('is-on');
  }

  /* ----------------------------------------------------------------------- */
  /* Checklist progress (persisted in localStorage)                          */
  /* ----------------------------------------------------------------------- */
  function itemKey(stepN, code, i) { return CHK_PREFIX + stepN + ':' + code + ':' + i; }
  function isChecked(stepN, code, i) {
    try { return localStorage.getItem(itemKey(stepN, code, i)) === '1'; } catch (e) { return false; }
  }
  function setChecked(stepN, code, i, val) {
    try {
      if (val) localStorage.setItem(itemKey(stepN, code, i), '1');
      else localStorage.removeItem(itemKey(stepN, code, i));
    } catch (e) {}
  }
  function stepCounts(step) {
    var total = 0, done = 0;
    step.sections.forEach(function (sec) {
      sec.items.forEach(function (_, i) {
        total++;
        if (isChecked(step.n, sec.code, i)) done++;
      });
    });
    return { total: total, done: done };
  }

  // Pick a legible number colour for a given swatch background.
  function textColorFor(hex) {
    var h = hex.replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) > 150 ? '#0a0e1a' : '#ffffff';
  }
  function sectionCounts(step, sec) {
    var done = 0;
    sec.items.forEach(function (_, i) { if (isChecked(step.n, sec.code, i)) done++; });
    return { total: sec.items.length, done: done };
  }

  /* ----------------------------------------------------------------------- */
  /* Render: landing                                                         */
  /* ----------------------------------------------------------------------- */
  function renderLanding() {
    stepsList.innerHTML = '';
    STEPS.forEach(function (step) {
      var c = stepCounts(step);
      var pending = step.sections.length === 0;
      var complete = !pending && c.done === c.total;
      var pct = c.total ? Math.round(c.done / c.total * 100) : 0;
      var cta = pending ? 'Coming soon' : (complete ? 'Done ✓ · Review' : (c.done > 0 ? 'Continue →' : 'Start →'));
      var btn = document.createElement('button');
      btn.className = 'step' + (pending ? ' step--pending' : '') + (complete ? ' is-complete' : '');
      btn.setAttribute('data-step', String(step.n));
      btn.setAttribute('aria-label', 'Step ' + step.n + ': ' + step.title + (pending ? '' : ' — ' + c.done + ' of ' + c.total + ' complete'));
      btn.innerHTML =
        '<span class="step__swatch" style="background:' + step.color + ';color:' + textColorFor(step.color) + '">' + step.n + '</span>' +
        '<span class="step__body">' +
          '<span class="step__title">' + esc(step.title) + '</span>' +
          '<span class="step__desc">' + esc(step.desc) + '</span>' +
          (pending
            ? '<span class="step__cta">' + cta + '</span>'
            : '<span class="step__meta">' +
                '<span class="step__minibar"><span class="step__minifill" style="width:' + pct + '%"></span></span>' +
                '<span class="step__cta">' + cta + '</span>' +
              '</span>') +
        '</span>' +
        '<span class="step__chevron" aria-hidden="true">›</span>';
      btn.addEventListener('click', function () { showStep(step.n); });
      stepsList.appendChild(btn);
    });
    updateOverall();
  }

  function updateOverall() {
    var total = 0, done = 0;
    STEPS.forEach(function (s) { var c = stepCounts(s); total += c.total; done += c.done; });
    var pct = total ? Math.round(done / total * 100) : 0;
    var fill = document.getElementById('overall-fill');
    if (fill) fill.style.width = pct + '%';
    if (overallProgress) overallProgress.textContent = total ? (done + ' of ' + total + ' checks complete · ' + pct + '%') : '';
    var banner = document.getElementById('done-banner');
    if (banner) banner.hidden = !(total && done === total);
  }

  /* ----------------------------------------------------------------------- */
  /* Render: step detail                                                     */
  /* ----------------------------------------------------------------------- */
  function showStep(n) {
    var step = STEPS.filter(function (s) { return s.n === n; })[0];
    if (!step) return;
    app.classList.add('is-step');
    var c = stepCounts(step);

    var html =
      '<div class="stepbar">' +
        '<button class="back" id="back-btn" aria-label="Back to overview">&#8592; Back</button>' +
        '<span class="stepbar__title">' + esc(step.title) + '</span>' +
        (step.sections.length ? '<span class="stepbar__prog' + (c.done === c.total ? ' is-complete' : '') + '" id="step-prog">' + c.done + '/' + c.total + '</span>' : '') +
      '</div>' +
      '<div class="stepdetail__head">' +
        '<span class="stepdetail__swatch" style="background:' + step.color + ';color:' + textColorFor(step.color) + '">' + step.n + '</span>' +
        '<h1 class="stepdetail__title">' + esc(step.title) + '</h1>' +
      '</div>';

    if (step.sections.length === 0) {
      html += '<div class="pending-note">Checklist content for this step is being added.</div>';
    } else {
      step.sections.forEach(function (sec) {
        var sc = sectionCounts(step, sec);
        html += '<div class="section-card">' +
          '<div class="section-card__head">' +
            '<h2 class="section-card__title"><span class="section-card__code">' + esc(sec.code) + '</span><span class="section-card__sep">|</span>' + esc(sec.title) + '</h2>' +
            '<span class="section-card__prog' + (sc.done === sc.total ? ' is-complete' : '') + '" data-secprog="' + esc(sec.code) + '">' + sc.done + '/' + sc.total + '</span>' +
          '</div>';
        sec.items.forEach(function (item, i) {
          var id = 'chk-' + step.n + '-' + sec.code.replace('.', '_') + '-' + i;
          html += '<label class="check" for="' + id + '">' +
            '<input type="checkbox" id="' + id + '" data-step="' + step.n + '" data-code="' + esc(sec.code) + '" data-i="' + i + '"' + (isChecked(step.n, sec.code, i) ? ' checked' : '') + ' />' +
            '<span class="check__box" aria-hidden="true"></span>' +
            '<span class="check__text">' + (typeof item === 'string' ? esc(item) : item.html) + '</span>' +
          '</label>';
        });
        html += '</div>';
      });
      if (step.fieldRule) {
        html += '<div class="fieldrule"><p class="fieldrule__title"><span>&#9888;&#65039;</span> Field rule</p><p class="fieldrule__body">' + esc(step.fieldRule) + '</p></div>';
      }
      var next = STEPS.filter(function (s) { return s.n === step.n + 1; })[0];
      html += '<div class="stepnav">';
      if (next) {
        html += '<button class="btn btn--ghost stepnav__overview" id="overview-btn">Overview</button>' +
                '<button class="btn btn--primary" id="next-btn">Next: ' + esc(next.title) + ' &#8594;</button>';
      } else {
        html += '<button class="btn btn--primary btn--block" id="overview-btn">Finish &#10003; · Back to overview</button>';
      }
      html += '</div>';
    }

    viewStep.innerHTML = html;
    viewStep.hidden = false;
    viewLanding.hidden = true;

    document.getElementById('back-btn').addEventListener('click', showLanding);
    var ov = document.getElementById('overview-btn'); if (ov) ov.addEventListener('click', showLanding);
    var nx = document.getElementById('next-btn'); if (nx) nx.addEventListener('click', function () { showStep(step.n + 1); });

    Array.prototype.forEach.call(viewStep.querySelectorAll('input[type=checkbox]'), function (cb) {
      cb.addEventListener('change', function () {
        setChecked(+cb.getAttribute('data-step'), cb.getAttribute('data-code'), +cb.getAttribute('data-i'), cb.checked);
        updateStepUI(step);
      });
    });
    window.scrollTo(0, 0);
  }

  // Live-update the sticky progress pill + per-section pills as items are checked.
  function updateStepUI(step) {
    var c = stepCounts(step);
    var hp = document.getElementById('step-prog');
    if (hp) { hp.textContent = c.done + '/' + c.total; hp.classList.toggle('is-complete', c.done === c.total); }
    step.sections.forEach(function (sec) {
      var sc = sectionCounts(step, sec);
      var el = viewStep.querySelector('[data-secprog="' + sec.code + '"]');
      if (el) { el.textContent = sc.done + '/' + sc.total; el.classList.toggle('is-complete', sc.done === sc.total); }
    });
  }

  function showLanding() {
    app.classList.remove('is-step');
    viewStep.hidden = true;
    viewStep.innerHTML = '';
    viewLanding.hidden = false;
    renderLanding();
    window.scrollTo(0, 0);
  }

  /* ----------------------------------------------------------------------- */
  /* Reveal app                                                              */
  /* ----------------------------------------------------------------------- */
  function unlock(identity, persist) {
    if (persist) {
      try { sessionStorage.setItem(ACK_KEY, JSON.stringify(identity)); } catch (e) {}
    }
    gate.hidden = true;
    gate.style.display = 'none';
    app.hidden = false;
    welcome.textContent = 'Welcome, ' + (identity.name || 'Contractor') + '!';
    applyWatermark(identity);
    renderLanding();
    window.scrollTo(0, 0);
  }

  try {
    var saved = sessionStorage.getItem(ACK_KEY);
    if (saved) unlock(JSON.parse(saved), false);
  } catch (e) {}

  /* ----------------------------------------------------------------------- */
  /* Gate form                                                               */
  /* ----------------------------------------------------------------------- */
  function showError(msg) { errorEl.textContent = msg; errorEl.hidden = false; }
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      errorEl.hidden = true;
      var name  = (document.getElementById('full-name').value || '').trim();
      var email = (document.getElementById('email').value || '').trim();
      var agreed = document.getElementById('agree').checked;
      if (name.length < 2) { showError('Please enter your full name.'); return; }
      if (!EMAIL_RE.test(email)) { showError('Please enter a valid email address.'); return; }
      if (!agreed) { showError('You must read and agree to the terms to continue.'); return; }
      unlock({ name: name, email: email }, true);
    });
  }

  if (terms && hint) {
    terms.addEventListener('scroll', function () {
      if (terms.scrollTop > 24) hint.style.opacity = '0';
    });
  }

  /* ----------------------------------------------------------------------- */
  /* Anti-screenshot / anti-copy deterrents                                  */
  /* ----------------------------------------------------------------------- */
  function isTextField(el) {
    if (!el) return false;
    var tag = el.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || (el.closest && el.closest('#terms'));
  }
  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  document.addEventListener('selectstart', function (e) { if (!isTextField(e.target)) e.preventDefault(); });
  document.addEventListener('dragstart', function (e) { e.preventDefault(); });
  ['copy', 'cut'].forEach(function (type) {
    document.addEventListener(type, function (e) { if (!isTextField(e.target)) e.preventDefault(); });
  });
  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    var ctrl = e.ctrlKey || e.metaKey;
    if (k === 'printscreen') {
      flashShield();
      try { navigator.clipboard && navigator.clipboard.writeText(''); } catch (err) {}
      e.preventDefault(); return;
    }
    if (ctrl && (k === 's' || k === 'p')) { e.preventDefault(); return; }
    if (k === 'f12') { e.preventDefault(); return; }
    if (ctrl && e.shiftKey && (k === 'i' || k === 'j' || k === 'c')) { e.preventDefault(); return; }
  });

  function showShield() { if (!app.hidden) shield.classList.add('is-on'); }
  function hideShield() { shield.classList.remove('is-on'); }
  function flashShield() { showShield(); setTimeout(hideShield, 1200); }
  document.addEventListener('visibilitychange', function () { if (document.hidden) showShield(); else hideShield(); });
  window.addEventListener('blur', showShield);
  window.addEventListener('focus', hideShield);
})();
