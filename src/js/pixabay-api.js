const API_KEY = '42379891-9b2b3e5f2dd038df1d72b79a3';
const searchesOptions = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

function searchImages() {
	const url = `https://pixabay.com/api/?${new URLSearchParams(searchesOptions)}`;
	return fetch(url).then(res => {
		if (!res.ok) {
			throw new Error(res.status)
		};
		return res.json();
	});
};

export {
	API_KEY,
	searchesOptions,
	searchImages,
}