//controling header color and font size as well as storing preferences
let controlHeader = document.querySelector('.header');
let controlTopnav = document.querySelector('.topnav');

let fontbig = document.querySelector('.fontbig');
let fontsmall = document.querySelector('.fontsmall');
let fontreset = document.querySelector('.fontreset');

let light = document.querySelector('.light span');
let dark = document.querySelector('.dark span');

fontbig.addEventListener('click',function(){controlHeader.setAttribute('id','big');
localStorage.fontSize = 'larger';// A+
});
fontsmall.addEventListener('click',function(){controlHeader.setAttribute('id','small');
localStorage.fontSize = 'smaller'; // A-
});
fontreset.addEventListener('click',function(){controlHeader.setAttribute('id','medium');
localStorage.fontSize = 'normal'; //A
});

light.addEventListener('click',function(){controlTopnav.setAttribute('id','lighter');
localStorage.backgroundcolor = 'light';
});
dark.addEventListener('click',function(){controlTopnav.setAttribute('id','darker');
localStorage.backgroundcolor = 'dark';
});
//getting header colors and font size from local storage API
if (localStorage.fontSize == 'larger'){
    controlHeader.setAttribute('id','big');
   }
   else if(localStorage.fontSize == 'smaller'){
    controlHeader.setAttribute('id','small');
   }
   else if(localStorage.fontSize == 'normal'){
    controlHeader.setAttribute('id','medium');
}
if (localStorage.backgroundcolor == 'light'){
    controlTopnav.setAttribute('id','lighter');
   
   }
   else if(localStorage.backgroundcolor == 'dark'){
    controlTopnav.setAttribute('id','darker');
   }


//presentation showing and controls for presentation
var element1 =  document.querySelector('.right');
if (typeof(element1) != 'undefined' && element1 != null) //if the page doesn't have the presentation then JS skips this code
   {
       var images = ['assets/cyberpunkpc.jpg','assets/bf5pc.jpg','assets/bf5pc.jpg','assets/codps5.jpg','assets/nfspc.jpg','assets/dirt4ps5.jpg'];
       var currentImage = 0;
       var imageShown = document.querySelector('.imageShown');
   
       document.querySelector('.right').addEventListener('click',()=>{ //going to the next image in images[] array
           if(currentImage >= images.length-1){ //making sure we dont get that arrayOutOfBound error
                   currentImage =-1;
           }
           currentImage = currentImage + 1;
           imageShown.src = images[currentImage]; //updating the image in presentation
       });
       document.querySelector('.next').addEventListener('click',()=>{ // same thing as above but for the button that appears at smaller viewports
        if(currentImage >= images.length-1){ 
                currentImage =-1;
        }
        currentImage = currentImage + 1;
        imageShown.src = images[currentImage]; //updating the image in presentation
    });
       document.querySelector('.left').addEventListener('click',()=>{ //going to the previous image in images[] array
           if(currentImage <= 0){
               currentImage = images.length;
           }
           currentImage = currentImage - 1;
           imageShown.src = images[currentImage];
       });
       document.querySelector('.previous').addEventListener('click',()=>{ // same thing as above but for the button that appears at smaller viewports
        if(currentImage <= 0){
            currentImage = images.length;
        }
        currentImage = currentImage - 1;
        imageShown.src = images[currentImage];
    });
       document.querySelector('.firstGame').addEventListener('click',()=>{ //button for selecting 1st image
       
           currentImage = 0;
           imageShown.src = images[currentImage];
       });
       document.querySelector('.randomGame').addEventListener('click',()=>{ //button for selecting random image
       
           currentImage = Math.floor(Math.random() * images.length);
           imageShown.src = images[currentImage];
       });
       document.querySelector('.lastGame').addEventListener('click',()=>{//button for selecting last image
       
           currentImage = images.length-1;
           imageShown.src = images[currentImage];
       });
       
       
       document.querySelector('.right').addEventListener('click',()=>{ //small animation for right arrow
           var arrowAnimation=[
               {opacity:0.5,width:'1%',transform:'rotate(10deg)'}, //during the click arrow goes half-visible and rotates 10 and then 15 degrees
               {opacity:0.5,width:'2%',transform:'rotate(15deg)'},
               {opacity:1,width:'3%'}
           
           ];
           
           var myTimings = {duration:300, playbackRate:2}
           
           document.querySelector('.right').animate(arrowAnimation, myTimings);
       });
       document.querySelector('.left').addEventListener('click',()=>{ //small animation for left arrow
           var arrowAnimation=[
               {opacity:0.5,width:'1%',transform:'rotate(10deg)'},
               {opacity:0.5,width:'2%',transform:'rotate(15deg)'},
               {opacity:1,width:'3%'}
           
           ];
           
           var myTimings = {duration:300, playbackRate:2}
           
           document.querySelector('.left').animate(arrowAnimation, myTimings);
       });
   }
//product page: adding to the basket and removing from the basket
var element2 =  document.getElementById('quanps5');
if (typeof(element2) != 'undefined' && element2 != null) //if the page doesn't have the basket then JS skips this code
  {
    total = 0; //total price displayed in cart
    document.getElementById('quanps5').addEventListener('click',()=>{ //removing a ps5 from the basket
        if(document.getElementById('ps5Quantity').value >0){ //making sure the customer doesn't order negative amount of product
        let g = document.getElementById('ps5Quantity').value-1; //removing one product from the basket
        document.getElementById('ps5Quantity').value=g; //updating basket

        var price = (parseInt(document.getElementById("ps5price").innerText.replace('£',''))); // take the price as int and replace £ with nothing
        total-=price;
        document.getElementById('basket-total-price').innerText ="£"+ total; //updating total price
        }
        
    });
    document.getElementById('quanswitch').addEventListener('click',()=>{ //removing a nintendo switch from the basket
        if(document.getElementById('switchQuantity').value >0){
        let g = document.getElementById('switchQuantity').value-1;
        document.getElementById('switchQuantity').value=g;

        var price = (parseInt(document.getElementById("switchprice").innerText.replace('£','')));
        total-=price;
        document.getElementById('basket-total-price').innerText ="£"+ total;
        }
    });
    document.getElementById('btnPs5').addEventListener('click',()=>{ //adding a ps5 to the basket
       
        let g = parseInt(document.getElementById('ps5Quantity').value)+1;
        document.getElementById('ps5Quantity').value=g;

        var price = (parseInt(document.getElementById("ps5price").innerText.replace('£','')));
        total+=price;
        document.getElementById('basket-total-price').innerText ="£"+ total;
        
    });
    document.getElementById('btnSwitch').addEventListener('click',()=>{ //adding a nintendo switch to the basket
       
        let g = parseInt(document.getElementById('switchQuantity').value)+1;
        document.getElementById('switchQuantity').value=g;
        
        var price = (parseInt(document.getElementById("switchprice").innerText.replace('£','')));
        total+=price;
        document.getElementById('basket-total-price').innerText ='£'+total;
    });

    document.querySelector('.purchase-button').addEventListener('click',()=>{ //making a purchase
        alert("Thank you for the purchase");
        document.getElementById('basket-total-price').innerText ='£'+0; //after purchase clear the basket values
        document.getElementById('ps5Quantity').value=0;
        document.getElementById('switchQuantity').value=0;
    });
}
//register button
var element3 =  document.getElementById('submit-register');
if (typeof(element3) != 'undefined' && element3 != null) //if the page doesn't have the registration then JS skips this code
  {
    document.getElementById('submit-register').addEventListener('submit',()=>{ 
        alert("Thank you for registering successfuly");
    });
}
