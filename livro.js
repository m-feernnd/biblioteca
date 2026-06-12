// Cadastro de Livro
let livro = {
    codigo: prompt("Código do livro:"),
    titulo: prompt("Título do livro:"),
    autor: prompt("Autor do livro:"),
    ano: prompt("Ano do livro:"),
    editora: prompt("Editora do livro:"),
    localizacao: prompt("Localização do livro:"),
    status: prompt("Status (Emprestado ou Não emprestado):")
};

console.log("LIVRO CADASTRADO");
console.log(livro);

// Cadastro de Usuário
let usuario = {
    codigo: prompt("Código do usuário:"),
    nome: prompt("Nome do usuário:"),
    cpf: prompt("CPF:"),
    endereco: prompt("Endereço:"),
    telefone: prompt("Telefone:"),
    codigoTurma: prompt("Código da turma:")
};

console.log("USUÁRIO CADASTRADO");
console.log(usuario);

// Cadastro da Turma
let turma = {
    codigo: prompt("Código da turma:"),
    nome: prompt("Nome da turma:"),
    ano: prompt("Ano da turma:")
};

console.log("TURMA CADASTRADA");
console.log(turma);

// Cadastro do Empréstimo
let emprestimo = {
    codigo: prompt("Código do empréstimo:"),
    dataEmprestimo: prompt("Data do empréstimo:"),
    dataDevolucao: prompt("Data para devolução:"),
    situacao: prompt("Situação do empréstimo:")
};

console.log("EMPRÉSTIMO CADASTRADO");
console.log(emprestimo);

// Itens do Empréstimo
let itemEmprestimo = {
    codigoItem: prompt("Código do item:"),
    codigoLivro: prompt("Código do livro:"),
    situacaoLivro: prompt("Situação do livro:")
};

console.log("ITEM CADASTRADO");
console.log(itemEmprestimo);