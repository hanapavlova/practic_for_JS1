console.log('task 9');
// funkce pro náhodné vytváření barev
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
// napište svůj kód níže