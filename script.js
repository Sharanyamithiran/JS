function box1(a){
    return a ;
}
let menu=box1("1.Burger - $5");
console.log(menu);

function box2(b){
    return b;
}
let menu2=box2("2.Pizza-$6");
console.log(menu2);

function box3(c){
    return c;
}
let menu3=box3("3.Sandwich-$7");
console.log(menu3);

function box4(d){
    return d ;
}
let menu4=box4("4.Fries -$3");
console.log(menu4);

function box5(e){
    return e;
}
let menu5=box5("5.Momos -$4");
console.log(menu5);
let selecteditem=prompt("Enter the item number(1-5):");
let moneyentered=prompt("Enter amount of money:");
if(selecteditem <1 || selecteditem >5){
    alert("Invalud item");
}
function checkbalance(price,money){
    if(money < price) {
        alert("Insufficient balance")
    } else {
        let change = money-price;
        alert("Change returned:$ + change");
    }
}
for(let i=3;i>=1;i--){
    console.log(i);
}
console.log("Item ready!");
for(i=1; i<=selecteditem; i++){
    let row="";
    for(let j=1;j<=i;j++){
        row += i+"";
    }
    console.log(row);
}
let again = confirm("Do you want to make another purchase?");
if (again) {
    location.reload();
} else {
    alert("Thank you! Farewell.");
}




