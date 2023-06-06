
//Assincrono
async function listaVideos() {
    //Método que retorna uma Promise
    const conexao = await fetch("http://localhost:3000/videos");

    const conexaoConvertida = await conexao.json(); //Await é obrigatorio para receber o retorno da promise

    //console.log(conexaoConvertida);

    return conexaoConvertida;

    /*
        A Promise pode retonar um resultado ou um erro
    
    */

}


async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            //Tipo do contéudo
            "Content-type": "application/json"
        },
        //Corpo do contéudo que será enviado
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mill visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possivel enviar o video");
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

listaVideos();

async function buscavideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}


export const conectaApi = {
    listaVideos,
    criaVideo,
    buscavideo
};