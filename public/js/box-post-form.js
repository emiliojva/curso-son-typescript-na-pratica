define(["require", "exports", "./box-post-list"], function (require, exports, box_post_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                _this.eventManager.runEvent(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM);
            });
            // Ouvinte - Quando listagem for ocultada
            this.eventManager.addListener(box_post_list_1.default.EVENT_CLICK_HIDDEN_BOX_LIST, function () {
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
        BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM = 'box-post-form-click-hidden';
        BoxPostForm.box = document.getElementById(BoxPostForm.boxTokenId); // Div Form 
        BoxPostForm.button = document.querySelector("#" + BoxPostForm.buttonToken); // Botao Listar meus posts
        return BoxPostForm;
    }());
    exports.default = BoxPostForm;
});
//# sourceMappingURL=box-post-form.js.map