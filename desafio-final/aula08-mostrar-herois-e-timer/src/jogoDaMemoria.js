class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade especificada.
    // tela
    constructor({ tela, util }){
        this.tela = tela
        this.util = util
        // caminho sempre relativo ao index.html
        this.heroisIniciais = [
            { img: './arquivos/batman.png'  , nome: 'batman' }, 
            { img: './arquivos/deadpool.png', nome: 'deadpool' },
            { img: './arquivos/flash.png'   , nome: 'flash' },
            { img: './arquivos/groot.png'   , nome: 'groot' },   
        ]
        this.iconePadrao = './arquivos/avatar.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }

    // para usar o this, não podemos usar static!
    inicializar() {
        // vai pegar todas as funções da classe Tela!
        // coloca todos os heróis na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // forca a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
    }

    async embaralhar() {
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
        this.tela.exibirCarregando()

        const idDoIntervalo = this.tela.iniciarContador()

        // vamos esperar 3 segundo para atualizar a tela
        await this.util.timeout(3000)
        this.tela.limparContador(idDoIntervalo)
        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)
    }

    esconderHerois(herois) {
        // vamos trocar a imagem de todos os herois existentes
        // pelo icone padrão
        // como fizemos no construtor, vamos extrair o necessario
        // usando a sintaxe ({ chave: 1})  estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando não usamos : ( exemplo do id ), o JS entende que o nome 
        // é o mesmo do valor. Ex. id: id, vira id,
        const heroisOcultos = herois.map(({nome, id }) => ({
            id,
            nome,
            img : this.iconePadrao,
        }))
        // atualizamos a tela com os herois ocultos 
        this.tela.atualizarImagens(heroisOcultos)
        // guardamos os herois para trabalhar com eles depois
        this.heroisEscondidos = heroisOcultos
    }

    exibirHerois(nomeDoHeroi){
        // vamos procurar esse heroi pelo nome em nossos heroisIniciais
        // vamos obter somente a imagem dele
        const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)
        // vamos criar na função tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)
    }

    verificarSelecao(id, nome) {
        const item = { id, nome }
        // vamos verificar a quantidade de herois selecionados
        // e tomar ação se escolheu certo ou errado
        console.log(this.heroisSelecionados)
        console.log(this.heroisSelecionados.length)
        const heroisSelecionados = this.heroisSelecionados.length
        switch (heroisSelecionados) {
            case 0:
                // adiciona a escolha na lista, esperando pela proxima 
                // clicada 
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // se a quantidade de escolhidos for 1, significa
                // que o usuário só pode escolher mais 1
                // vamos obter o primeiro item da lista
                const [ opcao1 ] = this.heroisSelecionados
                // conferimos se os nomes e ids batem conforme 
                // o esperado
                if (opcao1.nome === item.nome &&
                    // aqui verificamos se são ids diferentes para 
                    // o usuário não clicar duas vezes no mesmo
                    opcao1.id !== item.id ) {
                    this.exibirHerois(item.nome)
                    // zera os selecionados
                    this.heroisSelecionados = []
                    // como o padrão é true não precisa passar nada
                    this.tela.exibirMensagem()
                    // para a execucao                    
                    return;
                }

                // zera os selecionados
                this.heroisSelecionados = []
                this.tela.exibirMensagem(false)
                // fim do case
                break;
        }
    }

    mostrarHeroisEscondidos() {
        // vamos pegar todos os herois da tela e colocar seu
        // respectivo valor correto
        const heroisEscondidos = this.heroisEscondidos
        for (const heroi of heroisEscondidos) {
            const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos)
    }

    jogar() {
        this.embaralhar()
    }
}