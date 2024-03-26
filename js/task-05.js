console.log('task 05');
/*# Úkol 5
Napište skript, který bude reagovat na změny hodnoty input#font-size-control (událost vstupu) a změní vložený styl span#text aktualizací vlastnosti font-size. V důsledku toho přetažením posuvníku změníte velikost textu.
```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abrakadabra!</span>
```*/

let inputEvent = document.querySelector("#font-size-control")

const fontSizeUpdate = () => {
    const text = document.querySelector("#text")
    text.style.fontSize = inputEvent.value + "px"
}

inputEvent.addEventListener("input", fontSizeUpdate)
