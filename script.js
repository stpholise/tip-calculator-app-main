const  billInput = document.getElementById("bill-input")
const  personInput = document.getElementById("nop")
const  resteBtn = document.getElementById("reset-btn")
const  tipAmount = document.getElementById("tip-amount")
const  total = document.getElementById("total")
const tips  = document.querySelectorAll(".num");
const custom = document.getElementById("custom")
const ermsg = document.querySelector(".ermsg")

//==================
//SET VALUES ON LOAD
//==================
billInput.value = "0.0"
personInput.value = "1"
tipAmount.textContent = "0.0"
total.textContent = "0.0";


let billValue = billInput.value;
let personValue = parseFloat(personInput.value).toFixed();
let customValue = ""
let personBorder =   personInput.style.border

//==================================
//LISTEN TO INPUT OF VALUES IN INPUT
//==================================
billInput.addEventListener("input", (e) => {
    billValue = parseFloat(billInput.value)
    calculateTip()
})

personInput.addEventListener("input", (e) => {
    personValue = parseFloat(personInput.value)
    calculateTip()
})



//================
//TO SELECT TIP
//================
function rmvAtv(){
    tips.forEach((x)=> {
        x.classList.remove("atv")
    })
}
tips.forEach((tip) => {
   
    tip.addEventListener("click",(e) => {
        rmvAtv()
       tipValue = parseFloat(e.currentTarget.value)/100
        e.currentTarget.classList.add("atv")
        calculateTip()
    })
   
})




function calculateTip(){
    if(personValue >= 1){
       let curentTipAmount = (billValue * tipValue)/personValue
       let totalPerPerson = (billValue + curentTipAmount)/personValue
       total.textContent = totalPerPerson.toFixed(2);
       tipAmount.textContent = curentTipAmount.toFixed(2);
        personInput.style.border = personBorder
    }
    else{
        personInput.style.border =" 1px solid red"
       ermsg.textContent = "Can't be Zero"
        // personInput.insertAdjacentHTML('beforebegin', '<p class="ermsg">Can\'t be Zero</p>');
      
    }
}

custom.addEventListener("input", (e) => {
    customValue = parseFloat(custom.value)/100
    tipValue = customValue
    calculateTip()

})


resteBtn.addEventListener("click", (e)=>{
    billInput.value = "0.0"
    personInput.value = "1"
    rmvAtv()
    tipAmount.textContent = "0.0"
    total.textContent = "0.0";
    ermsg.textContent =""
    personInput.style = personBorder
})