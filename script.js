const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  els.forEach(el=>io.observe(el));
  document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.querySelector('.slider-viewport');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (viewport && prevBtn && nextBtn) {
    // Вычисляем шаг прокрутки (ширина одного слайда + gap)
    const getScrollStep = () => {
      const firstMsg = viewport.querySelector('.msg');
      return firstMsg ? firstMsg.offsetWidth + 24 : 300;
    };

    nextBtn.addEventListener('click', () => {
      viewport.scrollLeft += getScrollStep();
    });

    prevBtn.addEventListener('click', () => {
      viewport.scrollLeft -= getScrollStep();
    });
  }
});