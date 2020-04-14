function onLoad() {
    const dependencias = {
        tela: Tela, // a classe Tela é global
        util: Util 
    }
    // inicializamos o jogo da Memória
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
}

window.onload = onLoad