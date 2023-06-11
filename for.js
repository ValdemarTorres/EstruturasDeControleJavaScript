//Estruturas de controle - for (para)...

let contador = 1
while (contador <= 10) { //executa contador euquanto resultado for mais do que 10, fincando falso e saindo do loop..
    console.log(`Contador = ${contador}`) ;contador++ //ou..
    //contador++
}

//=============================================================================================

for(let cont = 0; cont <= 10; cont++) {
    console.log(`Cont = ${cont}`)
}

//=============================================================================================
//Navegando dentro de um array...

const Notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < Notas.length; i++) {
    console.log(`Nota = ${Notas[i]}`)
}