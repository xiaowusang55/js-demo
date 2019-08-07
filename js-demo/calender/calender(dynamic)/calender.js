let data = [
    {
        "day": 7,
        "ChinaT": "七夕节"
    },
    {
        "day": 7,
        "ChinaT": "七夕节"
    }
]

console.log(data);
let newDiv = document.createElement("div");
let newRow = document.createElement("div");
let newAdd = document.createElement("div");
let content = document.querySelector(".content");
// let newRow = document.createElement("div");
// let newWrap = document.createElement("div");
// let newSpan = document.createElement("span");
// let newP1 = document.createElement("p");
// let newP2 = document.createElement("p")


// newDiv.setAttribute("class", "ct-day centerbox");
// newRow.setAttribute("class", "row");
// newSpan.innerText = 7;
// newP1.innerText = "七夕节";
newDiv.setAttribute("class", "ct-day centerbox");
newRow.setAttribute("class", "row");




data.forEach((el, index) => {
    newAdd.innerHTML = `
    <span>${el.day}</span>
    <p>${el.ChinaT}</p>
    <p></p>                                                 
    `;
    console.log(el, index);
   
    newRow.appendChild(newAdd);
    console.log(newAdd);
});

newDiv.appendChild(newRow);
content.appendChild(newDiv);
