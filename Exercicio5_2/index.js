const valordeinput = () => {
  const inputElement = document.getElementById("tarefa");
  const valor = inputElement.value; // Remove espaços em branco
  if (valor) {
    const usuario = paragrafo.find((tarefa) => tarefa === valor);
    if (usuario) {
      alert("Essa tarefa já existe");
    } else {
      paragrafo.push(valor);

      // Criação dos elementos dinamicamente
      const container = document.getElementById("paragrafos");

      const divTarefa = document.createElement("div");

      // Cria o checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "checkbox";

      // Cria o elemento de texto (tarefa)
      const spanTarefa = document.createElement("span");
      spanTarefa.textContent = valor;

      // Adiciona os elementos criados à divTarefa
      divTarefa.appendChild(checkbox);
      divTarefa.appendChild(spanTarefa);
      divTarefa.appendChild(document.createElement("br")); // Quebra de linha

      // Adiciona a tarefa ao container
      container.appendChild(divTarefa);

      // Limpa o campo de input
      inputElement.value = "";
    }
  } else {
    alert("Digite a tarefa");
  }
};

const paragrafo = []; // A lista começa vazia

const botao = document.getElementById("botao");
botao.addEventListener("click", valordeinput);