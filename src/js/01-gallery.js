import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEL = document.querySelector('.gallery');

galleryItems.forEach(item => {
  galleryEL.insertAdjacentHTML(
    'beforeend',
    `
      <li class="gallery__item">
       <a class="gallery__link" href="${item.original}">
         <img 
         class="gallery__image" 
         src="${item.preview}" 
         alt="${item.description}"          
       </a>
      </li>`
  );
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
