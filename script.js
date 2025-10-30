const bill = document.getElementById("bill");
const tipBtn = document.querySelectorAll(".grid .button");
const customTip = document.getElementById("custom-tip");
const people = document.getElementById("people");
const resetBtn = document.getElementById("reset");
const tipPerPerson = document.getElementById("tipPerPerson");
const total = document.getElementById("totalPerPerson");
const zeroError = document.getElementById("zeroError");
let myBill;
let myTip;
let myPeople;

function checkBtn(){
    const billVal = Number(bill.value);
    const tipVal = myTip || Number(customTip.value);
    const peopleVal = Number(people.value);
    if(billVal > 0 && tipVal > 0 && peopleVal > 0){
        resetBtn.disabled = false;
        resetBtn.style.background = "hsl(172, 67%, 45%)";
    }else{
        resetBtn.disabled = true;
        resetBtn.style.background = "#0D686D";
    }
}
resetBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    bill.value = "";
    customTip.value = "";
    people.value = "";
    tipPerPerson.innerText = "$0.00";
    total.innerText = "$0.00";
    tipBtn.forEach(btn=>{
        btn.style.background = "";
        btn.style.color = "";
    })
    checkBtn();
})
function getBill(){
    bill.addEventListener("input", (e)=>{
        myBill = Number(e.target.value);
        console.log(myBill);
        calculate();
        checkBtn();
    })
}

function getTip(){
    tipBtn.forEach(btn=>{
        btn.addEventListener("click", (e)=>{
            e.preventDefault();
            myTip = Number(e.target.dataset.value);
            checkBtn();

            tipBtn.forEach(btn=>{
                btn.style.background = "";
                btn.style.color = "";
            });

            e.target.style.background = "hsl(172, 67%, 45%)";
            e.target.style.color = "hsl(183, 100%, 15%)";
            customTip.value = "";
            calculate();
    })
    })

    customTip.addEventListener("input", (e)=>{
        myTip = Number(e.target.value);
        tipBtn.forEach(btn=>{
            btn.style.background = "";
            btn.style.color = "";
        })
        console.log(myTip);
        calculate();
        checkBtn();
    })
}

function getPeople(){
    people.addEventListener("input", (e)=>{
        const numberPeople = document.getElementById("numberPeople");
        myPeople = Number(e.target.value);
        if(myPeople===0){
            zeroError.style.display="flex";
            numberPeople.style.border="2px solid #EF5350";
        }else{
            zeroError.style.display="none";
            numberPeople.style.border="2px solid transparent";
        }
        calculate();
        checkBtn();
    })
}

function calculate(){
    if(!myBill || !myTip || !myPeople) return;
    const tipValue = (myBill * myTip/100)/myPeople;
    const totalValue = (myBill + myBill * myTip/100)/myPeople;
    tipPerPerson.innerText = `$${tipValue.toFixed(2)}`;
    total.innerText = `$${totalValue.toFixed(2)}`;
}

function init(){
    getBill();
    getTip();
    getPeople();
    checkBtn();
}

init();
