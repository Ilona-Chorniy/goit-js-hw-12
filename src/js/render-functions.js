import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElem = document.querySelector('.gallery');
const loaderElem = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img =>
        `<li class="gallery-item">
        <a href="${img.largeImageURL}" class="gallery-link">
          <img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}"/>
        </a>
        <div class="gallery-stats">
          <p>Likes <span>${img.likes}</span></p>
          <p>Views <span>${img.views}</span></p>
          <p>Comments <span>${img.comments}</span></p>
          <p>Downloads <span>${img.downloads}</span></p>
        </div>
      </li>`
    )
    .join('');

  galleryElem.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryElem.innerHTML = '';
}

export function showLoader() {
  loaderElem.classList.add('is-active');
}

export function hideLoader() {
  loaderElem.classList.remove('is-active');
}
