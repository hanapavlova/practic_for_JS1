## Toto úložiště bylo vytvořeno pro nácvik zpracování událostí JS. Připravené značky a připojené soubory skriptů pro každý úkol. Zkopírujte je do svého projektu.

# Úkol 1
Počítadlo se skládá z rozpětí a tlačítek, které by po kliknutí měly zvýšit a snížit svou hodnotu o jednu.
```html
<div id="counter">
   <button type="button" data-action="decrement">-1</button>
   <span id="value">0</span>
   <button type="button" data-action="increment">+1</button>
</div>

Vytvořte proměnnou counterValue, která bude ukládat aktuální hodnotu čítače a inicializuje ji na 0.
K tlačítkům přidejte posluchače kliknutí, uvnitř kterých zvyšujete nebo snižujete hodnotu čítače.
Aktualizujte rozhraní novou hodnotou proměnné counterValue.
