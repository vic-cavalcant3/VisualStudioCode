
function adicionarResultado() {
    // Obtém os valores do formulário
    let turma = document.getElementById('turma').value;
    let totalAlunos = document.getElementById('totalAlunos').value;
    let alunosVegetarianos = document.getElementById('alunosVegetarianos').value;

    // Verifica se os campos estão preenchidos
    if (turma === '' || totalAlunos === '' || alunosVegetarianos === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Obtém a tabela e o corpo da tabela
    let tabela = document.getElementById('resultTable').getElementsByTagName('tbody')[0];

    // Cria uma nova linha
    let novaLinha = tabela.insertRow();

    // Cria e insere células na nova linha
    let celulaTurma = novaLinha.insertCell(0);
    let celulaTotalAlunos = novaLinha.insertCell(1);
    let celulaVegetarianos = novaLinha.insertCell(2);

    // Preenche as células com os dados inseridos
    celulaTurma.textContent = turma;
    celulaTotalAlunos.textContent = totalAlunos;
    celulaVegetarianos.textContent = alunosVegetarianos;

    // Limpa os campos do formulário
    document.getElementById('contagemForm').reset();
}
