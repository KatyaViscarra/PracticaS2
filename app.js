

//ocultar o mostrar los divs que contiene la lista
const hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list')

//constantes para agregar elementos a la lista
const addItemInput = document.querySelector('#addItem'); //input
const addItemButton = document.querySelector('button#addItemButton');//Button

//eliminar el ultimo item
const removeItemButton = document.querySelector('button#removeItemButton');
//eliminar el item seleccionado
const removeItem = document.querySelector('button#removeItem')


//mostrar y ocultar lista
hide.addEventListener('click', () => {
    if(listDiv.style.display =='none'){
        listDiv.style.display = 'block';
        hide.textContent = '<<';
    } else {
        listDiv.style.display = 'none';
        hide.textContent = '>>'
    }
});


//agregar elementos a la lista
addItemButton.addEventListener('click',()=>{
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    list.appendChild(li); //agregar elemento a la lista
    addItemInput.value="";

});

//eliminar ultimo elemento de la lista
removeItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    list.removeChild(li)
});

function findIndex(elem){
    var i, len = items.lenght;
    for(i=0; i <len; i++){
        if(items[i] === elem){
            return i;
        }
    }
}

//obtener index of element in list
var list = document.getElementById("listItems"),
    items = list.getElementsByTagName("li");

list.onclick = function(e){
    var event = e || window.event,
    src = event.target || event.srcElement;
    var myIndex = findIndex(src);
    //alert(myIndex);
    index = myIndex;
    console.log(myIndex);

    //cambiar color del elemento seleccionado
    if(event.target.tagName === 'LI'){
        list.querySelectorAll('li').forEach(el => el .classList.remove('alert', 'alert-success'));
        items[index].classList.add('alert', 'alert success');
    }

}


//eliminar elemento seleccionado
removeItem.addEventListener('click',() => {
    let showDiv = document.getElementById('list');
    let divAlert = document.createElement('div');
    let label = document.createElement('label');
    label.innerHTML = 'Se elimino el elemento ' + index;
    divAlert.classList.add('alert', 'alert-danger'); //clase de la alerta

    items[index].parentNode.removeChild(items[index]);
    divAlert.append(label);
    showDiv.appendChild(divAlert);
});
