/**
 * Arquivo de manipulacao DOM 
 */

 // HTMLDivElementDom boxForm

 // const buttonForm = document.querySelector('#box-post-form>button[type=button]');
// const boxForm = document.getElementById('box-post-form');

//const boxList = document.getElementById('box-post-list');
//const buttonFormList = document.querySelector('#box-post-list>button[type=button]');


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
        
        for(let callable of this.listeners[eventName]){
            callable();
        }
    }

}

class BoxPostList {

    
    static boxTokenId:string = 'box-post-list';
    static buttonToken:string = 'box-post-list>button[type=button]';

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

            // chamar box form
            BoxPostForm.box.removeAttribute('style');

        });


        // Ouvinte - Quando formulario for ocultado
        this.eventManager.addListener('box-post-form-click-hidden',()=>{
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
            this.eventManager.runEvent('box-post-form-click-hidden');

        });

        // Ouvinte - Quando listagem for ocultada
        this.eventManager.addListener('box-post-list-click-hidden',()=>{
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

const eventManager = new EventManager();
new BoxPostForm(eventManager);
new BoxPostList(eventManager);
