//Estruturas de controle - if/else if...

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim  //Number acessa seu valor através de 'this'...
}
const imprimirResulado = function (nota){
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra!')
    }else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!')
    }else if (nota.entre(4, 6.99)) {
        console.log('Recuperação!')
    }else if (nota.entre(0, 3.99)) {
        console.log('Reprovado!')
    }else {
        console.log('Nota Iválida!')
    }
    console.log('Fim!')
}
imprimirResulado(10)
imprimirResulado(8.9)
imprimirResulado(6.55)
imprimirResulado(2.3)
imprimirResulado(-1)
imprimirResulado(11)