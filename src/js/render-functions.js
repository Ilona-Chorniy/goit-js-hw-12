import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElem = document.querySelector('.gallery');
const loaderElem = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  showCounter: false,
  animationSlide: true,
});

export function createGallery(images) {
  const markup = images
    .map(
      img =>
        `<li class="gallery-item">
          <a href="${img.largeImageURL}" class="gallery-link">
            <img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}" />
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

  galleryElem.insertAdjacentHTML('beforeend', markup);
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

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
