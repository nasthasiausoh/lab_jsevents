button = document.getElementById("enter");
console.log("button : ", button);


let list = document.getElementById("list");
let new_todo;
let btn; 
button.addEventListener('click', () => {
    let listItem1 = document.createElement("li");
    new_todo = document.getElementById("new-todo").value;
    listItem1.innerText = new_todo;
    list.appendChild(listItem1);
    btn = document.createElement("button");
    listItem1.appendChild(btn);
    btn.innerText = "Delete";
    btn.addEventListener('click', () => {
        deleteItem(listItem1)
    })
} )

function deleteItem(listItem){
    list.removeChild(listItem)
}

let showDate = document.getElementById("date");

showDate.addEventListener('click', () => {
    let paragraph = document.createElement("p")
    document.body.appendChild(paragraph);
    paragraph.innerText = Date();
})




