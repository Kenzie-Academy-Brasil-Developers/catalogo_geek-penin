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
  const  productUlPaintingsArray = document.querySelector(".cardPaintings");
  for (let i = 0; i < paintingsArray.length; i++) {
    const productCardPaintingsArray = paintingsArray[i]
    const productLiPaintingsArray = document.createElement("li");
    const productDivPaintingsArray = document.createElement("div")

    const productImgPaintingsArray = document.createElement('img');
    const productNomePaintingsArray = document.createElement('p');
    const productPrecoPaintingsArray = document.createElement('small');
    productImgPaintingsArray.src = productCardPaintingsArray.image
    productImgPaintingsArray.alt = productCardPaintingsArray.name
    productNomePaintingsArray.innerText =  productCardPaintingsArray.name
    productPrecoPaintingsArray.innerText =  productCardPaintingsArray.price

    productDivPaintingsArray.append( productNomePaintingsArray, productPrecoPaintingsArray)
    productLiPaintingsArray.append( productImgPaintingsArray, productDivPaintingsArray)
    productUlPaintingsArray.appendChild( productLiPaintingsArray)
  }

}
cardsPaintingsArray(paintingsArray)




function cardsActionFiguresArray(actionFiguresArray) {
  const productUlActionFiguresArray = document.querySelector(".cardActionFigure");
  for (let i = 0; i < actionFiguresArray.length; i++) {
    const productCardActionFiguresArray = actionFiguresArray[i]
    const productLiActionFiguresArray = document.createElement("li");
    const productDivActionFiguresArray = document.createElement("div")

    const productImgActionFiguresArray = document.createElement('img');
    const productNomeActionFiguresArray = document.createElement('p');
    const productPrecoActionFiguresArray = document.createElement('small');
    productImgActionFiguresArray.src = productCardActionFiguresArray.image
    productImgActionFiguresArray.alt = productCardActionFiguresArray.name
    productNomeActionFiguresArray.innerText = productCardActionFiguresArray.name
    productPrecoActionFiguresArray.innerText = productCardActionFiguresArray.price

    productDivActionFiguresArray.append(productNomeActionFiguresArray, productPrecoActionFiguresArray)
    productLiActionFiguresArray.append(productImgActionFiguresArray, productDivActionFiguresArray)
    productUlActionFiguresArray.appendChild(productLiActionFiguresArray)
  }

}
cardsActionFiguresArray(actionFiguresArray)