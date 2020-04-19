/**
 * Arquivo de manipulacao DOM
 */
// HTMLDivElementDom boxForm
var boxForm = document.getElementById('box-post-form');
var boxList = document.getElementById('box-post-list');
var buttonFormList = document.querySelector('#box-post-list>button[type=button]');
var buttonForm = document.querySelector('#box-post-form>button[type=button]');
/**
 * Ouvir evento de click do button 'listar meus posts'
 */
buttonForm.addEventListener('click', function () {
    // oculta form
    boxForm.style.display = 'none';
    // mostra listagem
    boxList.removeAttribute('style');
});
/**
 * Ouvir evento de click do button 'novo'
 */
buttonFormList.addEventListener('click', function () {
    // oculta listagem
    boxList.style.display = 'none';
    // mostra form
    boxForm.removeAttribute('style');
});
