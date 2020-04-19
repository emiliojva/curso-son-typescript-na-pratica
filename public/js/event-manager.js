define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Conceito de orientação a eventos(listeners)
     */
    var EventManager = /** @class */ (function () {
        function EventManager() {
            /**
             * Indexable Types
             * - Representacao shortHand de um objeto específico(iteravel), com indice associativo(eventName:string) definido.
             * Neste indice comporta SOMENTE, um array com itens do tipo ListernerInterface
             *
             * Qualquer outra representacao de objeto gera um erro
             *
             */
            this.listenersShortHand = {}; // representacao shortHand de um Indexable Types
            this.listeners = {};
        }
        /**
         * Empilha funcoes/procedures para cada ouvinte
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
        /**
         * Executa evento nomeado
         * @param eventName
         */
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
    exports.default = EventManager;
});
//# sourceMappingURL=event-manager.js.map