var listaJson = null;
var listadepessoas=[];
if (localStorage.getItem("lista") == null){
    listaJson = JSON.stringify(listadepessoas);
    localStorage.setItem("lista",listaJson);
}else{
    listadepessoas = JSON.parse(localStorage.getItem("lista"));
}

const paragrafo = document.getElementById('listadepessoas');
addEventListener('load',carregarLisata());
botao = document.getElementById('botaodecurtir');
botao.addEventListener('click',valordeinput);
const botaodeReset = document.getElementById('reset');
botaodeReset.addEventListener('click',resetarlista);

const valordeinput = () => {
    listadepessoas = JSON.parse(localStorage.getItem("lista"));
    const inputElement = document.getElementById('nomedapessoa'); 
    const valor = inputElement.value; 
    if(valor) {
        const usuario = !!listadepessoas.find(pessoa => pessoa === valor)
        if(usuario){
            alert('Voce ja curtiu');
        } else {
            listadepessoas.push(valor);
            listaJson = JSON.stringify(listadepessoas);
            localStorage.setItem("lista",listaJson);
        }
    } else alert('Digite seu nome antes de curtir')
    
    if(listadepessoas.length > 2){
        paragrafo.innerText = `${listadepessoas[0]}, ${listadepessoas[1]} e mais ${listadepessoas.length - 2} curtiram a pagina`
    } else if(listadepessoas.length > 1){
        paragrafo.innerText = `${listadepessoas[0]} e ${listadepessoas[1]} curtiram a pagina`
    }else if(listadepessoas.length == 1){
        paragrafo.innerText = `${listadepessoas[0]} curtiu a pagina`
    }
}
function carregarLisata(){
    console.log(listadepessoas.length)
    console.log(listadepessoas)
    if(listadepessoas.length > 2){
        paragrafo.innerText = `${listadepessoas[0]}, ${listadepessoas[1]} e mais ${listadepessoas.length - 2} curtiram a pagina`
    } else if(listadepessoas.length > 1){
        paragrafo.innerText = `${listadepessoas[0]} e ${listadepessoas[1]} curtiram a pagina`
    }else if(listadepessoas.length == 1){
        paragrafo.innerText = `${listadepessoas[0]} curtiu a pagina`
    }
    console.log(listadepessoas.length)
    console.log(listadepessoas)
}
function resetarlista(){
    localStorage.clear();
    window.location.reload(true);
}