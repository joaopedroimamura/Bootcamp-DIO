var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if (currentNumber > 10) {
        currentNumberWrapper.style.color = 'transparent';
    }

    else if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'green';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }

    else if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'green';
    }
}