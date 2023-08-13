console.log("from script file");const secretNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('check');
const message = document.querySelector('.message');

checkButton.addEventListener('click', function() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100';
        message.style.color = 'red';
    } else if (userGuess === secretNumber) {
        message.textContent = `Congratulations! You guessed the correct number: ${secretNumber}`;
        message.style.color = 'green';
        guessInput.disabled = true;
        checkButton.disabled = true;
    } else {
        const hint = userGuess < secretNumber ? 'higher' : 'lower';
        message.textContent = `Try again! Guess a ${hint} number`;
        message.style.color = 'blue';
    }
});
