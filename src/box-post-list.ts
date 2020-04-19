import EventManager from "./event-manager";
import BoxPostForm from "./box-post-form";

export default class BoxPostList {

    
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