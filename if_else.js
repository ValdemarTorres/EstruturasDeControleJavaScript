//Estruturas de controle - if(se) /else(senão)...

const imprimirResulado = function(nota){
    if(nota >= 7) {
        console.log('Aprovado!')
    }
    else {
        console.log('Reprovado!')
    }
}//Se tiver apenas um if/else pode-se tabalhar sem chaves(não recomendado)...

imprimirResulado(10)
imprimirResulado(4)
imprimirResulado('Epa!') //erro da linguagem...cuidado!!!