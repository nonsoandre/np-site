let hamBtn = document.querySelector('.ham-menu');
let hamIconTop = hamBtn.querySelector('.hamburger-icon__top');

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

//darkMode
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

//navbr hide on scroll
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
