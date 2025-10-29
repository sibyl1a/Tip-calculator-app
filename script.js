const bill = document.getElementById("bill");
const tipBtn = document.querySelectorAll(".grid .button");
const customTip = document.getElementById("custom-tip");
const people = document.getElementById("people");
const resetBtn = document.getElementById("reset");
let myBill;
let myTip;
let myPeople;

function getBill(){
    bill.addEventListener("input", (e)=>{
        myBill = Number(e.target.value);
        console.log(myBill);
    })
}

function getTip(){
    tipBtn.forEach(btn=>{
        btn.addEventListener("click", (e)=>{
            e.preventDefault();
            myTip = Number(e.target.dataset.value);

            tipBtn.forEach(btn=>{
                btn.style.background = "";
                btn.style.color = "";
            });

            e.target.style.background = "hsl(172, 67%, 45%)";
            e.target.style.color = "hsl(183, 100%, 15%)";
            customTip.value = "";
    })
    })

    customTip.addEventListener("input", (e)=>{
        myTip = Number(e.target.value);
        tipBtn.forEach(btn=>{
            btn.style.background = "";
            btn.style.color = "";
        })
        console.log(myTip);
    })
}

function getPeople(){
    people.addEventListener("input", (e)=>{
        myPeople = Number(e.target.value);
        console.log(myPeople);
    })
}

getBill();
getTip();
getPeople();