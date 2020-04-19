import EventManager from "./event-manager";
import BoxPostList from "./box-post-list";

export default class BoxPostForm {

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