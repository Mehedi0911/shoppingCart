const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const CaseItemAddBtn = document.getElementById("CaseItemAdd");
const CaseItemRemoveBtn = document.getElementById("CaseItemRemove");




//plusBtn event Handler

plusBtn.addEventListener("click", function(){
    addItems("phoneQuantity",1, 1219, "phonePrice");
    // updateGrandTotal();

});

//MinusBtn event Handler
minusBtn.addEventListener("click", function(){
    addItems("phoneQuantity", -1, -1219, "phonePrice");
    // updateGrandTotal();

});


//Case add Btn event Handler
CaseItemAddBtn.addEventListener("click",function(){
    addItems("CaseQuantity", 1 , 59, "casePrice");
    // updateGrandTotal();
})


//Case remove Btn event Handler

CaseItemRemoveBtn.addEventListener("click",function(){
    addItems("CaseQuantity", -1 , -59, "casePrice");
    // updateGrandTotal();
})



//Item Add/remove Function

function addItems(id, quantity, add, priceId){
    const itemQuantity = document.getElementById(id).value;
    const itemQuantityNumber = parseFloat(itemQuantity);
    const newQuantity = itemQuantityNumber + quantity;
    document.getElementById(id).value = newQuantity;
    const price = document.getElementById(priceId).innerText;
    const priceNumber = parseFloat(price);
    const NewTotal = priceNumber + add;
    document.getElementById(priceId).innerText = NewTotal;
    updateGrandTotal();

}

function updateGrandTotal(){

    const phoneTotal = document.getElementById("phonePrice").innerText;
    const phoneTotalNumber = parseFloat(phoneTotal);
   
    const caseTotal = document.getElementById("casePrice").innerText;
    const caseTotalNumber = parseFloat(caseTotal);
   
    const total = phoneTotalNumber + caseTotalNumber;
    document.getElementById("total").innerText = total;
    
    const calcTax = (total * 5)/100;

    document.getElementById("tax").innerText = calcTax;

    

    const newGrandTotal = total + calcTax; 

    document.getElementById("grandTotal").innerText=newGrandTotal;



}




