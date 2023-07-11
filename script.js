const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "controle playstation",
    price: "R$ 99,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "mario",
    price: "R$ 275,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "pacman",
    price: "R$ 160,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$ 120,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "godzilla",
    price: "R$ 700,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "groot",
    price: "R$ 950,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$ 1030,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$ 870,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$ 510,00",
    type: "Action Figures",
  },
];

const actionFiguresArray = []

const paintingsArray = []

function separateItems(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    const products = productsArray[i]
    if (products.type === "Action Figures") {
      actionFiguresArray.push(products)
    } else if (products.type === "Paintings") {
      paintingsArray.push(products)
    }

  }
  return actionFiguresArray, paintingsArray

}
separateItems(productsArray)




function cardsPaintingsArray(paintingsArray) {
  const ulP = document.querySelector(".cardPaintings");
  for (let i = 0; i < paintingsArray.length; i++) {
    const cardP = paintingsArray[i]
    const liP = document.createElement("li");
    const divP = document.createElement("div")

    const imgP = document.createElement('img');
    const nomeP = document.createElement('p');
    const precoP = document.createElement('small');
    imgP.src = cardP.image
    imgP.alt = cardP.name
    nomeP.innerText = cardP.name
    precoP.innerText = cardP.price

    divP.append(nomeP, precoP)
    liP.append(imgP, divP)
    ulP.appendChild(liP)
  }

}
cardsPaintingsArray(paintingsArray)




function cardsActionFiguresArray(actionFiguresArray) {
  const ulA = document.querySelector(".cardActionFigure");
  for (let i = 0; i < actionFiguresArray.length; i++) {
    const cardA = actionFiguresArray[i]
    const liA = document.createElement("li");
    const divA = document.createElement("div")

    const imgA = document.createElement('img');
    const nomeA = document.createElement('p');
    const precoA = document.createElement('small');
    imgA.src = cardA.image
    imgA.alt = cardA.name
    nomeA.innerText = cardA.name
    precoA.innerText = cardA.price

    divA.append(nomeA, precoA)
    liA.append(imgA, divA)
    ulA.appendChild(liA)
  }

}
cardsActionFiguresArray(actionFiguresArray)