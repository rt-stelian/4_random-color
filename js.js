const board = document.querySelector('#board');

const colors = ['#ff00a5', '#ff0026', '#ff5a00', '#ffd900', '#a5ff00', '#25ff00', '#0085ff', '#0005ff', '#7a00ff', '#fa00ff', '#ff0085', '#ff0005', '#d6ff00', '#56ff00', '#00ff29', '#00ffa8', '#00d6ff', '#0056ff'];

const SQUARES = 400;

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement('div');
	square.className = 'square';
	board.append(square);

	square.addEventListener('mouseover', () => setBgColor(square));
	square.addEventListener('mouseleave', () => removeBgColor(square));
}

function randomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function setBgColor(el) {
	el.style.backgroundColor = `${randomColor()}`;
	el.style.boxShadow = `0 0 10px ${randomColor()}`;
}

function removeBgColor(el) {
	el.style.backgroundColor = `rgb(5, 43, 15)`;
	el.style.boxShadow = `0 0 10px #000`;
}
