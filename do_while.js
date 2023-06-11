//Estruturas de controle = do/while (faça/repita)...
//Obs: Única estrutura de controle na qual a expressão está depois do bloco...


function getInteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1   //neste caso funcionará com -1 pq a expressão está depois do bloco...

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1) 
console.log('Atpe a próxima!')