## Toto úložiště bylo vytvořeno pro nácvik zpracování událostí JS. Připravené značky a připojené soubory skriptů pro každý úkol. Zkopírujte je do svého projektu.

# Úkol 1
Počítadlo se skládá z rozpětí a tlačítek, které by po kliknutí měly zvýšit a snížit svou hodnotu o jednu.

```html
<div id="counter">
   <button type="button" data-action="decrement">-1</button>
   <span id="value">0</span>
   <button type="button" data-action="increment">+1</button>
</div>
```
Vytvořte proměnnou counterValue, která bude ukládat aktuální hodnotu čítače a inicializuje ji na 0.
K tlačítkům přidejte posluchače kliknutí, uvnitř kterých zvyšujete nebo snižujete hodnotu čítače.
Aktualizujte rozhraní novou hodnotou proměnné counterValue.

# Úkol 2
Počítadlo se skládá z rozpětí a tlačítek, které by po kliknutí měly zvýšit a snížit svou hodnotu o jednu.
```html
<div id="counter">
   <button type="button" data-action="decrement">-1</button>
   <span id="value">0</span>
   <button type="button" data-action="increment">+1</button>
</div>
```
Vytvořte proměnnou counterValue, která bude ukládat aktuální hodnotu čítače a inicializuje ji na 0.
K tlačítkům přidejte posluchače kliknutí, uvnitř kterých zvyšujete nebo snižujete hodnotu čítače.
Aktualizujte rozhraní novou hodnotou proměnné counterValue.

# Úkol 3
Napište skript, který při psaní textu do input#name-input (vstupní událost) nahradí jeho aktuální hodnotu v span#name-output. Pokud je vstup prázdný, měl by se v rozsahu zobrazit řetězec „Anonymní“.
```html
<input type="text" id="name-input" placeholder="Zadejte prosím své jméno" />
<h1>Dobrý den, <span id="name-output">Anonymní</span>!</h1>
```
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
```
# Úkol 5
Napište skript, který bude reagovat na změny hodnoty input#font-size-control (událost vstupu) a změní vložený styl span#text aktualizací vlastnosti font-size. V důsledku toho přetažením posuvníku změníte velikost textu.
```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abrakadabra!</span>
```
# Úkol 6
Napište skript pro správu přihlašovacího formuláře.
```html
<form class="login-form">
   <štítek>
     E-mailem
     <input type="email" name="email" />
   </label>
   <štítek>
     Heslo
     <input type="password" name="password" />
   </label>
   <button type="submit">Přihlášení</button>
</form>
```
Zpracování formuláře odeslání formuláře.login-form by mělo být na události odeslání.
Při odeslání formuláře by se stránka neměla znovu načítat.
Pokud má formulář prázdná pole, zobrazí se upozornění, že musí být vyplněna všechna pole.
Pokud uživatel vyplnil všechna pole a odeslal formulář, shromážděte hodnoty polí do objektu, kde název pole bude názvem vlastnosti a hodnota pole bude hodnotou vlastnosti. Pro přístup k prvkům formuláře použijte vlastnost elements.
Zobrazte objekt se zadanými daty v konzole a vymažte hodnoty polí formuláře pomocí metody reset.
