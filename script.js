const text = document.querySelector("#textFeld");
const geldBtn = document.querySelector("#geldButton");
const einBtn = document.querySelector("#btnEinkommen");
const ulList = document.querySelector("#ulContainer");
const ausBtn = document.querySelector("#btnAusgaben");
const ulListguthaben = document.querySelector("#guthabeUl");

let guthaben = [];
let einkommen = [];
let ausgaben = [];
let geld = [];

geldBtn.addEventListener("click", () => {


})



einBtn.addEventListener("click", () => {
    const inputFeld = text.value;
    listenErweiter(inputFeld)
    parseInt(guthaben);






})

ausBtn.addEventListener("click", () => {

})





function listenErweiter(array) {
    ulList.innerText = "";
    const gesamtList = document.createElement("li");
    gesamtList.innerText = array;
    inputFeldinnerHtml = "";
    ulList.append(gesamtList);

}

function render(arr) {
    const guthabLi = document.createElement("li");
    guthabLi.innerText = arr;
    ulListguthaben.append(arr);
}


render(guthaben);


