// Lista de tarefas
const tarefas = [
    { id: 1, descricao: 'Estudar JavaScript', concluida: false },
    { id: 2, descricao: 'Fazer exercícios', concluida: true },
    { id: 3, descricao: 'Praticar ES6+', concluida: false },
];

// Função para renderizar a lista de tarefas
const renderizarTarefas = () => {
    const listaTarefas = document.getElementById('lista-tarefas');
    listaTarefas.innerHTML = ''; // Limpa a lista antes de renderizar

    tarefas.forEach(({ id, descricao, concluida }) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${concluida ? 'checked' : ''} id="tarefa-${id}">
            <label for="tarefa-${id}">${descricao}</label>`;
        listaTarefas.appendChild(li);
    });
};

// Adicionando nova tarefa usando Arrow Function e Template Literal
const adicionarTarefa = (descricao) => {
    const novaTarefa = {
        id: tarefas.length + 1,
        descricao,
        concluida: false,
    };

    tarefas.push(novaTarefa);
    renderizarTarefas();
};

// Chamando a função de renderização inicial
renderizarTarefas();

// Adicionando tarefa ao clicar no botão
document.addEventListener('DOMContentLoaded', () => {
    const btnAdicionar = document.createElement('button');
    btnAdicionar.textContent = 'Adicionar Tarefa';
    document.body.appendChild(btnAdicionar);

    btnAdicionar.addEventListener('click', () => {
        const descricao = prompt('Digite a descrição da tarefa:');
        if (descricao) {
            adicionarTarefa(descricao);
        }
    });
}); // Correção aqui
