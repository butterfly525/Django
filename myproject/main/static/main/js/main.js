document.querySelector('.ava').addEventListener('click', function() {
    const newDiv = document.createElement('div');
    const parentElement = document.getElementById('nav_panel');
    parentElement.appendChild(newDiv);
    newDiv.setAttribute('class', 'image-fullscreen cursor-zoom-out');
    var imageUrl = this.src;
    var fullscreenImage = document.querySelector('.image-fullscreen');
    fullscreenImage.style.backgroundImage = 'url(' + imageUrl + ')';
    fullscreenImage.style.display = 'block';
    var fullscreenImage = document.querySelector('.image-fullscreen');
    fullscreenImage.addEventListener('click', function() {
        var parent = document.getElementById('nav_panel');
        var child = document.querySelector('.image-fullscreen');
        parent.removeChild(child);
    });
});

document.getElementById('nav_panel_l').addEventListener('click', function() {
    var aside = document.getElementById('nav_panel_l');
   // var element = document.querySelector('.nav-toggle');

    if (!document.getElementById('nav_toggle_l').checked) {
        aside.style.left = '-40%';
        document.getElementById('nav_toggle_l').checked = true;
       // element.textContent = '×';
    } else {
        aside.style.left = '0px';
        document.getElementById('nav_toggle_l').checked = false;
       // element.textContent = '≡';
    }

});

document.getElementById('nav_panel_r').addEventListener('click', function() {
    var aside = document.getElementById('nav_panel_r');
   // var element = document.querySelector('.nav-toggle');

    if (!document.getElementById('nav_toggle_r').checked) {
        aside.style.right = '-40%';
        document.getElementById('nav_toggle_r').checked = true;
       // element.textContent = '×';
    } else {
        aside.style.right = '0px';
        document.getElementById('nav_toggle_r').checked = false;
       // element.textContent = '≡';
    }

});

document.querySelector('#container').addEventListener('click', function() {

    var aside_r = document.getElementById('nav_panel_r');
    var aside_l = document.getElementById('nav_panel_l');

    if (!document.getElementById('nav_toggle_r').checked || !document.getElementById('nav_toggle_l').checked) {
        aside_r.style.right = '-40%';
        aside_l.style.left = '-40%';
        document.getElementById('nav_toggle_r').checked = true;
        document.getElementById('nav_toggle_l').checked = true;
    } /*else {
        aside_r.style.right = '0%';
        aside_l.style.left = '0%';
        document.getElementById('nav_toggle_r').checked = false;
        document.getElementById('nav_toggle_l').checked = false;
    }*/
});

/*
document.querySelector('#nav_links').addEventListener('click', function(e) {
    e.preventDefault(); // Отменяем стандартное действие ссылки
    var url = this.getAttribute('href'); // Получаем URL ссылки
  alert(url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.querySelector('.features').innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
});*/
