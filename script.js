document.addEventListener('DOMContentLoaded', function () {
  const celularListOferta = [
    {
      titulo: "iPhone 15 PRO MAX 256GB",
      cores: "Preto, Branco, Natural, Azul",
      coresImg: ["./assets/imgs/icons8-emoji-de-círculo-preto-48.png", "./assets/imgs/emoji branco.png", "./assets/imgs/natural.png", "./assets/imgs/cor azul.png"],
      preco: "R$ 7.890",
      promocao: "R$ 7.200",
      pais: "./assets/icons/icons8-brasil-48.png",
      img: "https://m.media-amazon.com/images/I/81fO2C9cYjL._AC_SL1500_.jpg"
    },
    {
      titulo: "iPhone 15 PRO MAX 512GB",
      cores: "Preto, Branco, Azul, Natural",
      coresImg: ["./assets/imgs/icons8-emoji-de-círculo-preto-48.png", "./assets/imgs/emoji branco.png", "./assets/imgs/natural.png", "./assets/imgs/cor azul.png"],
      preco: "R$ 9.299",
      promocao: "R$ 7.950",
      pais: "./assets/icons/icons8-brasil-48.png",
      img: "https://m.media-amazon.com/images/I/81FFCoft1PL._AC_SX679_.jpg"
    },
    {
      titulo: "iPhone 15 PRO MAX 1TB",
      cores: "Preto, Azul",
      coresImg: ["assets/imgs/icons8-emoji-de-círculo-preto-48.png", "./assets/imgs/cor azul.png"],
      preco: "R$ 10.619",
      promocao: "R$ 9.050",
      pais: "./assets/icons/icons8-brasil-48.png",
      img: "https://m.media-amazon.com/images/I/81IPGZtygYL._AC_SX679_.jpg",
    },
  ];

  const productGrid = document.getElementById('product-grid');
  
  celularListOferta.forEach(celular => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    
    const productImage = document.createElement('img');
    productImage.src = celular.img;
    productImage.alt = celular.titulo;
    productImage.classList.add("imgCelular");
    
    const productTitle = document.createElement('h3');
    productTitle.textContent = celular.titulo;
    
    const pricePhrase = document.createElement('div');
    pricePhrase.classList.add('price-phrase');
    pricePhrase.innerHTML = `De <span class="original-price">${celular.preco}</span> por <span class="promocao-price">${celular.promocao}</span>`;
    
    const productButton = document.createElement('button');
    productButton.textContent = 'Adicionar ao carrinho';
    
    productButton.addEventListener('click', function () {
      alert(`${celular.titulo} adicionado ao carrinho!`);
    });
    
    productItem.appendChild(productImage);
    productItem.appendChild(productTitle);
    productItem.appendChild(pricePhrase);
    productItem.appendChild(productButton);
    
    productGrid.appendChild(productItem);
  });
  

});

// Função para abrir o modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.showModal();
  
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal(modalId);
    }
  });
}

// Função para fechar o modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.close();
}


  document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.button__hamburguer');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('open');
    });
  });

