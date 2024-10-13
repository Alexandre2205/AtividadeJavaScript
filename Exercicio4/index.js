const mudatext = (elemento) => {
    const titulo = document.getElementById(elemento);
    titulo.innerText = 'O texto do titulo foi alterado';
}
const adicionaClasse = (elemento) => {
    listadeclasse = document.getElementsByTagName(elemento);
    for(let cor in listadeclasse){
        novoestyle = listadeclasse[cor].classList;
        listadeclasse[cor].classList = novoestyle + ' menu-item2'   
    }   
}
const mudaStyle = () => {
    listadeclasse = document.getElementsByTagName('li');
    for(let cor in listadeclasse){
        novoestyle = listadeclasse[cor].classList;
        listadeclasse[cor].style.fontFamily = 'Arial';
        listadeclasse[cor].style.fontSize = '24px';

    }
}
const mudatextdobotao = () => {
    const texto = document.getElementById("meu-botao");
    texto.innerText = 'O texto do botão foi alterado';
}
const executaTodas = () => {
    mudatextdobotao()
    mudatext('titulo-principal')
    adicionaClasse('p')
    mudaStyle()
}
const tempoparachamar = () => {
    setTimeout(() => executaTodas(),3000)
}
tempoparachamar()



