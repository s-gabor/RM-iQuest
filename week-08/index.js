const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const displayedError = document.querySelector('span');
const displayedResult = document.querySelectorAll('span')[1];
const userInputBoxes = [first, second, third, fourth];


const is_integer = (strValue) => {
	return (strValue.trim() && Number.isInteger(strValue*1));
}


const checkUserInputBoxes = () => {
	let message = '';
	userInputBoxes.forEach(box => {
		if ( !is_integer(box.value) ) {
			box.setAttribute('style', 'border: 2px solid red');
			box.value
				? message += `<br>invalid value... <strong>${box.value}</strong> is not an integer!`
				: message += `<br>${box.id} field is empty...`
		}
	})
	message
		? displayedError.innerHTML = message
		: displayedError.innerHTML = '<strong>none</strong>'
}
checkUserInputBoxes();


document.addEventListener('keyup', (event) => {
	displayedError.innerHTML = 'none';
	displayedResult.innerHTML = 'Press <strong>Calculate!</strong>';
	const userInputBox = event.target;
	userInputBox.removeAttribute('style');
	const userInputValue = event.target.value;
	const outputErrorMessage = checkUserInputBoxes();
	if (outputErrorMessage) {
		displayedError.innerHTML = outputErrorMessage;
	}
})


displayedResult.innerHTML = 'Press <strong>Calculate!</strong>';

function run() {
	const result = first.value*1 + second.value*1 + third.value * fourth.value;
	is_integer(result.toString()) && displayedError.innerText === 'none'
		? displayedResult.innerHTML = `<strong>${result}</strong>`
		: displayedResult.innerHTML = 'Can not calculate the expression. Please check the highlighted field(s)!'
}