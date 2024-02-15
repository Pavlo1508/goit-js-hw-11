import * as pixabay from './js/pixabay-api';
import * as gallaryToRander from './js/render-functions'
export const form = document.querySelector('.search-form');

form.addEventListener('submit', e => {
	e.preventDefault();
	pixabay.searchesOptions.q = form.elements.searchInput.value.trim();
	gallaryToRander.loader.style.display = 'block'
	gallaryToRander.gallery.innenHTML = '';
	pixabay.searchImages().then(images => gallaryToRander.renderGallery(images)).catch(error => console.log(error));
	form.reset();
});


