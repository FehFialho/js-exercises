//TESTES VARIADOS DE MÉTODOS PARA ARRAYS
let turma1 = ["Guilherme", "Manuel", "Samuel", "João", "Mariana", "Matheus"];
let turma2 = ["Rosana", "Davi","Amanda", "Elenita", "Marcos", "Jorge", "Ana"]


//unshift() - Adicionando novo elemento início | Oposto shift()
turma1.unshift("Monica");
console.log(`Adicionando aluno(a) ${turma1[0]} na turma!`);

//pop() - Remover último elemento | Oposto push()
console.log(`Removendo o aluno(a) ${turma1.pop()} da turma!`);

//indexof() - Encontrar elemento específico.
console.log(`Encontrando Samuel na chamada, localização:`, turma1.indexOf('Samuel'));

//splice() - Substituição de elemento.
console.log(`Correção de nome (${turma1.splice(2,1,`Emanuel`)} para ${turma1[2]}):`, turma1);

//concat() - Concatenação de arrays (Também usado em strings).
let todosAlunos = turma1.concat(turma2);
console.log(`Lista de todos os alunos do 8º ano:`, todosAlunos);

//Divisão de um array em dois diferentes.
let grupo1Turma2 = turma2.slice(0,2);
let grupo2Turma2 = turma2.slice(3,7);

//ESTUDANDO VÁRIAS APLICAÇÕES DE UM MESMO MÉTODO
let num = [1,2,3,4,5,6];

//Função Direta (Método 1)
numPares = num.filter(
    function(item){
        return item % 2 === 0;
    }
)
console.log(numPares);

//Função Chamada (Método 2)
function filtrarImpar(item){
    return item % 2 !== 0;
}
numImpares = num.filter(filtrarImpar);
console.log(numImpares);

//Função Callback (Método 3)
numMaior3 = num.filter(item => item > 3);
console.log(numMaior3);