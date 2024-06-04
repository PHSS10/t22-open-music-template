import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumDatabase.js";


function chamandoFuncao() {
    applyInputRangeStyle();
}

chamandoFuncao();

function albumDinamico(albumList) {
    const containerAlbum = document.querySelector(".container__album");
    containerAlbum.innerHTML = ''; 

    albumList.forEach((Element) => {
        const album = document.createElement("div");
        const img = document.createElement("img");
        const h4 = document.createElement("h4");
        const autor = document.createElement("div");
        const pAutor = document.createElement("p");
        const pGenero = document.createElement("p");
        const preco = document.createElement("div");
        const h3 = document.createElement("h3");
        const button = document.createElement("button");

        album.appendChild(img);
        album.appendChild(h4);
        album.appendChild(autor);
        album.appendChild(preco);
        autor.appendChild(pAutor);
        autor.appendChild(pGenero);
        preco.appendChild(h3);
        preco.appendChild(button);

        album.classList.add("album");
        h4.classList.add("nomeMusica");
        autor.classList.add("autor");
        preco.classList.add("preco");

        h4.innerText = Element.title;
        pGenero.innerText = Element.genre;
        pAutor.innerText = Element.band;
        h3.innerText = `R$ ${Element.price.replace(".",",")}`
        button.innerText = "Comprar";
        img.innerText = img.setAttribute("src", Element.img);
        
        containerAlbum.appendChild(album);
    });

}

albumDinamico(albumList);

function addGeneros() {
    const generos = document.querySelectorAll(".generos");
    
    generos.forEach(function(genero) {
        genero.addEventListener("click", function() {
            generos.forEach(function(g) {
                g.classList.remove("generoEscolhido");
            });
            
            this.classList.add("generoEscolhido");
        });
    });
}
addGeneros()

function choiseTheme() {
    const buttonDark = document.querySelector(".buttonDark");
    const generos = document.querySelectorAll(".generos");
    const imgButtonDark = document.querySelector(".img__buttonDark");
    
    buttonDark.addEventListener("click", function() {
        const albums = document.querySelectorAll(".album");
        if (imgButtonDark.src.includes("light.png")) {
            imgButtonDark.src = "./src/assets/icons/dark.png";
            let root = document.documentElement;
            root.style.setProperty("--gray--color8", "#FDFEFF");
            root.style.setProperty("--gray--color2", "#212529");
            buttonDark.style.backgroundColor = "#F1F3F5";
            generos.forEach((element) => {
                element.style.backgroundColor = "#F1F3F5";
            });
    
            albums.forEach((element) => {
                element.style.backgroundColor = "#F8F9FA";
            });
            localStorage.setItem("@openMusic:theme", "light");
        } else {
            imgButtonDark.src = "./src/assets/icons/light.png";
            let root = document.documentElement;
            root.style.setProperty("--gray--color8", "#15171A");
            root.style.setProperty("--gray--color2", "#F1F3F5");
            buttonDark.style.backgroundColor = "#212529";
            generos.forEach((element) => {
                element.style.backgroundColor = "#212529";
            });
            albums.forEach((element) => {
                element.style.backgroundColor = "#212529";
            });
            localStorage.setItem("@openMusic:theme", "dark");
        }
    });
}
function savedTheme() {
    choiseTheme()
    const theme = localStorage.getItem("@openMusic:theme");
    const imgButtonDark = document.querySelector(".img__buttonDark");
    const generos = document.querySelectorAll(".generos");
    const buttonDark = document.querySelector(".buttonDark");

    if (theme === "light") {
        imgButtonDark.src = "./src/assets/icons/dark.png";
        let root = document.documentElement;
        root.style.setProperty("--gray--color8", "#FDFEFF");
        root.style.setProperty("--gray--color2", "#212529");
        buttonDark.style.backgroundColor = "#F1F3F5";
        generos.forEach((element) => {
            element.style.backgroundColor = "#F1F3F5";
        });
        const albums = document.querySelectorAll(".album");
        albums.forEach((element) => {
            element.style.backgroundColor = "#F8F9FA";
        });
    } else {
        imgButtonDark.src = "./src/assets/icons/light.png";
        let root = document.documentElement;
        root.style.setProperty("--gray--color8", "#15171A");
        root.style.setProperty("--gray--color2", "#FDFEFF");
        buttonDark.style.backgroundColor = "#212529";
        generos.forEach((element) => {
            element.style.backgroundColor = "#212529";
        });
        const albums = document.querySelectorAll(".album");
        albums.forEach((element) => {
            element.style.backgroundColor = "#212529";
        });
    }
}
savedTheme()

function inputRange() {
    const rangeInput = document.getElementById("rangePreco");
    const rangeValue = document.querySelector(".rangeValue");

    rangeInput.addEventListener("input", () => {
        rangeValue.textContent = rangeInput.value;
    });
}
inputRange()


