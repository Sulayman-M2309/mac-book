const eightGb = document.getElementById("eight-gb");
const sixteenGb = document.getElementById("sixteen");
const memory = document.getElementById("memory");
const storage = document.getElementById("storage");
const delivery = document.getElementById("delivery");

const total =document.getElementById("total");
const price =document.getElementById("price");

const firstStorage =document.getElementById("storage-first");
const secondStorage =document.getElementById("storage-second");
const thirdStorage =document.getElementById("storage-third");
const firstDelivery = document.getElementById("first-delivery");
const secondDelivery = document.getElementById("second-delivery");

const promoInput = document.getElementById("promo-input");
const applyButton = document.getElementById("apply");
const lastTotal =document.getElementById("last-total");


// fuction for ----bonus part (function -1)
function isContain(elem){
    // return  when class is present
  return  elem.classList.contains("selected");
};


// extra memory cost update
eightGb.addEventListener("click",function(){

    if(!isContain(eightGb)){
        eightGb.classList.add('selected');
      sixteenGb.classList.remove('selected');
      firstStorage.classList.remove('selected');
     secondStorage.classList.remove('selected');
      thirdStorage.classList.remove('selected');
      firstDelivery.classList.remove('selected'); 
      secondDelivery.classList.remove('selected');
    }

    memory.innerText = "0";
    updateTotal();

});

sixteenGb.addEventListener("click",function(){
    if(!isContain(sixteenGb)){
        sixteenGb.classList.add('selected');
       eightGb .classList.remove('selected');
       firstStorage.classList.remove('selected');
       secondStorage.classList.remove('selected');
        thirdStorage.classList.remove('selected');
        firstDelivery.classList.remove('selected'); 
        secondDelivery.classList.remove('selected');
    }
    memory.innerText = "180";
    updateTotal();
});

// extra storage cost update
firstStorage.addEventListener("click",function(){
    if(!isContain(firstStorage)){
      firstStorage.classList.add('selected');
        secondStorage.classList.remove('selected');
        thirdStorage.classList.remove('selected');
        eightGb.classList.remove('selected');
        sixteenGb.classList.remove('selected');
        firstDelivery.classList.remove('selected'); 
        secondDelivery.classList.remove('selected');
     }
    storage.innerText = "0";
    updateTotal();
});

secondStorage.addEventListener("click",function(){
    if(!isContain(secondStorage)){
        secondStorage.classList.add('selected');
        thirdStorage.classList.remove('selected');
        firstStorage.classList.remove('selected');
        eightGb .classList.remove('selected');
        sixteenGb .classList.remove('selected');
        firstDelivery.classList.remove('selected'); 
        secondDelivery.classList.remove('selected');
     }
    storage.innerText = "100";
    updateTotal();
});

thirdStorage.addEventListener("click",function(){
    if(!isContain(thirdStorage)){
        thirdStorage.classList.add('selected');
        secondStorage.classList.remove('selected');
        firstStorage.classList.remove('selected');
        eightGb .classList.remove('selected');
        sixteenGb .classList.remove('selected');
        firstDelivery.classList.remove('selected'); 
        secondDelivery.classList.remove('selected');

     }
    storage.innerText = "180";
    updateTotal();
});

  //    delivery charge update

firstDelivery.addEventListener("click",function(){
    if(!isContain(firstDelivery)){
        firstDelivery.classList.add('selected');
        secondDelivery.classList.remove('selected'); 
         firstStorage.classList.remove('selected');
        secondStorage.classList.remove('selected');
        thirdStorage.classList.remove('selected');
        eightGb .classList.remove('selected');
        sixteenGb .classList.remove('selected');

     } 
    delivery.innerText = "0";
    updateTotal();
});

secondDelivery.addEventListener("click",function(){
    if(!isContain(secondDelivery)){
        secondDelivery.classList.add('selected');  
        firstDelivery.classList.remove('selected'); 
        firstStorage.classList.remove('selected');
        secondStorage.classList.remove('selected');
        thirdStorage.classList.remove('selected');
        eightGb .classList.remove('selected');
        sixteenGb .classList.remove('selected');

     }
    delivery.innerText = "20";
    updateTotal();
});

//  using function for -------bonus (function-2)
//   update total price 
function updateTotal(){
var bestPrice = parseInt(price.innerText);
var memoryCost = parseInt(memory.innerText);
var storageCost = parseInt(storage.innerText);
var deliveryCost = parseInt(delivery.innerText);
 const grandTotal = bestPrice +  memoryCost + storageCost + deliveryCost;
 total.innerText = grandTotal;

//   last total update ----bonus
 lastTotal.innerText = grandTotal;

};

// promo code part using function for-------bonus  
applyButton.addEventListener("click",function () {
const promoField = promoInput.value;
    var bestPrice = parseInt(price.innerText);
    var memoryCost = parseInt(memory.innerText);
    var storageCost = parseInt(storage.innerText);
    var deliveryCost = parseInt(delivery.innerText);
    const grandTotal = bestPrice +  memoryCost + storageCost + deliveryCost;

 if(promoField == 'stevekaku' ){
   const applyCopon = grandTotal - (grandTotal *0.2);
  lastTotal.innerText = applyCopon;
  console.log(lastTotal.innerText);
 }
else{
    total.innerText = grandTotal;
}
promoInput.value ="";
});