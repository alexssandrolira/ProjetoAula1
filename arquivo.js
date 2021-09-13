const generico = new Animal('Animal Genérico ')
generico.falar()

const gato = new Gato('Gato ')
gato.falar()

const cachorro = new Cachorro('Dog ')
cachorro.falar()
//ternario
//alert(numero1 > numero2 ? 'Numero 1 > 2' : 'Numero 1 Nao > 2')

/*
const variavel = ['Levi', 'alex', 'toin', 332]
const resul = variavel.join(':')
alert(resul)
*/

/*
function fabricaPessoa(nomeDaPessoa,sobrenomeDaPessoa,dataNascimento){
    return{
        nome: nomeDaPessoa,
        sobrenome: sobrenomeDaPessoa,
        datanascimento: dataNascimento
    }
}

const pessoa1 = fabricaPessoa('alex', 'lira', 35)
const pessoa2 = fabricaPessoa('pop', 'rei', 23)
const pessoa3 = fabricaPessoa('sandro', 'gomes', 12)
const pessoa4 = fabricaPessoa('lucas', 'santos', 54)
const pessoa5 = fabricaPessoa('val', 'rocha', 34)
const pessoas= [pessoa1,pessoa2,pessoa3,pessoa4,pessoa5]

function lerPessoa(pessoa) {
    console.log("Dentro do for lemos", pessoa)
}
pessoas.forEach(lerPessoa)

/*for(const pessoa of pessoas){
    console.log("Dentro do for lemos", pessoa)
}
*/
/*
function funcaocustosa() {
    return new Promise(function (resolve,reject){
        //vai rodar de forma assíncrona
        const resultado = 10 + 5
        resolve(resultado)
    })
}

function esperar(segundos){
    return new Promise(function(resolve,reject){
        setTimeout(resolve, segundos * 1000)
    })
}

async function principal() {
    await esperar(5)
    console.log('passou-se 5 segundos')
}

principal()

funcaocustosa().then(function (resultado){
console.log(resultado)
})


const calculo = () => {
    return new Promise(function(resolve,reject){
        const calcular = 40+3
        resolve(calcular)
    })
}

calculo().then(function (calcular){
    console.log(calcular)
})
*/



