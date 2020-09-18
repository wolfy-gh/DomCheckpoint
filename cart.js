    // remove item 
   var removeBtn = document.getElementsByClassName('btn-danger');
    for (let i=0; i< removeBtn.length;i++){
        removeBtn[i].addEventListener('click', function removeCart(event){
            event.target.parentElement.parentElement.remove()   
            updateCartTotal()         
        })     
    }
    // increment and decrement quantity
    var cartItems= document.getElementsByClassName('cart-items')[0]
    var cartRow = Array.from(cartItems.getElementsByClassName('cart-row'))
    for (let i=0; i<cartRow.length ;i++){   
        var minus=cartRow[i].getElementsByClassName('minus')[0]
        minus.addEventListener('click', function decrement (){
            var quantityElement = cartRow[i].getElementsByClassName('cart-quantity-input')[0].innerText
            if (quantityElement<=1){
                quantityElement=1
            }else{
                quantityElement--;
                cartRow[i].getElementsByClassName('cart-quantity-input')[0].innerText= quantityElement      
                updateCartTotal() 
            }
        })
        var plus=cartRow[i].getElementsByClassName('plus')[0]
        plus.addEventListener('click', function increment (){
            var quantityElement = cartRow[i].getElementsByClassName('cart-quantity-input')[0].innerText
            quantityElement++;
            cartRow[i].getElementsByClassName('cart-quantity-input')[0].innerText= quantityElement
            updateCartTotal() 
        }) 
        updateCartTotal() 
    }
     //update the Total
    function updateCartTotal(){
        var cartItems= document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItems.getElementsByClassName('cart-row')
        total =0
        for (let i=0 ; i< cartRows.length; i++){
            var priceElement = cartRows[i].getElementsByClassName('cart-price')[0]
            var quantityElement = cartRows[i].getElementsByClassName('cart-quantity-input')[0] 
            var price = parseFloat(priceElement.innerText.replace('$',''))
            var quantity = parseInt(quantityElement.innerText)
            total = total +(price*quantity)
        }
        total= Math.round(total*100)/100
        document.getElementsByClassName('cart-total-price')[0].innerText = '$'+ total
    }
    // like and dislike button
    var likesbtn = document.getElementsByClassName('likebtn');
    for( let i=0; i <likesbtn.length;i++){   
    likesbtn[i].addEventListener('click',function likeToggle(){
        if (likesbtn[i].classList.contains("far")){
            likesbtn[i].classList.remove("far");
            likesbtn[i].classList.add("fas");
        }else {
            likesbtn[i].classList.remove("fas");
            likesbtn[i].classList.add("far");
        }
})}



