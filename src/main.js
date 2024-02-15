import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from './img/bi_x-octagon.png';
import * as pixabay from './js/pixabay-api';
import * as gallaryToRander from './js/render-functions'


const form = document.querySelector('.form');

form.addEventListener('submit', e => {
	e.preventDefault();
	pixabay.searchesOptions.q = form.elements.searchInput.value.trim();
	gallaryToRander.loader.style.display = 'block'
	gallaryToRander.gallary.innenHTML = '';
	pixabay.searchImages().then(images => renderGallery(images)).catch(error => console.log(error));
	form.reset();
})
