const bill = document.querySelector('.inn1');
const people = document.querySelector('.people');
const tipPer = document.getElementById('tipPer');
const totalPer = document.getElementById('totalPer');
const tips = document.querySelectorAll('.percent');
const error = document.getElementById('error');
const btn = document.querySelector('.reset');

bill.addEventListener('input', billFun);
people.addEventListener('input', peopleFun);
btn.addEventListener('click', btnReset);


bill.value = "0.0";
people.value = "1";
tipPer.value = "$" + (0.0).toFixed(2);
totalPer.value = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 0.0;
let tipValue = 0.15;

function billFun() {
    billValue = parseFloat(bill.value);
    Calculate();

}

function peopleFun() {
    peopleValue = parseFloat(people.value);

    if(peopleValue < 1) {
        error.style.display = "flex";
        people.style.border = "2px solid red";
    }
    else {
        error.style.display = "none";
        people.style.border = "none";
        Calculate();
    }
}

function Calculate() {
    if(peopleValue >= 1) {
        let tipAm = (billValue * tipValue) / peopleValue;
        let Total = (billValue / peopleValue) + tipAm;
        tipPer.innerHTML = "$" + tipAm.toFixed(2);
        totalPer.innerHTML = "$" + Total.toFixed(2);
    }
}

function btnReset() {
    bill.value = "0.0";
    billFun();
    people.value = "1";
    peopleFun();
}






