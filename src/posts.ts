/**
 * Arquivo de manipulacao DOM 
 */

 // HTMLDivElementDom boxForm

 // const buttonForm = document.querySelector('#box-post-form>button[type=button]');
// const boxForm = document.getElementById('box-post-form');

//const boxList = document.getElementById('box-post-list');
//const buttonFormList = document.querySelector('#box-post-list>button[type=button]');


class BoxPostList {

    
    static boxTokenId:string = 'box-post-list';
    static buttonToken:string = 'box-post-list>button[type=button]';

    // Div Form 
    static box: HTMLDivElement = ( <HTMLDivElement>document.getElementById(BoxPostList.boxTokenId) ); // assercao ou cast
    static button: HTMLButtonElement = document.querySelector(`#${BoxPostList.buttonToken}`); // Botao Listar meus posts

    constructor()
    {
        this.init()
    }

    private init()
    {
        
        /**
         * Ouvir evento de click do button 'novo'
         */
        BoxPostList.button.addEventListener('click' ,   () => {

            // ocultar listagem
            this.hiddenBox();

            // chamar box form
            BoxPostForm.box.removeAttribute('style');

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

    constructor()
    {
        this.init();
    }

    private init()
    {
        
        /**
         * Ouvir evento de click do button 'listar meus posts'
         */
        
        BoxPostForm.button.addEventListener('click' ,   () => {
            
            this.hiddenBox();

            // chamar box list
            BoxPostList.box.removeAttribute('style');
            // document.getElementById(BoxPostList.boxTokenId).removeAttribute('style');
            

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

new BoxPostForm();
new BoxPostList();
