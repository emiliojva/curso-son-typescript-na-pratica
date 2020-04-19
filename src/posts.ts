/**
 * Arquivo de manipulacao DOM 
 */

 // HTMLDivElementDom boxForm
const boxForm = document.getElementById('box-post-form');
const boxList = document.getElementById('box-post-list');
const buttonFormList = document.querySelector('#box-post-list>button[type=button]');
const buttonForm = document.querySelector('#box-post-form>button[type=button]');

/**
 * Ouvir evento de click do button 'listar meus posts'
 */
buttonForm.addEventListener('click' ,   () => {
    // oculta form
    boxForm.style.display = 'none';
    // mostra listagem
    boxList.removeAttribute('style');
});


/**
 * Ouvir evento de click do button 'novo'
 */
buttonFormList.addEventListener('click' ,   () => {
    // oculta listagem
    boxList.style.display = 'none';
    // mostra form
    boxForm.removeAttribute('style');
});
