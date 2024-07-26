const celularList = [
  {
    titulo: "12 PRO MAX 128GB",
    cores: "Preto Branco",
    coresImg: ["src/assets/imgs/icons8-emoji-de-círculo-preto-48.png", "src/assets/imgs/emoji branco.png"],
    preco: "R$ 3.950",
    pais: "./src/assets/imgs/eua.png",
    img: "./src/assets/imgs/12 pro max.jpeg",
  },
  {
    titulo: "13 128GB",
    cores: "Rosa Branco Azul",
    coresImg: ["src/assets/imgs/rosa.png", "src/assets/imgs/emoji branco.png", "src/assets/imgs/cor azul.png"],
    preco: "R$ 3.650",
    pais: "src/assets/icons/icons8-índia-emoji-48.png",
    img: "./src/assets/imgs/13.jpeg",
  },
  {
    titulo: "13 256GB",
    cores: "Rosa",
    coresImg: ["src/assets/imgs/rosa.png"],
    preco: "R$ 4.300",
    pais: "src/assets/icons/icons8-brasil-48.png",
    img: "./src/assets/imgs/13 rosa.jpeg",
  },
  {
    titulo: "15 128GB",
    cores: "Rosa Preto",
    coresImg: ["src/assets/imgs/icons8-emoji-de-círculo-preto-48.png", "src/assets/imgs/rosa.png"],
    preco: "R$ 4.550",
    pais: "src/assets/icons/icons8-emoji-chinês-48.png",
    img: "./src/assets/imgs/iphone 15 black.jpeg",
  },
  {
    titulo: "15 PRO 128GB",
    cores: "Natural Branco Azul",
    coresImg: ["src/assets/imgs/cor azul.png", "src/assets/imgs/emoji branco.png", "src/assets/imgs/natural.png"],
    preco: "R$ 5.750",
    pais: "./src/assets/imgs/eua.png",
    img: "./src/assets/imgs/Iphone 15 PRO 128.jpeg",
  },
  {
    titulo: "15 PRO 512GB",
    cores: ["Preto", "Branco"],
    coresImg: ["src/assets/imgs/icons8-emoji-de-círculo-preto-48.png", "src/assets/imgs/emoji branco.png"],
    preco: "R$ 7.850",
    pais: "./src/assets/imgs/eua.png",
    img: "./src/assets/imgs/Iphone 15 PRO 512.jpeg",
  },
  {
    titulo: "15 PRO MAX 256GB",
    cores: "Preto Branco Natural Azul",
    coresImg: ["src/assets/imgs/icons8-emoji-de-círculo-preto-48.png", "src/assets/imgs/emoji branco.png", "src/assets/imgs/natural.png", "src/assets/imgs/cor azul.png"],
    preco: "R$ 6.500",
    pais: "./src/assets/imgs/eua.png",
    img: "./src/assets/imgs/12 pro max.jpeg",
  },
  {
    titulo: "15 PRO MAX 256GB",
    cores: "Preto Branco Natural Azul",
    coresImg: ["src/assets/imgs/icons8-emoji-de-círculo-preto-48.png", "src/assets/imgs/emoji branco.png", "src/assets/imgs/natural.png", "src/assets/imgs/cor azul.png"],
    preco: "R$ 7.200",
    pais: "src/assets/icons/icons8-brasil-48.png",
    img: "./src/assets/imgs/12 pro max.jpeg",
  },
  {
    titulo: "15 PRO MAX 512GB",
    cores: "Preto Branco Azul Natural",
    coresImg: ["src/assets/imgs/icons8-emoji-de-círculo-preto-48.png", "src/assets/imgs/emoji branco.png", "src/assets/imgs/natural.png", "src/assets/imgs/cor azul.png"],
    preco: "R$ 7.950",
    pais: "src/assets/icons/icons8-brasil-48.png",
    img: "./src/assets/imgs/Iphone 15 pro max 512.jpeg",
  },
  {
    titulo: "15 PRO MAX 1TB",
    cores: "Preto Azul",
    coresImg: ["src/assets/imgs/icons8-emoji-de-círculo-preto-48.png", "src/assets/imgs/cor azul.png"],
    preco: "R$ 9.050",
    pais: "src/assets/icons/icons8-brasil-48.png",
    img: "./src/assets/imgs/Iphone 15 pro max 1tb.jpeg",
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const containerCelulares = document.querySelector(".container__celulares");
  const rangeInput = document.getElementById("rangePreco");
  const modalContainer = document.querySelector("dialog");
  const buttonCadastrarHeader = document.querySelector(".abrirCarrinho");
  const buttonRemoverModal = document.querySelector("#remover__modal");
  const carrinhoItens = document.querySelector(".carrinho__itens");
  const totalPrecoElement = document.getElementById("totalPreco");
  const messageBox = document.createElement('div');
  messageBox.classList.add('message-box');
  document.body.appendChild(messageBox);

  let carrinho = [];

  const renderCelulares = (celulares) => {
    containerCelulares.innerHTML = '';

    celulares.forEach((celular) => {
      const celularElement = document.createElement("div");
      celularElement.classList.add("celular");

      const coresImgsHtml = celular.coresImg.map((img, index) => `<img src="${img}" alt="cor" class="corImg" data-index="${index}">`).join('');

      const celularInfo = `
        <div class="album">
          <img class="banner" src="${celular.img}" alt="${celular.titulo}">
          <h4 class="nomeCelular">${celular.titulo}</h4>
          <div class="preco">
            <p>${celular.preco}</p>
            <button class="adicionarCarrinho">Adicionar ao Carrinho</button>
          </div>
        </div>
      `;

      celularElement.innerHTML = celularInfo;
      containerCelulares.appendChild(celularElement);

      const corImages = celularElement.querySelectorAll(".corImg");
      let corEscolhida = celular.coresImg[0];
      corImages.forEach(img => {
        img.addEventListener("click", (event) => {
          corEscolhida = celular.coresImg[event.target.dataset.index];
          corImages.forEach(img => img.classList.remove("selected"));
          event.target.classList.add("selected");
        });
      });

      celularElement.querySelector(".adicionarCarrinho").addEventListener("click", () => {
        adicionarAoCarrinho(celular, corEscolhida);
        mostrarMensagemSucesso(celular, corEscolhida);
      });
    });
  };

  const filterCelulares = () => {
    const selectedModelo = document.querySelector(".generoEscolhido")?.innerText || 'Todos';
    const maxPrice = parseFloat(rangeInput.value);

    const celularesFiltrados = celularList.filter(celular => {
      const modeloMatch = selectedModelo === 'Todos' || celular.titulo.includes(selectedModelo);
      const precoMatch = parseFloat(celular.preco.replace("R$ ", "").replace(".", "").replace(",", ".")) <= maxPrice;
      return modeloMatch && precoMatch;
    });

    renderCelulares(celularesFiltrados);
  };

  const adicionarAoCarrinho = (celular, corEscolhida) => {
    const itemComCor = { ...celular, corEscolhida };
    carrinho.push(itemComCor);
    atualizarCarrinho();
  };

  const atualizarCarrinho = () => {
    carrinhoItens.innerHTML = '';
    let totalPreco = 0;

    carrinho.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("carrinho__item");

      itemElement.innerHTML = `
      <div class= "dados__carrinho">
        <p>${item.titulo} - Cor: <img src="${item.corEscolhida}" alt="cor" class="corImgPequena"></p>
        <button class="remover-item" data-index="${index}"><img class= "lixeira" src ="src/assets/icons/lixeira.png" alt = "Fechar"></button>
        </div>
        <p>${item.preco}</p>
      `;

      carrinhoItens.appendChild(itemElement);

      totalPreco += parseFloat(item.preco.replace("R$ ", "").replace(".", "").replace(",", "."));
    });

    totalPrecoElement.innerText = `R$ ${totalPreco.toFixed(2).replace(".", ",")}`;

    const botoesRemover = carrinhoItens.querySelectorAll(".remover-item");
    botoesRemover.forEach(botao => {
      botao.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        carrinho.splice(index, 1);
        atualizarCarrinho();
      });
    });
  };

  const mostrarMensagemSucesso = (celular) => {
    messageBox.innerHTML = `
      <img src="${celular.img}" alt="${celular.titulo}" class="imgProduto">
      <p>${celular.titulo} adicionado ao carrinho com sucesso!</p>
    `;
    messageBox.classList.add('show');

    setTimeout(() => {
      messageBox.classList.remove('show');
    }, 3000);
  };

  buttonCadastrarHeader.addEventListener("click", () => {
    modalContainer.showModal();
  });

  buttonRemoverModal.addEventListener("click", () => {
    modalContainer.close();
  });

  rangeInput.addEventListener("input", (event) => {
    document.querySelector(".rangeValue").innerText = event.target.value;
    filterCelulares();
  });

  document.querySelectorAll(".generos").forEach(genero => {
    genero.addEventListener("click", () => {
      document.querySelectorAll(".generos").forEach(g => g.classList.remove("generoEscolhido"));
      genero.classList.add("generoEscolhido");
      filterCelulares();
    });
  });

  renderCelulares(celularList);
});
function escolhendoCor() {
  const coresEscolhidas = document.querySelectorAll(".corImg");

  coresEscolhidas.forEach(corEscolhida => {
    corEscolhida.addEventListener("click", () => {
      // Remove a classe 'escolhida' de todas as imagens
      coresEscolhidas.forEach(img => img.classList.remove("escolhida"));
      
      // Adiciona a classe 'escolhida' apenas na imagem clicada
      corEscolhida.classList.add("escolhida");
    });
  });
}
escolhendoCor()

function scroolPag(){
  document.getElementById('scrollToFooter').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('scrollToProdutos').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
  });

}

scroolPag()

