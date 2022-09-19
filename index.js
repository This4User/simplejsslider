const root = document.getElementById("images-container");
const fasterButton = document.getElementById("faster");
const slowerButton = document.getElementById("slower");
let images = document.querySelectorAll(".img");

let speed = 5;
const speedDelta = 5;
let delta = 0;

let slideNumber = 0;

let isSlowerButtonDisabled = true;

fasterButton.addEventListener("click", () => {
	isSlowerButtonDisabled = false;
	speed += speedDelta;
});

slowerButton.addEventListener("click", () => {
	if (speed === speedDelta * 2) {
		isSlowerButtonDisabled = true;
	}
	if (speed > speedDelta) speed -= speedDelta;
});

const addNewSlide = () => {
	const div = document.createElement("div");
	div.className = "img";
	div.style.background = `url(./images/${slideNumber}.jpg)`;

	slideNumber < 10 ? slideNumber++ : slideNumber = 0;
	root.appendChild(div);
};


const animate = () => {
	slowerButton.disabled = isSlowerButtonDisabled;
	images = document.querySelectorAll(".img");
	delta += speed;
	images[0].style.left = `${-delta}px`;
	images[1].style.left = `${-delta}px`;

	if (delta > 900) {
		addNewSlide();
		setTimeout(() => {
			images[0].remove();
		});
		delta = 0;
	}
	requestAnimationFrame(animate);
};

addNewSlide();
addNewSlide();
requestAnimationFrame(animate);

