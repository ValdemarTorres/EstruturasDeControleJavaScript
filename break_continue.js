//Estruturas de controle = break/continue...

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let x in nums) {
    if (x == 5) { //parar contador quando chagar ao índice 5...
        break //age sobre o 'for/while/switch' mais próximo...causa desvio de fluxo para fora do laço...
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log('Fim!')


//=============================================================================

for (let y in nums) {
    if (y == 5) { //salta o índice 5 com o 'continue'...
        continue //age em estruturas de repetição...
    }
        console.log(`${y} = ${nums[y]}`)
}
console.log('Fim!')


//=============================================================================
//Pouco usado atualmente...

externo:
for (let a in nums) {
    for (let b in nums) {
        //if (a == 2 && b == 3) break //age somente no break interno...
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim!')