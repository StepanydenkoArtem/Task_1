const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	alert('Ваше повідомлення було успішно відправлено!');
	form.reset();
});
