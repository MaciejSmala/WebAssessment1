var element1 =  document.getElementById('.right');
if (typeof(element1) != 'undefined' && element1 != null)
{
    var images = ['assets/cyberpunkpc.jpg','assets/bf5pc.jpg','assets/bf5pc.jpg','assets/codps5.jpg','assets/nfspc.jpg','assets/dirt4ps5.jpg'];
var currentImage = 0;
var imageShown = document.querySelector('.imageShown');

    document.querySelector('.right').addEventListener('click',()=>{
        if(currentImage >= images.length-1){
                currentImage =-1;
        }
        currentImage = currentImage + 1;
        imageShown.src = images[currentImage];
    });
    document.querySelector('.left').addEventListener('click',()=>{
        if(currentImage <= 0){
            currentImage = images.length;
        }
        currentImage = currentImage - 1;
        imageShown.src = images[currentImage];
    });
    document.querySelector('.firstGame').addEventListener('click',()=>{
    
        currentImage = 0;
        imageShown.src = images[currentImage];
    });
    document.querySelector('.randomGame').addEventListener('click',()=>{
    
        currentImage = Math.floor(Math.random() * images.length);
        imageShown.src = images[currentImage];
    });
    document.querySelector('.lastGame').addEventListener('click',()=>{
    
        currentImage = images.length-1;
        imageShown.src = images[currentImage];
    });
    
    document.querySelector('.right').addEventListener('click',()=>{
        var arrowAnimation=[
            {opacity:0.5,width:'1%',transform:'rotate(10deg)'},
            {opacity:0.5,width:'2%',transform:'rotate(15deg)'},
            {opacity:1,width:'3%'}
        
        ];
        
        var myTimings = {duration:300, playbackRate:2}
        
        document.querySelector('.right').animate(arrowAnimation, myTimings);
    });
    document.querySelector('.left').addEventListener('click',()=>{
        var arrowAnimation=[
            {opacity:0.5,width:'1%',transform:'rotate(10deg)'},
            {opacity:0.5,width:'2%',transform:'rotate(15deg)'},
            {opacity:1,width:'3%'}
        
        ];
        
        var myTimings = {duration:300, playbackRate:2}
        
        document.querySelector('.left').animate(arrowAnimation, myTimings);
    });
}