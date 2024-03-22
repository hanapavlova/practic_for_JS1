console.log("task 1");
//Vytvořte proměnnou counterValue, která bude ukládat aktuální hodnotu čítače a inicializuje ji na 0.
//K tlačítkům přidejte posluchače kliknutí, uvnitř kterých zvyšujete nebo snižujete hodnotu čítače.
//Aktualizujte rozhraní novou hodnotou proměnné counterValue.

//aktualizace tlačítka decrement
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
let clickCountDecrement = -2;

const decrement = () => {
buttonDecrement.textContent = clickCountDecrement
clickCountDecrement--
}
buttonDecrement.addEventListener('click', decrement);


//aktualize tlačítka increment
const buttonIncrement = document.querySelector('button[data-action="increment"]');
let clickCountIncrement = 2;

const increment = () => {
    buttonIncrement.textContent = clickCountIncrement
    clickCountIncrement++
    }
buttonIncrement.addEventListener('click', increment);


//aktualizace čítače

const counter = document.getElementById('value')

const counterValue = () => {
   counter.textContent = (clickCountDecrement + clickCountIncrement)
}

document.addEventListener("click", counterValue)