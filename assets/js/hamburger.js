//TOGGLE MENU
const navContainer = document.querySelector('.navigation')
let hamBtn = document.querySelector('.ham-menu');
let hamIconTop = hamBtn.querySelector('.hamburger-icon__top');
const mobileMenu = document.querySelector('.mobile-menu');
const sideMenu = navContainer.querySelector('.side-menu');


const slideNav = document.querySelector('.nav-container--standard');
const slideNavMenu = slideNav.querySelector('.ham-menu')
console.dir(hamBtn);

hamBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    let pathClass = hamBtn.querySelector('span');
    pathClass.classList.toggle('open');
    slideNavMenu.querySelector('span').classList.toggle('open');
    mobileMenu.querySelector('.icon-span').classList.toggle('open');


    let sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('visible');
    console.dir(sideMenu)
    sideMenu.nextElementSibling.classList.toggle('pointer-off');


    const pointerOff = navContainer.querySelector('.menu-button .pointer-off')
    console.log(pointerOff);

    document.body.style.overflowY = 'hidden'
    // document.body.style.top = `-${window.scrollY}px`;

    pointerOff.addEventListener('click', ()=>{
        pathClass.classList.remove('open');
        slideNavMenu.querySelector('span').classList.remove('open');
        mobileMenu.querySelector('.icon-span').classList.remove('open');
        sideMenu.classList.remove('visible');
        pointerOff.classList.remove('pointer-off');

        const scrollY = document.body.style.top;
        document.body.style.overflowY = 'scroll'
        // document.body.style.top = ''
        // window.scrollTo(0, parseInt(scrollY || '0') * -1)
    })
})

mobileMenu.addEventListener('click', (e)=>{
    e.preventDefault();

    let pathClass = mobileMenu.querySelector('.icon-span');
    pathClass.classList.toggle('open');
    slideNavMenu.querySelector('span').classList.toggle('open');
    hamBtn.querySelector('span').classList.toggle('open');


    let sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('visible');

})

slideNavMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    
    let pathClass = slideNavMenu.querySelector('span');
    pathClass.classList.toggle('open');
    hamBtn.querySelector('span').classList.toggle('open');
    mobileMenu.querySelector('.icon-span').classList.toggle('open');

    let sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('visible');

    sideMenu.nextElementSibling.classList.toggle('pointer-off');

    const pointerOff = navContainer.querySelector('.menu-button .pointer-off')
    console.log(pointerOff);

    pointerOff.addEventListener('click', ()=>{
        pathClass.classList.remove('open');
        slideNavMenu.querySelector('span').classList.remove('open');
        hamBtn.querySelector('span').classList.remove('open');
        sideMenu.classList.remove('visible');
        pointerOff.classList.remove('pointer-off');
    })
})

window.addEventListener('click',e=>{
    // const menuSpan = document.querySelector('.menu-span');
    // if(menuSpan.classList.contains('open')){
    //     menuSpan.classList.remove('open');
        
    // }
});

//DARKMODE
//get darkmode current settings in local storage
let darkmode = localStorage.getItem('darkmode'); 
console.log(darkmode);


//get dm buttons
const darkmodeToggle = document.querySelector('.switch-button input');
const onSLideDarkModeToggle = slideNav.querySelector('.switch-button input')
console.log(onSLideDarkModeToggle)
console.dir(darkmodeToggle);

//keep darkmode on if darkmode is already set to on
if(darkmode === 'on'){
    enableDarkMode();

    darkmodeToggle.checked = 'true';
    onSLideDarkModeToggle.checked = true;
}

darkmodeToggle.addEventListener('click', e=>{
    darkMode = localStorage.getItem('darkmode');
    if(e.target.checked){
        enableDarkMode()
        onSLideDarkModeToggle.checked = true;
    }else{
        disableDarkMode();
        onSLideDarkModeToggle.checked = false;
    }
})

onSLideDarkModeToggle.addEventListener('click', e=>{
    darkMode = localStorage.getItem('darkmode');
    if(e.target.checked){
        enableDarkMode()
        darkmodeToggle.checked = 'true';
    }else{
        disableDarkMode();
        darkmodeToggle.checked = false;
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

let lastScrollTop = 88;
var header = document.getElementById('header');
const fixedNav = document.querySelector('.nav-container--hidden');
 
window.addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        // header.classList.remove('show');
        // header.classList.add('hide');
        fixedNav.classList.remove('nav-container--hidden');
        navContainer.classList.add('slide-down--nav');
        sideMenu.classList.add('slide-down--')
    }else{
        // header.classList.remove('hide');
        // header.classList.add('show');
        fixedNav.classList.add('nav-container--hidden');
        navContainer.classList.remove('slide-down--nav');
        sideMenu.classList.remove('slide-down--');
    }
    // lastScrollTop = scrollTop;
})


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