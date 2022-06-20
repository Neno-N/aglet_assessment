/*======= Variables ======*/

const menuBtn = document.querySelector('.nav-menu__btn')
const menuExitBtn = document.querySelector('.nav-exit-menu-btn')
const navMenu = document.querySelector('.nav')

const videos = document.querySelectorAll('.card__vid');

//Active page
const activePage  = window.location.pathname;
const navLink = document.querySelectorAll('.nav-link')


/*======= End of Variables ======*/

/*======= Functions =======*/
const toggleMenu = () => {
    if(navMenu.classList.contains('open')){
        navMenu.classList.remove('open')
    }
    else{
        navMenu.classList.add('open')
    }
}

/*======= End of Functions =======*/

/*======= Event Listeners =======*/

//Hamburger Menu
menuBtn.addEventListener('click',toggleMenu);
menuExitBtn.addEventListener('click', toggleMenu);

navLink.forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active')
    }
})

//Play/Pause Vid when hover
videos.forEach(vid=>{
    vid.addEventListener('mouseenter',()=>{
        vid.play()
    })
    vid.addEventListener('mouseout',()=>{

        //Video starts again
        vid.pause();
        vid.currentTime=0;
    })
})

/*======= End of Event Listeners =======*/