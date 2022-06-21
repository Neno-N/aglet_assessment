/*======= Variables ======*/

const menuBtn = document.querySelector('.nav-menu__btn')
const menuExitBtn = document.querySelector('.nav-exit-menu-btn')
const navMenu = document.querySelector('.nav')
const videos = document.querySelectorAll('.slider-card__vid');
const scrollContainer = document.querySelector('.video-slider');
const transitionEl = document.querySelector('.transition');

//Active page
const activePage  = window.location.pathname;
const navLink = document.querySelectorAll('.nav-link')


/*======= End of Variables ======*/

/*======= Onload =======*/

window.onload = () =>{
    setTimeout(() => {
        transitionEl.classList.remove('is-active')
        transitionEl.classList.remove('is-active2')
    }, 1000);
}

/*======= End of Onload =======*/


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
        
        //dim other videos
        videos.forEach(item=>{
            item.classList.add('vid-dim')
        })

        vid.classList.remove('vid-dim')
        vid.play()

        
    })
    vid.addEventListener('mouseout',()=>{
        //dim other videos
        videos.forEach(item=>{
            if(item.classList.contains('vid-dim')){
                item.classList.remove('vid-dim')
            }
            
        })

        //Video starts again
        vid.pause();
        vid.currentTime=0;
    })
})

//horizontal scrolling
window.addEventListener("wheel", function (e) {
    if(e.deltaY > 0){
        scrollContainer.scrollLeft += 100;
    } else{
        scrollContainer.scrollLeft -= 100;
    }
  });

/*======= End of Event Listeners =======*/



  