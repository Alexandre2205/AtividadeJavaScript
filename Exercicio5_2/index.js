const valordeinput = () => {
  const inputElement = document.getElementById("tarefa");
  const valor = inputElement.value;
  if (valor) {
    const usuario = !!paragrafo.find((tarefa) => tarefa === valor);
    if (usuario) {
      alert("Essa tarefa ja existe");
    } else {
      paragrafo.push(valor);
      const check = `<input type="checkbox" name="checkbox" ></input>`;
      const container = document.getElementById("paragrafos");
      container.innerHTML = ""; // essa linha eu adicionei para quando salvar outro elemento, não repetir oq já estava lá
      paragrafo.forEach((e) => {
        container.innerHTML += e + " " + check + "<br>";
      });
    }
  } else alert("Digite a tarefa");
};
const paragrafo = []; // a lista começa vazia

const botao = document.getElementById("botao");
botao.addEventListener("click", valordeinput);