//lazy loading images
//pass in "require() path to imgs"
export const lazyLoad = () => {
  const imgTargets = document.querySelectorAll('img[data-src]');

  const loadImg = function (entries, observer) {
    // const [entry] = entries;
    // if (!entry.isIntersecting) return;

    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
        if (entry.target.id === 'hero-img') {
          entry.target.style.filter = 'grayscale(100%)';
        }
      });

      observer.unobserve(entry.target);
    });
  };

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '0px',
  });

  imgTargets.forEach(function (img) {
    imgObserver.observe(img);
  });
};
