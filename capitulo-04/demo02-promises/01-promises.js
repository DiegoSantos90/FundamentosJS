const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// terminal.question('Qual o seu nome ?\n', nome => {
//     terminal.question('Qual o seu telefone?\n', telefone => {
//         console.log(
//         `
//         Nome: ${nome},
//         Telefone: ${telefone}
//         `)
//         terminal.close()
//     })
// })

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome
let telefone

Promise.resolve()
        .then(() => questionAsync('Qual o seu nome ?'))
        .then( respostaNome => {
            if(!respostaNome) throw new Error('Nome vazio!!!')
            nome = respostaNome
        })
        .then( () => questionAsync('Qual o seu telefone ? '))
        .then(respostaTelefone => {
            if(!respostaTelefone) throw new Error('Telefone vazio!!!')
            telefone = respostaTelefone
        })
        .then( () => {
            console.log(`Nome: ${nome}, Telefone: ${telefone}`)
        })
        .catch( error => {
            console.error('Deu Ruim', error.stack)
        })
        .finally( () => {
            terminal.close()
        })