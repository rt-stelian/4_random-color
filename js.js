const board = document.querySelector('#board');
const SQUARES = 1200


for (let i = 0; i < SQUARES; i++) {

	const square = document.createElement('div');
	const circle = document.createElement('div');
	square.className = 'squares';
	circle.className = 'circle';
	board.append(square);
	square.append(circle);

	square.addEventListener('mouseover', () => setBgColor(circle)
	);
	square.addEventListener('mouseleave', () => removeBgColor(circle));
}




function randomColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	const color = `rgb(${r}, ${g}, ${b})`
	return color
}

function setBgColor(el) {
	el.style.backgroundColor = `${randomColor()}`;
	el.style.boxShadow = `0 0 10px ${randomColor()}`;
}

function removeBgColor(el) {
	el.style.backgroundColor = `rgb(5, 43, 15)`;
	el.style.boxShadow = `0 0 10px #000`;
}
