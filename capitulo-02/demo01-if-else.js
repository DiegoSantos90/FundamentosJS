let frutaExistenteNoMercado = false
let temCPUSuficiente = true

//
// obter valores do terminal
const args = process.argv
const saldo = args[args.length - 1]

// console.log('args', args)
// console.log('saldo',  saldo)

if(isNaN(saldo)){
    console.log('valor inválido')
    return
}

let tipoCliente = "premium"

if(saldo < 9){
    tipoCliente = "basic"
}
else if (saldo >= 10 && saldo < 20) {
    tipoCliente = "gold"
}
else {
    tipoCliente = null
}

// null, undefined, vazio, 0 === false!
if(!tipoCliente) {
    tipoCliente = "indefinido"
}

//console.log('tipoDoCliente', tipoCliente)

const operadorOu = 1 > 2 || 2 < 1
const operadorE = 1 === 1 && 2 != 2
const operadorNot = !(1==1)

const idade = 17

const resultado = 1 ? (null || ((1 != '1') ? "Hello world!": "Hackerzao")) : "não zero";                    

const valor = 5

if(valor < 2 || valor > 4) {
    console.log('1')
} else if(valor < 5) {
    console.log('2')
}
else {
    console.log('3')
}