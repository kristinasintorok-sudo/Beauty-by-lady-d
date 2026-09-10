
  // Scroll-triggered fade-up animations
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

  // FAQ accordion — only one open at a time
  const allDetails = document.querySelectorAll('.faq details.q');
  allDetails.forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        allDetails.forEach(o => { if (o !== d) o.open = false; });
      }
    });
  });

  // Training photo strip — auto-scroll + drag/swipe
  (function() {
    const strip = document.querySelector('.training-strip');
    const track = document.querySelector('.training-track');
    if (!strip || !track) return;

    let offset = 0;
    let isDragging = false;
    let startX = 0;
    let startOffset = 0;
    const speed = 0.6;

    function halfWidth() { return track.scrollWidth / 2; }

    function tick() {
      if (!isDragging) {
        offset += speed;
        const hw = halfWidth();
        if (offset >= hw) offset -= hw;
        track.style.transform = 'translateX(' + (-offset) + 'px)';
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    function dragStart(x) {
      isDragging = true;
      startX = x;
      startOffset = offset;
      strip.classList.add('is-dragging');
    }
    function dragMove(x) {
      if (!isDragging) return;
      let o = startOffset + (startX - x);
      const hw = halfWidth();
      if (o < 0) o += hw;
      if (o >= hw) o -= hw;
      offset = o;
      track.style.transform = 'translateX(' + (-offset) + 'px)';
    }
    function dragEnd() {
      isDragging = false;
      strip.classList.remove('is-dragging');
    }

    strip.addEventListener('mousedown', e => dragStart(e.clientX));
    window.addEventListener('mousemove', e => dragMove(e.clientX));
    window.addEventListener('mouseup', dragEnd);

    strip.addEventListener('touchstart', e => dragStart(e.touches[0].clientX), { passive: true });
    strip.addEventListener('touchmove', e => dragMove(e.touches[0].clientX), { passive: true });
    strip.addEventListener('touchend', dragEnd);
  })();

  // Service category tabs
  document.querySelectorAll('.svc-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.tab;
      document.querySelectorAll('.svc-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.svc-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('svc-' + key).classList.add('active');
    });
  });

  // Portfolio category tabs
  document.querySelectorAll('.port-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.port;
      document.querySelectorAll('.port-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.port-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('port-' + key).classList.add('active');
    });
  });

  // Corrective section tabs (nested inside portfolio)
  document.querySelectorAll('.corr-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.corr;
      document.querySelectorAll('.corr-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.corr-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('corr-' + key).classList.add('active');
    });
  });

  // Course card expand/collapse
  document.querySelectorAll('.course-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.course');
      const willOpen = !card.classList.contains('open');
      card.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

