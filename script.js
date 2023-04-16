const text = document.querySelector("#textFeld");
const einBtn = document.querySelector("#btnEinkommen");
const ulList = document.querySelector("#ulContainer");
const ausBtn = document.querySelector("#btnAusgaben");
const ulListAusgaben = document.querySelector("#ulContainerGesamt");
let guthaben = 0;
let ausgaben = 0;
let gesamt = 0;




einBtn.addEventListener("click", () => {

    const textFeld = parseInt(text.value);
    guthaben = textFeld;
    ulList.innerHtml = "";
    const newLi = document.createElement("li");
    newLi.append("Einahmen:" + guthaben);
    ulList.append(newLi);
    gesamt = guthaben;

})

ausBtn.addEventListener("click", () => {
    const textFeld = parseInt(text.value);
    ausgaben = textFeld;
    ulList.innerHtml = "";
    const newLi = document.createElement("li");
    newLi.append("Ausgaben:" + ausgaben);
    ulList.append(newLi);
    if (gesamt >= 0) {
        const newLis = document.createElement("li");

        ulList.innerHtml = "";
        gesamt = guthaben - ausgaben;
        newLis.append("Gesamt:" + gesamt);
        ulListAusgaben.append(newLis);

    }



})

function render() {

}






