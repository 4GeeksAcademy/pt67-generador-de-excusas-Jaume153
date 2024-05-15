/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const who = [
    `Un unicornio`,
    `El Yeti`,
    `Un extraterrestre`,
    `Mi doble del futuro`
  ];
  const action = [`robó`, `secuestró`, `teletransportó`, `escondió`];
  const what = [
    `la luna llena`,
    `el plato principal`,
    `la fórmula secreta`,
    `el último helado del universo`
  ];
  const when = [
    `durante un eclipse lunar`,
    `mientras viajaba en el tiempo`,
    `cuando nadie miraba`,
    `en una dimensión paralela`
  ];

  function excusaRandom() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  }

  document.querySelector("#excusa").innerHTML = excusaRandom();
  console.log(excusaRandom());
};
