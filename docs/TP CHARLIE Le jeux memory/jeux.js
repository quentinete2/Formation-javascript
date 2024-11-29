const tab1 = [];
for (let i = 0; i < 12; i++) {
    tab1.push(i);
}
const tab2 = tab1.concat(tab1);

function melanger(tab) {
    let tab2 = [];
    for (let i = 0; i < tab.length; i++) {
      let x;
      do {
        x = Math.floor(Math.random() * tab.length);
      } while (tab2[x] != undefined);
      tab2[x] = tab[i];
    }
    return tab2;
  }
  
const tableauMelange = melanger(tab2);

console.log("Tableau original:", tab2);
console.log("Tableau mélangé:", tableauMelange);

let memory = null;
let memoryIndex = null;
let one = null;

for (let i = 0; i < tableauMelange.length; i++) {
    console.log(`Index ${i}: ${tableauMelange[i]}`);

    const img = document.createElement('img');
    const div = document.createElement('div');
    img.src = `/TP CHARLIE Le jeux memory/img/${tableauMelange[i]}.webp`;
    img.style.cursor = 'pointer';
    img.className = "img-button";

    img.onclick = (event) => {
      if (memory === null) {
          memory = event.target.src;
          memoryIndex = i;
          one = event.target;
          img.parentElement.className = "green";
      } 
      else {
        if (memory === event.target.src && one !== event.target) {
          img.parentElement.className = "green";
          one.parentElement.classList.remove('green');
          event.target.parentElement.classList.remove('green');
          one.remove();
          event.target.remove();
          memory = null;
          memoryIndex = null;
          one = null;
        } 
        else {
          img.parentElement.className = "green";
          one.parentElement.classList.remove('green');
          event.target.parentElement.classList.remove('green');
          memory = null;
          memoryIndex = null;
          one = null;

        }
      }
    };


  div.appendChild(img);
  document.querySelector('.container').appendChild(div);

}