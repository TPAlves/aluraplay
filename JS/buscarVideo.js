import { conectaApi } from "./conectaApi.js"
import { criaCard } from "./mostraVideos.js"

async function buscarVideo(event) {
    event.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscavideo(dadosPesquisa);

    // console.log(busca);

    const lista = document.querySelector("[data-lista]");

    //Apaga todos os elementos da lista
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => {
        lista.appendChild(
            criaCard(
                element.titulo,
                element.descricao,
                element.url,
                element.imagem));
    });

    if(busca.length ==0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com esse termo</h2>`;
    }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", event => buscarVideo(event));

