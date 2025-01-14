// const toDoList = document.getElementById("toDoList")
// const inputText = document.getElementById("inputText")
// const chooseOne = document.getElementById("chooseOne")
// let arrText =[]
// // const txx = document.querySelectorAll(".tx");
// // txx.forEach((tx) => {
// //     tx.addEventListener("click", function () {
// //         chooseOne.classList.toggle("hidden"); // إظهار/إخفاء chooseOne
// //     });
// // });
// const addToDo = ()=>{
//     let index =  inputText.value
//     inputText.addEventListener("keyup",(e)=>{
//          if (e.key == "Enter") {
//              arrText.push(index)
//              display()
//              clearInput()
//          }
//          })
//     arrText.push(index)
//     display()
//     clearInput()
// }

// const display = ()=>{
//     let textBox = ""
//     for (let i = 0; i < arrText.length; i++) {
//         textBox +=`
//       <li class="styleOfList"><span><input type="checkbox" class="m-2">${arrText[i]}</span><span class="tx">...</span></li>
//          <div id="chooseOne" class="chooseOne">
//          <ul>
//             <li class="btn_del">Delete</li>
//             <li class="btn_update">Update</li>
//             </ul>
//         </div>
//       `
//     }
//     toDoList.innerHTML = textBox



// }
// const clearInput = ()=>{
// inputText.value = ""
// }
// const delAll = ()=>{
//   arrText =[]
//   display()
// }
///////////

{/* <div id="${i}" id="chooseOne" class="chooseOne">
<ul>
   <li class="btn_del">Delete</li>
   <li class="btn_update">Update</li>
   </ul>
</div> */}

const toDoList = document.getElementById("toDoList")
const inputText = document.getElementById("inputText")
const chooseOne = document.getElementById("chooseOne")
let mode = "Just Add",rowEdit;
// const setti = document.getElementsByid("setting")
let arrOfText = []
if (localStorage.getItem("todoList") == null) {
    arrOfText =[]
}else{
    arrOfText = JSON.parse(localStorage.getItem("todoList"));
    display()
}
const addToDo = ()=>{
    let valuue = inputText.value
    testValue(valuue)
            localStorage.setItem("todoList",JSON.stringify(arrOfText))
            display()
            clearInput()
            mode= "Just Add"
            document.querySelector(".add").innerHTML = mode
}
const testValue = (val)=>{
    if (mode === "Just Add") {
        if (inputText.value =="") {
            alert("please write in input")
        }
        else{
            arrOfText.push(val)
        }
    } else{
        arrOfText[rowEdit] = val
    }
}

function display(){
    let table = ""
    for (let i = 0; i < arrOfText.length; i++) {
        table +=`
         <li id="task"><span class="styleOfList"><span><input id="boxInput" type="checkbox" class="m-2 boxInput">${arrOfText[i]}</span>
         <span id="setting" class="edit">
                <i onclick="updatetRow(${i})" class="fa-regular fa-pen-to-square updet_row icons_edit"></i>
                <i onclick="deleteRow(${i})" class="fa-solid fa-eraser delete_row icons_edit"></i>
                ...
                     </span>
                    </li>
         </span>
                    `
        
    }
    toDoList.innerHTML = table

    
    const checkboxes = document.querySelectorAll("#boxInput");
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("click", (e) => {
            const parentSpan = checkbox.closest(".styleOfList");
            if (parentSpan) {
                parentSpan.classList.toggle("checked");
            }
        });
    });
    // toDoList.addEventListener("click",(e)=>{
    //     if (e.target.tagName == "SPAN") {
    //         e.target.classList.toggle("checked")
    //     }
    //     })
}

const clearInput = ()=>{
    inputText.value = ""
}
const deleteAll =()=>{
    arrOfText = []
    localStorage.setItem("todoList",JSON.stringify(arrOfText))
    display()
}
const deleteRow = (i)=>{
    arrOfText.splice(i,1)
    localStorage.setItem("todoList",JSON.stringify(arrOfText))
    display()
}

const updatetRow = (i)=>{
inputText.value = arrOfText[i]
rowEdit=i;
mode = "update"
document.querySelector(".add").innerHTML= mode
}





// ////////////////////
// let stringType = document.getElementsByClassName("auto-type")

// let typed = new Typed(stringType,
//     {
//         Strings: ["now..","list.."],
//         typeSpeed:150,
//         backSpeed:150,
//         loop:true
//     }
// )