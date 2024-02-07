document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header-container');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  });