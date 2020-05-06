let hamBtn = document.querySelector('.ham-menu');
let hamIconTop = hamBtn.querySelector('.hamburger-icon__top');

console.log(hamBtn);
hamBtn.addEventListener('click', (e)=>{
    console.log(123);
    e.preventDefault();

    let pathClass = hamBtn.querySelector('span');
    pathClass.classList.toggle('open');

    let sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('visible');
})


//darkMode
//get dm button
const darkmodeToggle = document.querySelector('.switch-button input');

console.dir(darkmodeToggle);

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

var top = document.getElementById('header');
var zero = 0;

window.addEventListener('scroll', e=>{
    var top = document.getElementById('header');
    console.log(top)
    top.classList.toggle('hide', window.scrollX > zero);
    zero = window.scrollX;
})