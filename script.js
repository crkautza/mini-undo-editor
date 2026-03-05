//Elements
let TextArea = document.getElementsByTagName('textarea')[0];
let AddBtn = document.getElementById('add');
let UndoBtn = document.getElementById('undo');
let RedoBtn = document.getElementById('redo');
let Input = document.getElementsByTagName('input')[0];
let InsertBtn = document.getElementById('insert');

//Arrays
let palavra = 'Palavra';
let states = [''];
let undo = [''];
let redo = [''];
let i = 0;
//let cut = [''];

//Event Listeners
TextArea.addEventListener('input', textArea);
AddBtn.addEventListener('click', addFunction);
UndoBtn.addEventListener('click', undoFunction);
RedoBtn.addEventListener('click', redoFunction);
InsertBtn.addEventListener('click', insertFunction);

//Functions
function addFunction(){
    TextArea.value += palavra;
    varPush();
}

function insertFunction() {
    if(Input.value){
    palavra = Input.value;
    addFunction();
    }
}

function undoFunction(){
    i++;
    if(TextArea.value){
    undo.pop();
    print();
    undo.forEach(elemento => {
        TextArea.value = elemento;
    });;
    //states.push(TextArea.value);
    }
}

function redoFunction() {
    if(i > 0){
        i--;
        redo.splice(0, undo.length);
        redo.forEach(elemento => {
        TextArea.value = elemento;
        });;
        //states.push(TextArea.value);
        undo.push(TextArea.value);
        redo = [''];
        states.forEach((elemento) => {
            redo.push(elemento);
        })
        print();
    }
}

function varPush(){
    states.push(TextArea.value);
    undo.push(TextArea.value);
    redo.push(TextArea.value);
}

function print(){
    console.log('------------');
    console.log('Undo:', undo);
    console.log('Histórico:', states);
    console.log('Redo', redo);
    //console.log('Cut', cut);
}

function textArea(){
    if (states.length >= 20 && undo.length >= 20) {
    states.splice(0, 17);
    undo.splice(0, 17);
    }
    varPush();
    print();
}