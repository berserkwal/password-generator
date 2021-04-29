const validCharacters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{};:',./?";

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

console.log(generatePassword(32))