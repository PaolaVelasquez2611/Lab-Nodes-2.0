// selecccionar btn y añadir evento de click. 
// ejecutar la func crearPost
// seleccionar input, y obtener el value
// llamar la funcion createNote(inputValue)
// seleccionar el contenedor, crear nota, note.textConent = _.CamelCase(inputValue) y le hace append<child de la nota

import {rword} from 'rword';
console.log(rword);

const addPost = document.getElementById('addPost');
const input = document.getElementById('input');
const content = document.getElementById('content');
const select = document.getElementById('select');


addPost.addEventListener('click',createPost);

//function createPost(){
  //console.log(input.value)
    //const h4 = document.createElement('h4');
    //h4.textContent = input.value;
    //content.appendChild(h4);
    //return content }

const newPost = sortPost()

function sortPost(){
  if(select.value === "camelcase"){
    const _ = require('lodash/camelcase');
    const trans = _(input.value); 
    const h4 = document.createElement('h4');
    content.appendChild(h4);
    return content 
    h4.textContent = input.value;
    console.log('_');
    return _;
  }
}






//const trans = "camelCase"
//function crearNota(inputValue) {
//   _[trans](inputValue)
//}

//_[trans]()

//trans = "snakeCase"

//_.camelCase()
//_.snakeCase()
//_.snakeCase()
//_.snakeCase()

