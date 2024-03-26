console.log('task-04');
/*
# Úkol 4
Napište skript, který při ztrátě fokusu na vstupu (událost rozmazání) zkontroluje jeho obsah na správný počet zadaných znaků.
```html
<vstup
   type="text"
   id="validation-input"
   data-length="6"
   placeholder="Zadejte prosím 6 symbolů"
/>
```
Kolik znaků by mělo být ve vstupu, je uvedeno v atributu data-length.
Pokud je zadán správný počet znaků, vstupní hranice se změní na zelenou, pokud je nesprávná, zčervená.
Pro přidání stylů použijte CSS třídy valid a invalid, které jsme již přidali do zdrojových souborů úlohy.
```html
#validation-input {
   ohraničení: 3px solid #bdbdbd;
}

#validation-input.valid {
   border-color: #4caf50;
}

#validation-input.invalid {
   barva ohraničení: #f44336;
}
```*/

let data = document.querySelector("#validation-input")

const checkInput = () => {
    
if (data.value.length===6) {
    data.classList.remove("invalid");
    data.classList.add("valid")
} else {
    data.classList.remove("valid");
    data.classList.add("invalid")
}}

data.addEventListener("blur", checkInput);
