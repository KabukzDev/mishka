fetch('/assets/content.json')
  .then(response => response.json())
  .then(images => {
    const gallery = document.getElementById('image-gallery');

    images.forEach(image => {
        const container = document.createElement('div');
        container.className = 'image-container';
        container.onclick = () => openImage(image.src);

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        const caption = document.createElement('p');
        caption.textContent = image.alt;

        container.appendChild(img);
        container.appendChild(caption);
        gallery.appendChild(container);
    });
});

function openImage(imageSrc) {
    document.getElementById('fullImage').src = imageSrc;
    document.getElementById('overlay').style.display = 'flex';
}

function closeImage() {
    document.getElementById('overlay').style.display = 'none';
}

function copyImageLink() {
    const imageUrl = document.getElementById('fullImage').src;
    navigator.clipboard.writeText(imageUrl).then(() => {
        alert('Image link copied to clipboard!');
    }).catch((err) => {
        console.error('Unable to copy image link', err);
    });
}