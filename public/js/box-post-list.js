define(["require", "exports", "./box-post-form"], function (require, exports, box_post_form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                // executar evento ja registrado
                _this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST);
                // chamar box form
                //BoxPostForm.box.removeAttribute('style');
            });
            // Ouvinte - Quando formulario for ocultado
            this.eventManager.addListener(box_post_form_1.default.EVENT_CLICK_HIDDEN_BOX_FORM, function () {
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
        BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST = 'box-post-list-click-hidden';
        // Div Form 
        BoxPostList.box = document.getElementById(BoxPostList.boxTokenId); // assercao ou cast
        BoxPostList.button = document.querySelector("#" + BoxPostList.buttonToken); // Botao Listar meus posts
        return BoxPostList;
    }());
    exports.default = BoxPostList;
});
//# sourceMappingURL=box-post-list.js.map