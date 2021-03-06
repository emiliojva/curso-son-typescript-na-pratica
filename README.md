# SON - TYPESCRIPT NA PRÁTICA

Neste curso ensinaremos como aplicar, na prática, o TypeScript em aplicações WEB, sites e etc. 
Além disso, veremos dicas e boas práticas de como resolver problemas cotidianos com o TypeScript 
e a estruturação desta tecnologia dentro de projetos WEB.

---

## AULA 01 - Introdução

- CURSO https://www.schoolofnet.com/curso/frontend/typescript/typescript-na-pratica/
- SITE OFICIAL TYPESCRIPT - https://www.typescriptlang.org/
- ACRONIMOS
    - LTS - long-term support, ou Suporte de longo prazo
- ESTRUTURA DE PASTA DO PROJETO 
    - /
    - /public/
        - posts.html
    - /src/
        - posts.ts

---

## AULA 02 - Montagem do ambiente de desenvolvimento
### Roteiro:
1. Instalar a versao LTS do nodejs e npm: https://nodejs.org/en/download/ 
2. Verificar versão:  " node -v "
3. Instalação global do typescript: " npm install -g typescript@2.6.1 "
4. Verificar versao do compilador typescript(tsc): " tsc -v "
5. Compilar com versao global: " tsc /src/posts.ts "
6. Criar arquivo .tsconfig.json na raiz do projeto -> A presença de um arquivo tsconfig.json em um diretório indica que o diretório é a raiz de um projeto TypeScript. O arquivo tsconfig.json especifica os arquivos raiz e as opções do compilador necessárias para compilar o projeto.
7. Configurar as opções(tsconfig.json) do compilador typescript:
    ```    
    /**
    * tsconfig.json
    * Chamando 'tsc' sem arquivos de entrada, 
    * nesse caso o compilador procura pelo arquivo tsconfig.json iniciando no diretório atual 
    * e continuando a cadeia de diretórios pai
    */
    {
        "compilerOptions": {
            "target"  : "ES5"       , // Especificação do ECMAScript utilizada
            "rootDir" : "src/"      , // Path raiz contendo arquivos .ts
            "outDir"  : "public/js" , // Path com saída transpilada do arquivo .js
        },
        "files": [
            "src/posts.ts"
        ]
    }
    ```
    - Referências
        - referencia        : https://www.typescriptlang.org/tsconfig
        - documentacao1     : https://www.typescriptlang.org/docs/handbook/compiler-options.html 
        - documentacao2     : https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
        - compilerOptions
            - --target 	string	"ES3"	Specify ECMAScript target version:

                    ► "ES3" (default).

                    ► "ES5".

                    ► "ES6"/"ES2015"

                    ► "ES2016"

                    ► "ES2017"
                    
                    ► "ES2018"

                    ► "ES2019"

                    ► "ES2020"

                    ► "ESNext"
            - --rootDir	string	(common root directory is computed from the list of input files)	Specifies the root directory of input files. Only use to control the output directory structure with --outDir.
            - --outDir	string	Se especificado, os arquivos .js (assim como os arquivos .d.ts, .js.map etc.) serão emitidos nesse diretório. A estrutura de diretórios dos arquivos de origem originais é preservada; consulte rootDir se a raiz calculada não for o que você pretendia.
        - files ['path/arquivo1.ts','path/arquivo2.ts'] : Especifica uma lista de arquivos que pode ser incluidas(import) no programa. Um error é lançando se qualquer arquivo desta lista nao for encontrado.

8. Testar saída da nova configuração do 'tsconfig.json': " tsc " // um novo js será gerado na pasta public/
9. Em desenvolvimento fica interessante usar o modo watch: tsc -w  // acompanha as modifições e transpila .js novamente.
10. Em produção: Transpile any files referenced in with the compiler settings from tsconfig.production.json
tsc --project tsconfig.production.json






---


## AULA 03 - Como configurar compilação do typescript
- criar tsconfig.json na raiz do projeto:
    ```
        {
            "compilerOptions": {
                "target"  : "ES5"       , // Especificação do ECMAScript utilizada
                "rootDir" : "src/"      , // Path raiz contendo arquivos .ts
                "outDir"  : "public/js" , // Path com saída transpilada do arquivo .js
            },
            "files": [
                "src/posts.ts"
            ]
        }
    ```

- Transpilar com watch:   
    ```
    ./node_modules/.bin/tsc -w 
    ```


## AULA 04 - Assim não precisa usar o TypeScript

- HTML SOLTO PUXANDO JS EXPORTADO PELO TSC
- CAPTURA DE EVENTOS CLICK PARA LINKAR OS BLOCOS(DIVS): LIST E FORM
- REPETIÇÃO DE CAPTURA DE ELEMENTOS DOM ESPALHADOS
- DEIXAR DE USAR VARIAVEIS, E REPETIR NOMES PELO CODIGO
- NAO USAR TOKENS 'elemento-x-to-y'


--- 


## AULA 05 - Modele Tipos de Classes
- Será que o metodo precisa ser chamado fora da classe? Senao use o modificador ```private```
    ```
    class BoxPostForm {
        private boxList: BoxPostList;
        static boxTokenId:string = 'box-post-form';
        ...
    }
    ```


## AULA 06 - Crie Variaveis
- Criação de variaveis ou propriedades estáticas para uso sem que precise instanciar a classe
    ```
    class BoxPostForm {

        // private boxList: BoxPostList;
        static boxTokenId:string = 'box-post-form';
        static buttonToken:string = 'box-post-form>button[type=button]';

        static box: HTMLDivElement = (<HTMLDivElement> document.getElementById(BoxPostForm.boxTokenId) );  // Div Form 
        static button: HTMLButtonElement = document.querySelector(`#${BoxPostForm.buttonToken}`); // Botao Listar meus posts

        constructor() {}
    }
    ```


## AULA 07 - SourceMaps
- Poder trabalhar com typescript no debug do browser.
- Informa para o browser os arquivos que precisam ser mapeados para visualização: ``` ./node_modules/.bin/tsc --sourceMap  ```
- Não funcionou com lite-serve


## AULA 08 - Desacoplamento com orientação a eventos
- Orientação a eventos
- Indepency - Construir comunicação entre duas classes sem que elas se conheçam
- Pattern de orientacao a eventos:

    ```
    /**
    * Conceito de orientação a eventos(listeners)
    */
    class EventManager {

        private listeners = {};

        /**
        * Adiciona funcoes/procedures para cada ouvinte
        * @param eventName 
        * @param callable 
        */
        addListener(eventName: string, callable: ()=>void )
        {
            /**
            * Representacao de um listener
            * Cada posicao associativa/token do objeto recebe um array de funcoes
            * this.listerners['cantar'] = [func1,func2,func3]; 
            * ex:  {
            *          'mostrar'=>function(){ 
            *              mostrarAlgo() 
            *          } 
            *      }
            */
            if( !(this.listeners[eventName] instanceof Array) ){
                this.listeners[eventName] = [];
            }
            
            this.listeners[eventName].push(callable);
        }

        runEvent(eventName: string)
        {
            // console.log(this.listeners[eventName])
            if( !(this.listeners[eventName] instanceof Array) ){
                this.listeners[eventName] = [];
            }
            
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
            for(let callable of this.listeners[eventName]){
                callable();
            }
        }

    }

    
    ```

- Declaração para chamar dentro de classes distintas
    
    Na classe que ocorre o evento adiciona o ouvinte
    ```
        // Ouvinte - Quando formulario for ocultado
            this.eventManager.addListener('box-post-form-click-hidden',()=>{
                // mostro a listagem
                this.showBox();
            });
    ```
    
    
    Na classe que quero disparar o evento criado acima
    ```
        // disparar evento quando o formulario ocultar - exibir box list
            this.eventManager.runEvent('box-post-form-click-hidden');
    ```



## AULA 09 - Declare e use tipos 
- Referencia : https://www.typescriptlang.org/docs/handbook/interfaces.html
- Criação de interfaces como tipos para EventManager.
- Criando consistencia e segurança de código com interfaces Listerners e ListenerInterface
- Uso do padrão Indexable Types, ex: { [indice:string]: Array<InterfaceAny> }
    ```
    interface ListenerInterface {
        ():void;
    }

    interface Listeners {
        [eventName: string]: Array<ListenerInterface> 
    }

    class EventManager {
        
        /**
        * Indexable Types
        * - Representacao shortHand de um objeto específico(iteravel), com indice associativo(eventName:string) definido.
        * Neste indice comporta SOMENTE, um array com itens do tipo ListernerInterface
        * 
        * Qualquer outra representacao de objeto gera um erro
        * 
        */
        private listenersShortHand: { [eventName: string]: Array<ListenerInterface> } = {}; // representacao shortHand de um Indexable Types
        private listeners: Listeners = {};

        ...
    }

    ```
- Criar variaveis para guardar os tokens do eventos
    ```
    class BoxPostList {
        static boxTokenId:string = 'box-post-list';
        static buttonToken:string = 'box-post-list>button[type=button]';
        static EVENT_CLICK_HIDDEN_BOX_LIST = 'box-post-list-click-hidden';

        constructor(private eventManager: EventManager){

            // executar evento ja registrado
            this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST);

        }
    }

    
    ```



## AULA 10 - Organização dos scripts em conceitos de páginas
- Controllers - Separação do arranque de um sistema dentro de uma classe responsavel

    ```
    /**
    * Organização dos scripts em conceitos de páginas
    */
    class PostsPage {
        
        constructor(private eventManager: EventManager)
        {
            this.init();
        }

        private init()
        {
            new BoxPostForm(this.eventManager);
            new BoxPostList(this.eventManager);
        }

    }

    new PostsPage( new EventManager() );
    ```



## AULA 11 - Organização de módulos
- Sistema de Carregamento de Módulos
- Utilização do 'AMD' - Asynchronous module definition - https://en.wikipedia.org/wiki/Asynchronous_module_definition
- Melhoria de Performe e Reuso de código, tal como desacomplamento do sistema.
- Módulos (https://www.typescriptlang.org/docs/handbook/modules.html) são importados ou exportados pelas palavras reservadas 'export' ou 'import'.

- Passos para implementação completa do sistema de módulos:
    1. Nomeação Kebeb para arquivos separados como módulo. ex: 
    'event-manager.ts'
    2. Refatorar todo typeScript para exportar e importar classes dependentes. 
        ```
        export default EventManager {};
        ``` 
        ou 
        ```
        import  EventManager from './src/event-manager';
        ```
    3. Se for uma uníca classe do módulo a ser exportada usa-se ```export default className```;
    4. Resolver erro gerado por falta da lib require e falha do modulo 'exports not defined'. Por default o ```tsconfig.json``` define o ```CommonJS``` como gerenciandor de módulos, deve-se alterar para ```AMD``` :
        ```
        /** documentacao: https://www.typescriptlang.org/docs/handbook/compiler-options.html */
        {
            "compilerOptions": {
                "target"    : "ES5"       , // Especificação do ECMAScript utilizada
                "module"    : "AMD"       , // default é CommonJS
                "rootDir"   : "src"       , // Path raiz contendo arquivos .ts
                "outDir"    : "public/js" , // Path com saída transpilada do arquivo .js
                "sourceMap" : true
            },
            "files": [
                "src/posts.ts"
            ]
        }

        ```
    5. A compilação do código agora usará o módulo ```define``` para carregamento por ordem do array. E precisará do módulo/lib ```requireJS```

    6. Utilizando CDN cdnjs : https://cdnjs.com/libraries/require.js

   



## AULA 12 - instalação e uso do requireJS

1. Instalação e uso do requireJS(requirejs.org):
2. Colocar script no topo do carregamento da tag script ou antes das classes typescript do projeto
    ```
    <!-- Carregamento no módulo requireJS -->
    <script data-main="app" src="lib/require.min.js"></script>
    ```
    - data-main informa para carregar o arquivo/modulo post apos leitura completa da lib requireJS (evita erro de pilha de carregamento)
    - Este bloco é customizado para olhar para pasta lib e usar ```requirejs.config()```
3. Gerar um caminho path chamado ```app``` para olhar para o caminho ```/js/posts.js```
4. Precisa gerar o script de arranque do ```requireJS```, no arquivo app.js, na raiz:
    ```
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
    
    ```
- É necessário usar em modo servidor de prod. simule com lite-serve



## FERRAMENTAS

### lite-server
- instalacao: ```npm i -g live-server```
- configuração: ```Criar um arquivo bs-config.json``` e incluir: 
    ```
    {
        "port": 8000,
        "files": ["./public/**/*.{html,htm,css,js}"],
        "server": { "baseDir": "./public" }
    }
    ```
- usando como dev --save-dev no cli >   ```./node_modules/.bin/live-server``` na raiz (onde encontra-se o arquivo bs-config.json)
- descricao : O servidor de nó de desenvolvimento leve que serve um aplicativo da Web, abre-o no navegador, atualiza quando o html ou o javascript são alterados, injeta alterações de CSS usando soquetes e possui uma página de fallback quando uma rota não é encontrada.
- referencia: https://www.npmjs.com/package/lite-server

### live-server
- instalacao: npm install -g live-server
- uso no cli: c:\path-project\> live-server public\
- descrição :É um pequeno servidor de desenvolvimento com capacidade de recarga ao vivo. Use-o para carregar seus arquivos HTML / JavaScript / CSS, mas não para implantar o site final.
    - Há duas razões para usar isso:
    - As solicitações AJAX não funcionam com o protocolo file: // devido a restrições de segurança, ou seja, você precisa de um servidor se o site buscar conteúdo por meio de JavaScript.
    - O recarregamento automático da página após alterações nos arquivos pode acelerar o desenvolvimento.
    - Você não precisa instalar nenhum plug-in de navegador ou adicionar manualmente trechos de código às suas páginas para que a funcionalidade de recarregamento funcione, consulte a seção "Como funciona" abaixo para obter mais informações. Se você não deseja / precisa da atualização ao vivo, provavelmente deve usar algo ainda mais simples, como o seguinte linux baseado em Python:

    ```
    python -m SimpleHTTPServer
    ```
- referencia: https://www.npmjs.com/package/live-server