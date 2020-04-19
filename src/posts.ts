/**
 * Arquivo de manipulacao DOM 
 */

 // HTMLDivElementDom boxForm

 // const buttonForm = document.querySelector('#box-post-form>button[type=button]');
// const boxForm = document.getElementById('box-post-form');

//const boxList = document.getElementById('box-post-list');
//const buttonFormList = document.querySelector('#box-post-list>button[type=button]');

interface ListenerInterface {
    ():void;
}

interface Listeners {
    [eventName: string]: Array<ListenerInterface> 
}

/**
 * Conceito de orientação a eventos(listeners)
 */
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

    /**
     * Empilha funcoes/procedures para cada ouvinte
     * @param eventName 
     * @param callable 
     */
    addListener(eventName: string, callable: ListenerInterface )
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

    /**
     * Executa evento nomeado
     * @param eventName 
     */
    runEvent(eventName: string)
    {
        // console.log(this.listeners[eventName])
        if( !(this.listeners[eventName] instanceof Array) ){
            this.listeners[eventName] = [];
        }
        
        for(let callable of this.listeners[eventName]){
            callable();
        }
    }

}

class BoxPostList {

    
    static boxTokenId:string = 'box-post-list';
    static buttonToken:string = 'box-post-list>button[type=button]';
    static EVENT_CLICK_HIDDEN_BOX_LIST = 'box-post-list-click-hidden';

    // Div Form 
    static box: HTMLDivElement = ( <HTMLDivElement>document.getElementById(BoxPostList.boxTokenId) ); // assercao ou cast
    static button: HTMLButtonElement = document.querySelector(`#${BoxPostList.buttonToken}`); // Botao Listar meus posts

    constructor(private eventManager: EventManager)
    {
        this.init()
    }

    private init()
    {
        
        /**
         * Ouvinte do evento de click do button 'novo'
         */
        BoxPostList.button.addEventListener('click' ,   () => {

            // ocultar listagem
            this.hiddenBox();

            // executar evento ja registrado
            this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST);

            // chamar box form
            //BoxPostForm.box.removeAttribute('style');

        });


        // Ouvinte - Quando formulario for ocultado
        this.eventManager.addListener(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM,()=>{
            // mostro a listagem
            this.showBox();
        });

    }

    hiddenBox(): void 
    {
        // oculta listagem
        BoxPostList.box.style.display = 'none';    
    }

    showBox(): void
    {
        // mostra listagem
        BoxPostList.box.removeAttribute('style');    
    }

}

class BoxPostForm {

    // private boxList: BoxPostList;
    static boxTokenId:string = 'box-post-form';
    static buttonToken:string = 'box-post-form>button[type=button]';
    static EVENT_CLICK_HIDDEN_BOX_FORM = 'box-post-form-click-hidden';

    static box: HTMLDivElement = (<HTMLDivElement> document.getElementById(BoxPostForm.boxTokenId) );  // Div Form 
    static button: HTMLButtonElement = document.querySelector(`#${BoxPostForm.buttonToken}`); // Botao Listar meus posts

    constructor(private eventManager: EventManager)
    {
        this.init();
    }

    private init()
    {
        
        /**
         * Ouvinte evento de click do button 'listar meus posts'
         */
        BoxPostForm.button.addEventListener('click' ,   () => {
            
            // ocultar o formulario
            this.hiddenBox();

            // disparar evento quando o formulario ocultar - exibir box list
            this.eventManager.runEvent(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM);

        });

        // Ouvinte - Quando listagem for ocultada
        this.eventManager.addListener(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST,()=>{
            // mostro formulario
            this.showBox();
        });

    }

    hiddenBox(): void 
    {
        // oculta form
        BoxPostForm.box.style.display = 'none';   
    }

    showBox(): void
    {
        // mostra form
        BoxPostForm.box.removeAttribute('style');
    }

}

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


