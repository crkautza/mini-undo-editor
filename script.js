//Elements
let TextArea = document.getElementsByTagName('textarea')[0];
let AddBtn = document.getElementById('add');
let UndoBtn = document.getElementById('undo');
let RedoBtn = document.getElementById('redo');
let Input = document.getElementsByTagName('input')[0];
let InsertBtn = document.getElementById('insert');

//Arrays
let word = 'Palavra';
let undoStack = [];
let redoStack = [];

//Event Listeners
AddBtn.addEventListener('click', addFunction);
UndoBtn.addEventListener('click', undoFunction);
RedoBtn.addEventListener('click', redoFunction);
InsertBtn.addEventListener('click', insertFunction);

//Functions
function addFunction(){
    undoStack.push(TextArea.value);
    redoStack = [];
    TextArea.value += word;
    updateBtn();
}

function insertFunction() {
    if(Input.value){
    word = Input.value;
    addFunction();
    }
}

function undoFunction(){
    if(undoStack.length > 0){
    redoStack.push(TextArea.value);
    const lastState = undoStack.pop();
    TextArea.value = lastState;
    }
    updateBtn();
}

function redoFunction() {
    if(redoStack.length > 0 ){
        undoStack.push(TextArea.value);
        const lastRedo = redoStack.pop();
        TextArea.value = lastRedo;
    }
    updateBtn();
}

function print(){
    console.log('------------');
    console.log('Undo:', undoStack);
    console.log('Redo', redoStack);
}

function updateBtn() {
    if(redoStack.length == 0){
        RedoBtn.disabled = true;
    }else{
        RedoBtn.disabled = false;
    }
    if(undoStack.length == 0){
        UndoBtn.disabled = true;
    }else{
        UndoBtn.disabled = false;
    }
}

updateBtn();