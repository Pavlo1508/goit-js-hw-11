export const lightBox = new SimpleLightbox('.gallery-link');
export const loader = document.querySelector('.loader');
export const gallery = document.querySelector('.gallery');

export function renderGallery(images) {
	if (images.hits.length === 0) {
		iziToast.show({
			iconUrs: iconError,
			message: 'Sorry, there are no images matching your search query. Please try again!',
			messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
      position: 'topRight'
		})
	} else {
		const itemTemplate = images.hits.map(image =>
			`<li class="gallery-item">
				<a class="gallery-link" href="${image.largeImageURL}" >
					<img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" width = "360"/>
				</a>
				<div class="image-description">
					<div class="decsription-item">
						<h3>Likes</h3>
						<p> ${image.likes}</p>
					</div>
					<div class="decsription-item">
						<h3>Views</h3>
						<p> ${image.views}</p>
					</div>
					<div class="decsription-item">
						<h3>Comments</h3>
						<p> ${image.comments}</p>
					</div>
					<div class="decsription-item">
						<h3>Downloads</h3>
						<p> ${image.downloads}</p>
					</div>
				</div>
			</li>`
		).join('/n/n');

		gallery.innerHTML = itemTemplate;
		lightBox.refresh();
	}

	loader.style.display = 'none';
};