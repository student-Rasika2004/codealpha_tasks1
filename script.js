let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  images = Array.from(galleryItems);
  currentIndex = images.indexOf(imgElement);

  document.getElementById('lightbox-img').src = imgElement.src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
