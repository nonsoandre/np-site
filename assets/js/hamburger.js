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
