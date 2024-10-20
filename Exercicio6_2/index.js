// Recupera as tarefas do localStorage, ou inicializa um array vazio
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Função para renderizar as tarefas na página
function renderizarTarefas() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';  // Limpa a lista antes de renderizar

    // Para cada tarefa, cria um item da lista (li)
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.onchange = () => alterarStatusTarefa(index);

        // Aplica estilo se a tarefa estiver concluída
        const descricao = document.createElement('span');
        descricao.textContent = tarefa.descricao;
        descricao.classList.toggle('concluida', tarefa.status);

        // Botão para excluir a tarefa
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.onclick = () => excluirTarefa(index);

        li.appendChild(checkbox);
        li.appendChild(descricao);
        li.appendChild(botaoExcluir);
        listaTarefas.appendChild(li);
    });
}

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const descricaoTarefa = document.getElementById('descricaoTarefa').value;
    if (descricaoTarefa === '') return alert('Por favor, insira uma descrição');

    // Cria um objeto tarefa
    const novaTarefa = {
        descricao: descricaoTarefa,
        status: false  // A tarefa inicia como não concluída
    };

    // Adiciona a tarefa ao array e salva no localStorage
    tarefas.push(novaTarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    // Limpa o campo de texto e atualiza a lista
    document.getElementById('descricaoTarefa').value = '';
    renderizarTarefas();
}

// Função para alterar o status de uma tarefa (concluída/não concluída)
function alterarStatusTarefa(index) {
    tarefas[index].status = !tarefas[index].status;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    renderizarTarefas();
}

// Função para excluir uma tarefa
function excluirTarefa(index) {
    tarefas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    renderizarTarefas();
}

// Renderiza as tarefas ao carregar a página
renderizarTarefas();
