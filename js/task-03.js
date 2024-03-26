console.log('task 03');
// Napište skript, který při psaní textu do input#name-input (vstupní událost) nahradí jeho aktuální hodnotu v span#name-output. Pokud je vstup prázdný, měl by se v rozsahu zobrazit řetězec „Anonymní“.

const nameInput = document.querySelector("#name-input");
nameInput.addEventListener ("input", (event) => {
    const text = event.target.value.trim();
    let output = document.querySelector("#name-output")
  if (text==="") {
    output.textContent = "Anonyme"
  } else {
    output.textContent = text
}})