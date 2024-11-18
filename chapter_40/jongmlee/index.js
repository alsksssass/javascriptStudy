const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const addItem = (text) => {
	const li = document.createElement('li');
	const button = document.createElement('button');
	const span = document.createElement('span');
	const checkbox = document.createElement('input');

	checkbox.type = 'checkbox';
	checkbox.addEventListener('change', toggleLine);

	button.innerText = '삭제';
	span.innerText = text;
	button.addEventListener('click', delItem);

	li.appendChild(checkbox);
	li.appendChild(span);
	li.appendChild(button);
	ul.appendChild(li);
}

const toggleLine = (event) => {
	const span = event.target.nextSibling;
	if (event.target.checked) {
		span.style.textDecoration = 'line-through';
		span.style.color = 'gray';
	} else {
		span.style.textDecoration = 'none';
		span.style.color = 'black';
	}
}

const delItem = (event) => {
	const target = event.target.parentElement;
	target.remove();
}

const handler = (event) => {
	event.preventDefault();
	if (input.value !== '') {
		addItem(input.value);
		input.value = '';
	}
} 

form.addEventListener('submit', handler);