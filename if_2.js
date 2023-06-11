//Estruturas de controle - if (se)...
//Uma única sentança de bloco não precisa usar chaves...
//Várias sentenças devem ser com chaves...

function teste1(num){
    if(num > 7)
        console.log(num) //somente esta sentença está associada ao if...
        console.log("Final") //sentença não associada a nada (fora do if - sempre vai mostar no resultado)...
}
teste1(6)
teste1(8)



//================================================================
//Não use ';' nas definições de estruturas de controle if...

function teste2(num){
    if(num > 7); { //com ';' separando as duas sentenças sempre serão executadas (errado)...
        console.log(num)
    }
}
teste2(6)
teste2(8)