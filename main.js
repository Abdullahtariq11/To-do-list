let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField =  document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var paragrph = document.createElement('p');
    paragrph.classList.add('paragraph-styling')
    paragrph.innerText=inputField.value;
    toDoContainer.appendChild(paragrph);
    inputField.value="";
    paragrph.addEventListener('click',function(){
        paragrph.style.textDecoration="line-through";
    })
    paragrph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragrph);
    })
})

