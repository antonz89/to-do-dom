let form = document.querySelector("#todo");
let input = document.querySelector("#input");
let addButton = document.querySelector("#add");
let todoList = document.querySelector("#list");

let removeSelected = document.querySelector("#removeSelected")
let removeButton = document.querySelector("#removeAll");
let allItems = document.querySelectorAll("#list li");



form.addEventListener("submit",function(event){
    event.preventDefault();
    
    let items = document.createElement("li");
    items.innerText = input.value;
    todoList.appendChild(items);

    items.addEventListener("click",function(){
        if(items.style.textDecoration != "line-through"){
            items.style.textDecoration = "line-through";
        }else {
            items.style.textDecoration = "";
        }
    })

    input.value = "";
    allItems = document.querySelectorAll("#list li");

    
  

})

removeButton.addEventListener("click", function(){
    for ( let i = 0; i<allItems.length; i++){
        allItems[i].remove();
    }
    
    
})

removeSelected.addEventListener("click", function(){
    let count = 0;
    
    for ( let i = 0; i<allItems.length; i++){
        if(allItems[i].style.textDecoration === "line-through"){
            allItems[i].remove();
            count++;
        }

    }
    allItems = document.querySelectorAll("#list li");
    alert(`You successfully removed ${count} items `);
    count = 0;

    
})








    

    
    

   





