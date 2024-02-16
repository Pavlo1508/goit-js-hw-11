import * as pixabay from './js/pixabay-api';
import * as gallaryToRander from './js/render-functions'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from './img/bi_x-octagon.png';
export const form = document.querySelector('.search-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const searchValue = form.elements.searchInput.value.trim();
  if (searchValue) {
    gallaryToRander.loader.style.display = 'block';
    gallaryToRander.gallery.innerHTML = '';
    pixabay.searchesOptions.q = searchValue;
    pixabay.searchImages()
      .then(images => gallaryToRander.renderGallery(images))
      .catch(error => console.log(error));
    form.reset();
	} else {
		gallaryToRander.gallery.innerHTML = '';
		 setTimeout(() => {
      iziToast.show({
        iconUrl: iconError,
        message: 'Please enter what you want to find!',
        messageColor: '#FAFAFB',
        backgroundColor: '#EF4040',
        position: 'topRight'
      });
    }, 200)
	}
});


