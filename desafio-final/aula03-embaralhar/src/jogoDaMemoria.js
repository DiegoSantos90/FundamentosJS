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
        // forca a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada item e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        // ordenar
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
    }

    jogar() {
        this.embaralhar()
    }
}