// ===========Librarys==============
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconOk from '../img/bi_check2-circle.png';
import iconError from '../img/bi_x-octagon.png';
// ===========Variables===============
const form = document.querySelector('.form');

// ==========Create Form===============
function formTemplate() {
	return `
  <label class="delay-label">
    Delay (ms)
    <input type="number" name="delay" required />
  </label>

  <fieldset>
    <legend>State</legend>
    <label>
      <input type="radio" name="state" value="fulfilled" required />
      Fulfilled
    </label>
    <label>
      <input type="radio" name="state" value="rejected" required />
      Rejected
    </label>
  </fieldset>

  <button type="submit">Create notification</button>`
}

form.innerHTML = formTemplate();

// =========Form Setting and Create Promise============
const input = document.querySelector('label > input');

let delay;

input.addEventListener('input', e => {
	delay = e.currentTarget.value;
})

form.addEventListener('submit', e => {
	e.preventDefault();
	const promiseState = form.elements.state.value;
	function createPromise(delay, state) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (state === 'fulfilled') {
					resolve(delay);
				} else {
					reject(delay);
				}
			}, delay);
		});
	}

	

	createPromise(delay, promiseState)
		.then(value => {
			iziToast.show({
				iconUrl: iconOk,
				title: 'OK',
				titleColor: '#fff',
				message: `Fulfilled promise in ${value} ms`,
				messageColor: '#FFFFFF',
				backgroundColor: '#59A10D',
				position: 'topRight',
			});
		})
		.catch(error => {
			iziToast.show({
				iconUrl: iconError,
				imageWidth: 50,
				title: 'Error',
				titleColor: '#fff',
				message: `Rejected promise in ${error} ms`,
				messageColor: '#FFFFFF',
				backgroundColor: '#EF4040',
				position: 'topRight',
			});
		});
	form.reset();
});