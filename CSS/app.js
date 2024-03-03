document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var lightModeBtn = document.getElementById('lightModeBtn');
    var darkModeBtn = document.getElementById('darkModeBtn');
  
    lightModeBtn.addEventListener('click', function() {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      popup.classList.remove('show');
    });
  
    darkModeBtn.addEventListener('click', function() {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      popup.classList.remove('show');
    });
    popup.classList.add('show');
  });