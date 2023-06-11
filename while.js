//Estruturas de controle - while (repetição)...com quantidade determinada/indeterminada das opções...
//Obs: 
    //Repetições por determinadas quantidades de vezes - for..
    //Repetições por indeterminadas quantidades de vezes - while...
    //Seleções múltiplas - switch...
    //Seleções múltiplas - if/else...

function getInteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0 //não pode iniciar em -1 por que já inicia com informação falsa...

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log("Até a próxima!")