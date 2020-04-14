class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade especificada.
    // tela
    constructor({ tela }){
        this.tela = tela
        // caminho sempre relativo ao index.html
        this.heroisIniciais = [
            { img: './arquivos/batman.png'  , name: 'batman' }, 
            { img: './arquivos/deadpool.png', name: 'deadpool' },
            { img: './arquivos/flash.png'   , name: 'flash' },
            { img: './arquivos/groot.png'   , name: 'groot' },   
        ]
    }

    // para usar o this, não podemos usar static!
    inicializar() {
        // vai pegar todas as funções da classe Tela!
        // coloca todos os heróis na tela
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}