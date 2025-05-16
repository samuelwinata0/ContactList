const closes = document.querySelectorAll('.close');

closes.forEach(function (e) {
  e.addEventListener('click', function (el) {
    const target = el.target.parentElement;
    target.style.display = "none"
    el.preventDefault();
  });
});
