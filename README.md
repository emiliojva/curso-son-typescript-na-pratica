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


### snnipets: 
- compilar e executar: tsc --outDir ./out 04-tipos-basicos.ts && node out\04-tipos-basicos.js



---

## AULA 03 - Assim não precisa usar o TypeScript

- HTML SOLTO PUXANDO JS EXPORTADO PELO TSC
- CAPTURA DE EVENTOS CLICK PARA LINKAR OS BLOCOS(DIVS): LIST E FORM


--- 


## FERRAMENTAS

### lite-server
- instalacao: npm i -g live-server
- uso no cli:
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