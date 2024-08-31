let num = [-5,-4,-3,-2,-1,0, 1,2,3,4,5];

function verificaImparZero(num) {
    let imparZero = [];
    for (let i = 0; i < num.length; i++) {  // Inicialização, Condição, Incremento
        if (num[i] % 2 != 0 || num[i] < 0) {
            imparZero.push(num[i]);
        }
    }
    console.log(`Números ímpares ou menores do que zero:`, imparZero);
};

function verificaDivisao(num) {
    let naoDividendos = [];
    for (let i = 0; i < num.length; i++){
        if(num[i] % 5 != 0 && num[i] % 3 != 0){
            naoDividendos.push(num[i]);
        }
    }
    console.log(`Números não divisíveis por 3 e 5:`, naoDividendos);
};

verificaImparZero(num);
verificaDivisao(num);