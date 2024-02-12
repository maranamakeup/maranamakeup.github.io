document.addEventListener('DOMContentLoaded', function() {
  var scrollReveal = document.querySelector('.scroll-reveal');

  function revealIfInView() {
    var scrollThreshold = window.innerHeight / 2;
    var scrollPosition = window.scrollY + scrollThreshold;

    if (scrollReveal.offsetTop < scrollPosition) {
      scrollReveal.classList.add('reveal');
      window.removeEventListener('scroll', revealIfInView);
    }
  }

  // Check if the image is in view on page load
  revealIfInView();

  // Check if the image is in view on scroll
  window.addEventListener('scroll', revealIfInView);
});
