const passwordText = document.querySelector(".text-box span");
const slider = document.querySelector("#password-range");
const randomize = document.querySelector(".randomize-button");
const copy = document.querySelector(".copy-button");
const rangeHover = document.querySelector(".value-hover");
const copyTooltip = document.querySelector(".copy-tooltip");
const randomizeTooltip = document.querySelector(".randomize-tooltip");
const root = document.querySelector(":root");
let passwordLength = slider.value;

const validCharacters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{};:',./?";

root.style.setProperty("--vh", window.innerHeight / 100 + "px");

window.addEventListener("resize", () => {
	root.style.setProperty("--vh", window.innerHeight / 100 + "px");
});

function generatePassword(length) {
	let result = "";
	let validCharactersLength = validCharacters.length;
	for (let i = 0; i <= length; i++) {
		result += validCharacters.charAt(
			Math.floor(Math.random() * validCharactersLength)
		);
	}
	return result;
}

passwordText.innerText = generatePassword(passwordLength);

randomize.addEventListener("click", () => {
	passwordText.innerText = generatePassword(passwordLength);
	randomizeTooltip.classList.add("visible");

	setTimeout(() => randomizeTooltip.classList.remove("visible"), 1000);
});

copy.addEventListener("click", () => {
	navigator.clipboard.writeText((text = passwordText.innerText));
	copyTooltip.classList.add("visible");

	setTimeout(() => copyTooltip.classList.remove("visible"), 1000);
});

slider.addEventListener("input", () => {
	passwordLength = slider.value;
	rangeHover.innerText = passwordLength;
	passwordText.innerText = generatePassword(passwordLength);
	// rangeHover.style.left = `${slider.value - slider.min}`;
	var left = (100 / 58.5) * (slider.value - slider.min);
	rangeHover.style.left = `${left}%`;
	// rangeHover.style.transform = `translateX(${-5}px)`;
});
