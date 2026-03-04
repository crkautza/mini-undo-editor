//Elements
let TextArea = document.getElementsByTagName('textarea')[0];
let AddButton = document.getElementById('add');
let UndoButton = document.getElementById('undo');

//Arrays
let historico = [''];
let undo = [''];

//Event Listeners
TextArea.addEventListener('input', textArea);
AddButton.addEventListener('click', addFunction);
UndoButton.addEventListener('click', undoFunction);

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
}

function textArea(){
    if (historico.length >= 20 && undo.length >= 20) {
    historico.splice(0, 17);
    undo.splice(0, 17);
    }
    varPush();
    print();
}