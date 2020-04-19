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
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.listeners = {};
    }
    /**
     * Adiciona funcoes/procedures para cada ouvinte
     * @param eventName
     * @param callable
     */
    EventManager.prototype.addListener = function (eventName, callable) {
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
        if (!(this.listeners[eventName] instanceof Array)) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callable);
    };
    EventManager.prototype.runEvent = function (eventName) {
        // console.log(this.listeners[eventName])
        if (!(this.listeners[eventName] instanceof Array)) {
            this.listeners[eventName] = [];
        }
        for (var _i = 0, _a = this.listeners[eventName]; _i < _a.length; _i++) {
            var callable = _a[_i];
            callable();
        }
    };
    return EventManager;
}());
var BoxPostList = /** @class */ (function () {
    function BoxPostList(eventManager) {
        this.eventManager = eventManager;
        this.init();
    }
    BoxPostList.prototype.init = function () {
        var _this = this;
        /**
         * Ouvinte do evento de click do button 'novo'
         */
        BoxPostList.button.addEventListener('click', function () {
            // ocultar listagem
            _this.hiddenBox();
            // chamar box form
            BoxPostForm.box.removeAttribute('style');
        });
        // Ouvinte - Quando formulario for ocultado
        this.eventManager.addListener('box-post-form-click-hidden', function () {
            // mostro a listagem
            _this.showBox();
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
    function BoxPostForm(eventManager) {
        this.eventManager = eventManager;
        this.init();
    }
    BoxPostForm.prototype.init = function () {
        var _this = this;
        /**
         * Ouvinte evento de click do button 'listar meus posts'
         */
        BoxPostForm.button.addEventListener('click', function () {
            // ocultar o formulario
            _this.hiddenBox();
            // disparar evento quando o formulario ocultar - exibir box list
            _this.eventManager.runEvent('box-post-form-click-hidden');
        });
        // Ouvinte - Quando listagem for ocultada
        this.eventManager.addListener('box-post-list-click-hidden', function () {
            // mostro formulario
            _this.showBox();
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
var eventManager = new EventManager();
new BoxPostForm(eventManager);
new BoxPostList(eventManager);
//# sourceMappingURL=posts.js.map