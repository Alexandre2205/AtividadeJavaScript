const valordeinput = () => {
    const inputElement = document.getElementById('nomedapessoa'); 
    const valor = inputElement.value; 
    if(valor) {
        const usuario = !!listadepessoas.find(pessoa => pessoa === valor);
        if(usuario){
            alert('Voce ja curtiu');
        } else listadepessoas.push(valor);            
    } else alert('Digite seu nome antes de curtir')
    
    if(listadepessoas.length > 3){
        paragrafo.innerText = `${listadepessoas[1]},${listadepessoas[2]} e mais ${listadepessoas.length - 3} curtiram a pagina`
    } else if(listadepessoas.length > 2){
        paragrafo.innerText = `${listadepessoas[1]} e ${listadepessoas[2]} curtiram a pagina`
    }else {
        paragrafo.innerText = `${listadepessoas[1]} curtiu a pagina`
    }
}


const listadepessoas=['Nenhuma pessoa curtiu']
const paragrafo = document.getElementById('listadepessoas')
paragrafo.innerText = `${listadepessoas[0]}`
botao = document.getElementById('botaodecurtir');
botao.addEventListener('click',valordeinput)