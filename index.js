// selecccionar btn y añadir evento de click. 
// ejecutar la func crearPost
// seleccionar input, y obtener el value
// llamar la funcion createNote(inputValue)
// seleccionar el contenedor, crear nota, note.textConent = _.CamelCase(inputValue) y le hace append<child de la nota



const addPost = document.getElementById('addPost');
const input = document.getElementById('input');
const content = document.getElementById('content');
const select = document.getElementById('select');


addPost.addEventListener('click',sortPost);

//function createPost(){
  //console.log(input.value)
    //const h4 = document.createElement('h4');
    //h4.textContent = input.value;
    //content.appendChild(h4);
    //return content }


const _ = require('lodash');


function sortPost(){
  if(select.value === "camelCase"){
    const trans =_.camelCase(input.value); 
    const h4 = document.createElement('h4');
    h4.innerHTML = trans;
    content.appendChild(h4);
    return content
    
  }
  else if (select.value === "snakeCase"){
    const trans =_.snakeCase(input.value); 
    const h4 = document.createElement('h4');
    h4.innerHTML = trans;
    content.appendChild(h4);
    return content
  }
else if (select.value === "capitalize"){
  const trans =_.capitalize(input.value); 
  const h4 = document.createElement('h4');
  h4.innerHTML = trans;
  content.appendChild(h4);
  return content
  
}}

module.exports = {
  sortPost}

  
let transs = select.value

function creardos (transs){
  const h4 = document.createElement('h4');
  h4.innerHTML = _[transs](inputValue);
  content.appendChild(h4);
  return content
  
}



const Notes = require('./sortPost.js')
Notes.sortPost ()


import {rword} from 'rword';
console.log(rword);






//const trans = "camelCase"
//function crearNota(inputValue) {
//   _[trans](inputValue)
//}

//_[trans]()

//trans = "snakeCase"



