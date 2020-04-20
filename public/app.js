/**
 *  Configuração de arranque do requirejs
 */
requirejs.config({
    baseUrl : './lib', // base/raiz de execução e escopo do requirejs
    paths : {
        app: '../js' // path customizado para voltar 1 nivel com nome de app olhando para ../js
    }
});

// inicia o requirejs de fato
requirejs(['app/posts'], function(){
    console.log('requirejs carregou');
})