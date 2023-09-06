let aluno ={
    matricula:123,
    nome: 'Julliana',
    curso:'Sistema de Informação',
    cre: 8.5   
};

//Acessando valores por 'dot notation'
console.log(aluno.nome);
//Acessando valores pelo nome da chave
console.log(aluno['nome']);
aluno.bolsista = true; //adicionando um novo atributo
console.log(aluno)