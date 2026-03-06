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

getState();

//Event Listeners
AddBtn.addEventListener('click', addFunction);
UndoBtn.addEventListener('click', undoFunction);
document.addEventListener('keydown', eventKey);
RedoBtn.addEventListener('click', redoFunction);
InsertBtn.addEventListener('click', insertFunction);

//Functions
function addFunction(){
    undoStack.push(TextArea.value);
    redoStack = [];
    TextArea.value += word;
    setState();
    updateBtn();
}

function insertFunction() {
    if(Input.value){
        word = Input.value;
        addFunction();
        setState();
    }
}

function undoFunction(){
    if(undoStack.length > 0){
        redoStack.push(TextArea.value);
        const lastState = undoStack.pop();
        TextArea.value = lastState;
        setState();
    }
    updateBtn();
}

function redoFunction() {
    if(redoStack.length > 0 ){
        undoStack.push(TextArea.value);
        const lastRedo = redoStack.pop();
        TextArea.value = lastRedo;
        setState();
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

function eventKey(event){
    if(event.ctrlKey && event.key == 'z' && undoStack.length > 0){
        event.preventDefault();
        undoFunction();
    }
    if(event.ctrlKey && event.key == 'y' && redoStack.length > 0){
        event.preventDefault();
        redoFunction();
    }
}

function setState() {
    localStorage.setItem('word', word);
    localStorage.setItem('undoStack', JSON.stringify(undoStack));
    localStorage.setItem('redoStack', JSON.stringify(redoStack));
    localStorage.setItem('text', JSON.stringify(TextArea.value));
}

function getState() {
    let getWord = localStorage.getItem('word');
    let getUndoStack = localStorage.getItem('undoStack');
    let getRedoStack = localStorage.getItem('redoStack');
    let getText = localStorage.getItem('text');
    if(getWord){word = getWord}
    if(getUndoStack){undoStack = JSON.parse(getUndoStack)}
    if(getRedoStack){redoStack = JSON.parse(getRedoStack)}
    if(getText){TextArea.value = JSON.parse(getText)}
}

updateBtn();