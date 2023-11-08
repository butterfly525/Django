/*Обновление селектора с классом features без jquery*/
/*
var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Отменяем стандартное действие ссылки
    var url = this.getAttribute('href'); // Получаем URL ссылки

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var parser = new DOMParser();
        var doc = parser.parseFromString(this.responseText, "text/html");
        var newFeatures = doc.querySelector('.features');
        if (newFeatures) {
          document.querySelector('.features').innerHTML = newFeatures.innerHTML;
        }
        var aside_r = document.getElementById('nav_panel_r');
        var aside_l = document.getElementById('nav_panel_l');
        if (!document.getElementById('nav_toggle_r').checked || !document.getElementById('nav_toggle_l').checked) {
        aside_r.style.right = '-40%';
        aside_l.style.left = '-40%';
        document.getElementById('nav_toggle_r').checked = true;
        document.getElementById('nav_toggle_l').checked = true;
    }
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
});*/

/*Обновление селектора с классом features с jquery*/


$('.nav-link').click(function(e) {
  e.preventDefault(); // Отменяем стандартное действие ссылки
  /*$('#preloader').show();*/
  $('#preloader').css('opacity', '1');
  var url = $(this).attr('href'); // Получаем URL ссылки
  $.ajax({
    url: url,
    type: 'GET',
    success: function(data) {
      var newFeatures = $(data).find('.features');
      if (newFeatures.length > 0) {
        $('.features').html(newFeatures.html());
        if (!$('#nav_toggle_r').checked || !$('#nav_toggle_l').checked) {
            $('#nav_panel_r').css("right", "-40%");
            $('#nav_panel_l').css("left", "-40%");
            $('#nav_toggle_r').checked = true;
            $('#nav_toggle_l').checked = true;
        }
      }
      $('#preloader').css('opacity', '0');
      /*$('#preloader').hide();*/
    }
  });
});

