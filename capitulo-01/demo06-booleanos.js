const podeDirigir = true

if (podeDirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 1

if (!saldoEmConta){
    console.log('não tem saldo!')
}

const boolComString = "ae hackerzão!!"

// força o valor para true ou false 
// de acordo com a tabela
console.log('boolComString', !!boolComString)

//negação
console.log('negação', !boolComString)

//negação + forçar bool
console.log('negação + forçar bool',
    ! ( !!boolComString ) 
)