document.querySelector('.ava').addEventListener('click', function() {
    const newDiv = document.createElement('div');
    const parentElement = document.getElementById('nav');
    parentElement.appendChild(newDiv);
    newDiv.setAttribute('class', 'image-fullscreen');
    var imageUrl = this.src;
    var fullscreenImage = document.querySelector('.image-fullscreen');
    fullscreenImage.style.backgroundImage = 'url(' + imageUrl + ')';
    fullscreenImage.style.display = 'block';
    var fullscreenImage = document.querySelector('.image-fullscreen');
fullscreenImage.addEventListener('click', function() {
    this.style.display = 'none';
});
});

