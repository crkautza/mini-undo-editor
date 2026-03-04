//Elements
let TextArea = document.getElementsByTagName('textarea')[0];
let AddButton = document.getElementById('add');
let UndoButton = document.getElementById('undo');
//let RedoButton = document.getElementById('redo');

//Arrays
let historico = [''];
let undo = [''];
//let redo = [''];
//let cut = [''];

//Event Listeners
TextArea.addEventListener('input', textArea);
AddButton.addEventListener('click', addFunction);
UndoButton.addEventListener('click', undoFunction);
//RedoButton.addEventListener('click', redoFunction);

//Functions
function addFunction(){
    TextArea.value += 'Palavra';
    varPush();
}

function undoFunction(){
    if(TextArea.value){
    undo.pop();
    print();
    undo.forEach(elemento => {
        TextArea.value = elemento;
    });;
    historico.push(TextArea.value);
    }
    //redo.push(TextArea.value);
}

function varPush(){
    historico.push(TextArea.value);
    undo.push(TextArea.value);
    //redo.push(TextArea.value);
}

function print(){
    console.log('------------');
    console.log('Undo:', undo);
    console.log('Histórico:', historico);
    //console.log('Redo', redo);
    //console.log('Cut', cut);
}

function textArea(){
    if (historico.length >= 20 && undo.length >= 20) {
    historico.splice(0, 17);
    undo.splice(0, 17);
    }
    varPush();
    print();
}