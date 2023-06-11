//Estruturas de controle = for/in...percorre atributos de uma determinada estrutura...

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] //for/in percorre os atributos pelo índice e não pelos valores... 
for (let i in notas) { //sempre atribuir através do 'let' para evitar que a variável vá para o contexto glogal...
    console.log(i, notas[i])
}

//====================================================================================================================

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
