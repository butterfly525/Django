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

document.getElementById('nav-toggle').addEventListener('change', function() {
    var aside = document.getElementById('nav_panel');
    var element = document.querySelector('.nav-toggle');

    if (this.checked) {
        aside.style.left = '0px';
        element.textContent = '×';
    } else {
        aside.style.left = '-320px';
        element.textContent = '≡';
    }

});

