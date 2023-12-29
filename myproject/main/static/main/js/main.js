document.getElementById('nav-panel-l').addEventListener('click', function() {
    var aside = document.getElementById('nav-panel-l');
    if (!document.getElementById('nav-toggle-l').checked) {
        aside.style.left = '-340px';
        document.getElementById('nav-toggle-l').checked = true;
       // element.textContent = '×';
    } else {
        aside.style.left = '0px';
        document.getElementById('nav-toggle-l').checked = false;
       // element.textContent = '≡';
    }

});


document.querySelector('#container').addEventListener('click', function() {
    var aside_l = document.getElementById('nav-panel-l');
    if (!document.getElementById('nav-toggle-l').checked) {
        aside_l.style.left = '-340px';
        document.getElementById('nav-toggle-l').checked = true;
    } 
});

$('.nav-link').click(function(e) {
    e.preventDefault(); // Отменяем стандартное действие ссылки
    /*$('#preloader').show();*/
    $('#preloader').css('opacity', '1');
    var url = $(this).attr('href'); // Получаем URL ссылки
    alert(url);
    $.ajax({
      url: url,
      type: 'GET',
      success: function(data) {
        var newFeatures = $(data).find('.features');
        if (newFeatures.length > 0) {
          $('.features').html(newFeatures.html());
          if (!$('#nav-toggle-l').checked) {
              $('#nav-panel-l').css("left", "-340px");
              $('#nav-toggle-l').checked = true;
          }
        }
        $('#preloader').css('opacity', '0');
        /*$('#preloader').hide();*/
      }
    });
  });
  
  