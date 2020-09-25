 
const decreaseNumber = (incdec,itemprice) => {
    var product_total_amt=document.getElementById('product_total_amt');
    var total_cart_amt=document.getElementById('total_cart_amt');
    var shipping_charge=document.getElementById('shipping_charge');
    var itemval=document.getElementById(incdec);
    var itemprice=document.getElementById(itemprice);
   

    if(itemval.value <= 0){
        itemval.value=0
        alert('negative value not alowed');
         
    }else{
        itemval.value=parseInt(itemval.value)-1;
        itemprice.innerHTML=parseInt(itemprice.innerHTML)-15;
        product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)-15;
        total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML);
        itemval.style.background='#fff';
    }
}
const increaseNumber = (incdec,itemprice) => {
    var product_total_amt=document.getElementById('product_total_amt');

    var itemval=document.getElementById(incdec);
     
    var itemprice=document.getElementById(itemprice);
    //console.log(itemval.value);

    if(itemval.value >= 5){
        itemval.value=5;
        alert("Not more than 5 people");
        itemval.style.background='red';
       
    }else{
       
        itemval.value=parseInt(itemval.value)+1;
        itemprice.innerHTML=parseInt(itemprice.innerHTML)+15;
        product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)+15;
        total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML);
        
    }
}

var flag=true;
 

const d=() =>{
    var disc=document.getElementById('discount_code1').value;
    if(disc=='axn' && total_cart_amt.innerHTML>75 && flag){
        flag=false;
        total_cart_amt.innerHTML=parseInt(total_cart_amt.innerHTML)-15;
        
       
    }
    else{
        alert("You have already applied for discount")
    }
}
 