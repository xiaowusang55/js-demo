let data = [
    {
        "day": 29,
        "ChinaT": "廿七"
    },
    {
        "day": 30,
        "ChinaT": "廿八"
    },
    {
        "day": 31,
        "ChinaT": "廿九"
    },
    {
        "day": 1,
        "ChinaT": "建军节"
    },
    {
        "day": 2,
        "ChinaT": "初二"
    },
    {
        "day": 3,
        "ChinaT": "初三"
    },
    {
        "day": 4,
        "ChinaT": "初四"
    },
    {
        "day": 5,
        "ChinaT": "初五"
    },
    {
        "day": 6,
        "ChinaT": "初六"
    },
    {
        "day": 7,
        "ChinaT": "七夕节"
    },
    {
        "day": 8,
        "ChinaT": "立秋"
    },
    {
        "day": 9,
        "ChinaT": "初九"
    },
    {
        "day": 10,
        "ChinaT": "初十"
    },
    {
        "day": 11,
        "ChinaT": "十一"
    },
    {
        "day": 12,
        "ChinaT": "十二"
    },
    {
        "day": 13,
        "ChinaT": "十三"
    },
    {
        "day": 14,
        "ChinaT": "十四"
    },
    {
        "day": 15,
        "ChinaT": "中元节"
    },
    {
        "day": 16,
        "ChinaT": "十六"
    },
    {
        "day": 17,
        "ChinaT": "十七"
    },
    {
        "day": 18,
        "ChinaT": "十八"
    },
    {
        "day": 19,
        "ChinaT": "十九"
    },
    {
        "day": 20,
        "ChinaT": "二十"
    },
    {
        "day": 21,
        "ChinaT": "廿一"
    },
    {
        "day": 22,
        "ChinaT": "廿二"
    },
    {
        "day": 23,
        "ChinaT": "处暑"
    },
    {
        "day": 24,
        "ChinaT": "廿四"
    },
    {
        "day": 25,
        "ChinaT": "廿五"
    },
    {
        "day": 26,
        "ChinaT": "廿六"
    },
    {
        "day": 28,
        "ChinaT": "廿八"
    },
    {
        "day": 27,
        "ChinaT": "廿七"
    },
    {
        "day": 29,
        "ChinaT": "廿九"
    },
    {
        "day": 30,
        "ChinaT": "初一"
    },
    {
        "day": 31,
        "ChinaT": "初二"
    },
    {
        "day": 1,
        "ChinaT": "初三"
    },
]

// console.log(data);
let newDiv = document.createElement("div");
let newRow = document.createElement("div");
let content = document.querySelector(".content");
let newAdd = document.createElement("div");
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
    newRow.innerHTML += `
    <div>
        <span>${el.day}</span>
        <p>${el.ChinaT}</p>
        <p></p>
    </div>                                                 
    `;
});

newDiv.appendChild(newRow);
// console.log(newDiv);
content.appendChild(newDiv);