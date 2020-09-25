const display = document.querySelector('.display');

const digitButtons = document.querySelectorAll('.digits button');
digitButtons.forEach( button => button.addEventListener('click', digitClicked) );

function digitClicked(ev) {
    display.value += ev.target.innerText;
}

const operButtons = document.querySelectorAll('.opers button');
operButtons.forEach( button => button.addEventListener('click', operClicked) );

function operClicked(ev) {
    display.value += ev.target.innerText;
}

const deleteButton = document.querySelector('.delete').addEventListener('click', deleteClicked);

function deleteClicked() {
   display.value ='';
}


const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    display.value = eval(display.value);
});


