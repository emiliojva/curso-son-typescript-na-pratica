/**
 * Arquivo de manipulacao DOM
 */
// HTMLDivElementDom boxForm
// const buttonForm = document.querySelector('#box-post-form>button[type=button]');
// const boxForm = document.getElementById('box-post-form');
//const boxList = document.getElementById('box-post-list');
//const buttonFormList = document.querySelector('#box-post-list>button[type=button]');
var BoxPostList = /** @class */ (function () {
    function BoxPostList() {
        this.init();
    }
    BoxPostList.prototype.init = function () {
        var _this = this;
        /**
         * Ouvir evento de click do button 'novo'
         */
        BoxPostList.button.addEventListener('click', function () {
            // ocultar listagem
            _this.hiddenBox();
            // chamar box form
            BoxPostForm.box.removeAttribute('style');
        });
    };
    BoxPostList.prototype.hiddenBox = function () {
        // oculta listagem
        BoxPostList.box.style.display = 'none';
    };
    BoxPostList.prototype.showBox = function () {
        // mostra listagem
        BoxPostList.box.removeAttribute('style');
    };
    BoxPostList.boxTokenId = 'box-post-list';
    BoxPostList.buttonToken = 'box-post-list>button[type=button]';
    // Div Form 
    BoxPostList.box = document.getElementById(BoxPostList.boxTokenId); // assercao ou cast
    BoxPostList.button = document.querySelector("#" + BoxPostList.buttonToken); // Botao Listar meus posts
    return BoxPostList;
}());
var BoxPostForm = /** @class */ (function () {
    function BoxPostForm() {
        this.init();
    }
    BoxPostForm.prototype.init = function () {
        /**
         * Ouvir evento de click do button 'listar meus posts'
         */
        var _this = this;
        BoxPostForm.button.addEventListener('click', function () {
            _this.hiddenBox();
            // chamar box list
            BoxPostList.box.removeAttribute('style');
            // document.getElementById(BoxPostList.boxTokenId).removeAttribute('style');
        });
    };
    BoxPostForm.prototype.hiddenBox = function () {
        // oculta form
        BoxPostForm.box.style.display = 'none';
    };
    BoxPostForm.prototype.showBox = function () {
        // mostra form
        BoxPostForm.box.removeAttribute('style');
    };
    // private boxList: BoxPostList;
    BoxPostForm.boxTokenId = 'box-post-form';
    BoxPostForm.buttonToken = 'box-post-form>button[type=button]';
    BoxPostForm.box = document.getElementById(BoxPostForm.boxTokenId); // Div Form 
    BoxPostForm.button = document.querySelector("#" + BoxPostForm.buttonToken); // Botao Listar meus posts
    return BoxPostForm;
}());
new BoxPostForm();
new BoxPostList();
