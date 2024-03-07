// document.addEventListener('DOMContentLoaded', function() {
//     var popup = document.getElementById('popup');
//     var lightModeBtn = document.getElementById('lightModeBtn');
//     var darkModeBtn = document.getElementById('darkModeBtn');
  
//     lightModeBtn.addEventListener('click', function() {
//       document.body.classList.remove('dark-mode');
//       document.body.classList.add('light-mode');
//       popup.classList.remove('show');
//     });
  
//     darkModeBtn.addEventListener('click', function() {
//       document.body.classList.remove('light-mode');
//       document.body.classList.add('dark-mode');
//       popup.classList.remove('show');
//     });
//     popup.classList.add('show');
//   });
// For future use!
$(document).ready(function(){
    $(window).scroll(function() {
      $('.skills2').each(function() {
        var elementTop = $(this).offset().top;
        var viewportTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (elementTop < viewportTop + windowHeight - 50) {
          $(this).addClass('fadeIn');
        }
      });
    });
  });

  $(document).ready(function(){
    $(window).scroll(function() {
      $('.education2').each(function() {
        var elementTop = $(this).offset().top;
        var viewportTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (elementTop < viewportTop + windowHeight - 50) {
          $(this).addClass('fadeIn');
        }
      });
    });
  });