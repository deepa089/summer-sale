function addItem(productName, productPrice) {

    let itemName = document.getElementById(productName).innerText;
    let itemPrice = document.getElementById(productPrice).innerText;
    console.log("productName ::" , itemName);
    console.log("productPrice ::" , itemPrice);
    let items = document.getElementById("itemList");
    let newItem = document.createElement("li");
    newItem.classList.add("font-bold");
    newItem.innerText = itemName;
    items.append(newItem);
    // let demo = document.getElementsByClassName(item.querySelector(".textName"));
    // console.log(demo);
    // console.log(document.querySelectorAll(item ".textName"));
    // var item = item
    totalSum(itemPrice);
}
let totalAmountSum = 0 ;
function totalSum(item) {
    let totalAmount = document.getElementById("totalPrice");
    let amount = parseInt(totalAmount.innerText);
    amount += parseInt(item);
    totalAmount.innerText = amount;
    totalAmountSum = amount;
    if(amount >= 200 && (document.getElementById("applyId").value.toUpperCase() === "SELL200") ){
        applyCode();
    }
}

function applyCode() {
    let applyId = document.getElementById("applyId").value;
    if(applyId.toUpperCase() !== "SELL200"){
        return false;
    }

    let totalText = document.getElementById("totalText");
    let disAmount = document.getElementById("discount");
    let totalAmount = document.getElementById("totalPrice").innerText;
    let discountAmnt = parseInt(totalAmount) * .2 ;
    disAmount.innerText = discountAmnt;
    totalText.innerText = parseInt(totalAmount) - discountAmnt ;

}