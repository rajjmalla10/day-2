const inputBox = document.getElementById("input-box");
const listBox = document.getElementById("list");

const addTask = ()=>{
    if(inputBox.value==''){
        alert("write something on it");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }
    inputBox.value = "";
}


listBox.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
