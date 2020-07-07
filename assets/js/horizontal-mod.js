//ADD CLASSES WITH MEDIA QUERY
const secondTier = document.querySelector('.second-tier');
console.log(secondTier)
//media query event handler
if(matchMedia){
    // debugger
    //creating our media query
    const mq = window.matchMedia("(min-width: 747px) and (max-width: 910px)");
    //add a listener on mq that calls function when width is reached
    mq.addListener(WidthChange);
    WidthChange(mq); //ensures that function is called when page is loaded
};


//nedia query change
function WidthChange(mq) {
    if (mq.matches){
        secondTier.classList.add('horizontal-modules');
        console.log(secondTier);
        console.log('success');
    }else{
        secondTier.classList.remove('horizontal-modules');
        console.log('miss');
    }
}