let TextArea = document.getElementsByTagName('textarea')[0];
let AddButton = document.getElementById('add');
let UndoButton = document.getElementById('undo');
let RedoButton = document.getElementById('redo');

AddButton.addEventListener('click', () =>{
    TextArea.value += 'Palavra';
    console.log('Botão Add clicado!', TextArea.value);
});
UndoButton.addEventListener('click', () =>{
    console.log('Botão Undo clicado!');
});
RedoButton.addEventListener('click', () =>{
    console.log('Botão Redo clicado!');
});