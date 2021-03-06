
const mobileContainer = document.querySelector('.mobile-gallery--show-info');
const button  = mobileContainer.querySelector('button');
console.log(button);


button.addEventListener('click', ()=>{
    //add new attribute to mobile container
    mobileContainer.classList.add('mobile-gallery--fs');
    //remove current button attribute
    button.classList.replace('gallery-dtl__btn--fs', 'close-btn');
    button.classList.replace('expand-button', 'gallery__close-btn');
    
    //remove firstChild of button
    console.log(button.firstElementChild)
    const btnMobSvg = button.firstElementChild;
    button.removeChild(btnMobSvg);

    const closeBtnSvg = '<svg class="close" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 25 25"><path d="M23,22A.75.75,0,1,1,22,23L12.5,13.56,3,23A.75.75,0,0,1,2,22l9.47-9.47L2,3A.75.75,0,0,1,3,2l9.47,9.47L22,2A.75.75,0,1,1,23,3L13.56,12.5Z"></path></svg>'

    button.innerHTML = closeBtnSvg;

    //change style of mobile-gallery-carouselcontainer

    mobileContainer.querySelector('.mobile-gallery__carousel').setAttribute('style', 'left: calc(0px + 0vw); width: clalc(4500vw)');
    
    


})
    closeBtn = mobileContainer.querySelector('.close-btn');
    console.log(closeBtn);
closeBtn.addEventListener('click', ()=>{
    console.log(123);
    //remove fs mode
    mobileContainer.classList.remove('mobile-gallery--fs');

    //replace btn classes
    button.classList.replace('close-btn', 'gallery-dtl__btn--fs');
    button.classList.replace('gallery__close-btn', 'expand-button');

    //replace button firsctChild
    const btnMobSvg = button.firstElementChild;
    button.removeChild(btnMobSvg);
    button.innerHTML = '<svg x="0px" y="0px" width="15.1px" height="15.1px" viewBox="0 0 15.1 15.1" enable-background="new 0 0 15.1 15.1"><path class="gallery-dtl__btn--fs-outline" d="M0,4.6V0.8C0,0.4,0.4,0,0.8,0h3.8c0.5,0,0.8,0.4,0.8,0.8S5.1,1.7,4.6,1.7H2.9l4,4L5.7,6.9l-4-4v1.8 c0,0.5-0.4,0.8-0.8,0.8S0,5.1,0,4.6z M14.2,9.6c-0.5,0-0.8,0.4-0.8,0.8v1.8l-4-4L8.2,9.4l4,4h-1.8c-0.5,0-0.8,0.4-0.8,0.8 s0.4,0.8,0.8,0.8h3.8c0.5,0,0.8-0.4,0.8-0.8v-3.8C15.1,10,14.7,9.6,14.2,9.6z M14.2,0h-3.8C10,0,9.6,0.4,9.6,0.8s0.4,0.8,0.8,0.8 h1.8L1.7,12.2v-1.8c0-0.5-0.4-0.8-0.8-0.8S0,10,0,10.4v3.8c0,0.5,0.4,0.8,0.8,0.8h3.8c0.5,0,0.8-0.4,0.8-0.8s-0.4-0.8-0.8-0.8H2.9 L13.4,2.9v1.8c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8V0.8C15.1,0.4,14.7,0,14.2,0z"></path><path class="gallery-dtl__btn--fs-arrow" d="M14.7,10.4v3.8c0,0.3-0.2,0.5-0.5,0.5h-3.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5H13L8.7,9.4l0.7-0.7l4.4,4.4 v-2.6c0-0.3,0.2-0.5,0.5-0.5S14.7,10.2,14.7,10.4z M14.2,0.3h-3.8c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5H13L1.3,13v-2.6 c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5v3.8c0,0.3,0.2,0.5,0.5,0.5h3.8c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5H2.1L13.7,2.1v2.6 c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5V0.8C14.7,0.6,14.5,0.3,14.2,0.3z M0.8,5.1c0.3,0,0.5-0.2,0.5-0.5V2l4.4,4.4l0.7-0.7L2.1,1.3 h2.6c0.3,0,0.5-0.2,0.5-0.5S4.9,0.3,4.6,0.3H0.8c-0.3,0-0.5,0.2-0.5,0.5v3.8C0.3,4.9,0.6,5.1,0.8,5.1z"></path></svg>';

    //change style of mobile-gallery-carouselcontainer

    mobileContainer.querySelector('.mobile-gallery__carousel').setAttribute('style', 'left: calc(0px + 5vw); width: clalc(4500vw)');

})