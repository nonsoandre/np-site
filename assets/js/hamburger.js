//TOGGLE MENU
let hamBtn = document.querySelector('.ham-menu');
let hamIconTop = hamBtn.querySelector('.hamburger-icon__top');
const mobileMenu = document.querySelector('.mobile-menu');
console.log(mobileMenu);

hamBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    let pathClass = hamBtn.querySelector('span');
    pathClass.classList.toggle('open');

    let sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('visible');

    // if(sideMenu.classList.contains('visible')){
    //     window.addEventListener('click',e=>{
    //         sideMenu.classList.remove('visible')
    //     }, false);
    // }
})
mobileMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(123)
    let pathClass = mobileMenu.querySelector('.icon-span');
    console.log(pathClass)
    pathClass.classList.toggle('open');

    let sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('visible');
})
// window.addEventListener('click',e=>{
//     let pathClass = hamBtn.querySelector('span');
//     let sideMenu = document.querySelector('.side-menu');


//     if(sideMenu.classList.contains('visible')){
//         sideMenu.classList.remove('visible')
//         console.log(sideMenu)
//     }
//     if(sideMenu.hasAttributes('visible')){
//         pathClass.classList.remove('open');
//         sideMenu.classList.remove('visibe');

//         console.log('hello');
//     }

// }, false);

//DARKMODE
//get darkmode current settings in local storage
let darkmode = localStorage.getItem('darkmode');
console.log(darkmode);


//get dm button
const darkmodeToggle = document.querySelector('.switch-button input');
console.dir(darkmodeToggle);

//keep darkmode on if darkmode is already set to on
if(darkmode === 'on'){
    enableDarkMode();

    darkmodeToggle.checked = 'true';
}

darkmodeToggle.addEventListener('click', e=>{
    darkMode = localStorage.getItem('darkmode');

    if(e.target.checked){
        enableDarkMode()
    }else{
        disableDarkMode()
    }
})

function enableDarkMode(){
    document.body.classList.add('darkmode');

    localStorage.setItem('darkmode', 'on');
}

function disableDarkMode(){
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'off');
}

// SHOW NAVBAR ON SCROLL
// function Scroll() {
//     var top = document.getElementById('header');
//     var ypos = window.pageYOffset;
//     if(ypos > 0){
//        console.log(ypos)
//     }else{
//         console.log('fuck-off')
//     }
// }

// window.addEventListener('scroll', Scroll);

// var top = document.getElementById('header');
// var zero = 0;

// window.addEventListener('scroll', e=>{
//     var top = document.getElementById('header');
//     console.log(top)
//     top.classList.toggle('hide', window.scrollX > zero);
//     zero = window.scrollX;
// })

// var lastScrollTop = 10;
// var header = document.getElementById('header');

 
// window.addEventListener('scroll', function(){
//     var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

//     if(scrollTop > lastScrollTop){
//         header.classList.remove('show');
//         header.classList.add('hide');
//     }else{
//         header.classList.remove('hide');
//         header.classList.add('show');
//     }

//     lastScrollTop = scrollTop;
// })


//MOBILE FOOTER SHARE TOGGLE
const mobileNavContainer = document.querySelector('.mobile-nav-container');
const mobileNavListContainer = mobileNavContainer.querySelector('.mobile-nav');
const shareBtn = mobileNavListContainer.querySelector('.share-btn-show');
const mobCloseBtn = mobileNavListContainer.querySelector('.close-btn');
const subMenu = mobileNavListContainer.querySelector('.social-submenu');

console.log(mobCloseBtn);

shareBtn.addEventListener('click', ()=>{
    console.log('hello');
    displayMobileShare();
});
mobCloseBtn.addEventListener('click', ()=>{
    console.log('removed');
    removeMobileShare();
});
function displayMobileShare(){
    mobileNavListContainer.classList.add('mobile-share-open');
    shareBtn.style.display = 'none';
    mobCloseBtn.parentElement.classList.toggle('.with-submenu');
    subMenu.classList.add('transition-in', 'open');
    subMenu.classList.add('open');
}
function removeMobileShare(){
    mobileNavListContainer.classList.remove('mobile-share-open');
    shareBtn.style.display = 'flex';
    // mobCloseBtn.parentElement.classList.toggle('.with-submenu');
    subMenu.classList.remove('transition-in');
    subMenu.classList.remove('open');
}
console.log(shareBtn)