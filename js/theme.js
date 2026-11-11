(function () {
  var button = document.querySelector('.theme-toggle');
  if (!button) return;
  function updateButton() {
    var light = document.documentElement.dataset.theme === 'light';
    button.setAttribute('aria-pressed', String(light));
    button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    button.querySelector('.theme-label').textContent = light ? 'Dark mode' : 'Light mode';
  }
  button.hidden = false;
  updateButton();
  button.addEventListener('click', function () {
    var theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('jj-theme', theme); } catch (error) {}
    updateButton();
  });
}());
