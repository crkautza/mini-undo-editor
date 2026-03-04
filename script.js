//Elements
let TextArea = document.getElementsByTagName('textarea')[0];
let AddButton = document.getElementById('add');
let UndoButton = document.getElementById('undo');
let RedoButton = document.getElementById('redo');

//Arrays
let history = [''];
let undo = [''];
let redo = [''];
//let cut = [''];

//Event Listeners
TextArea.addEventListener('input', textArea);
AddButton.addEventListener('click', addFunction);
UndoButton.addEventListener('click', undoFunction);
RedoButton.addEventListener('click', redoFunction);

//Functions
function addFunction(){
    TextArea.value += 'Palavra';
    varPush();
}

function undoFunction(){
    undo.pop();
    print();
    undo.forEach(elemento => {
        TextArea.value = elemento;
    });;
    history.push(TextArea.value);
    redo.push(TextArea.value);
}

function varPush(){
    history.push(TextArea.value);
    undo.push(TextArea.value);
    redo.push(TextArea.value);
}

function print(){
    console.log('------------');
    console.log('Undo:', undo);
    console.log('History:', history);
    console.log('Redo', redo);
    //console.log('Cut', cut);
}

function textArea(){
    varPush();
    print();
}