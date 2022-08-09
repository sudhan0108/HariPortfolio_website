document.addEventListener('DOMContentLoaded', function () {
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__list li');
 

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        
    
        //animate lines
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
    
            }
            else{
            link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
            }
        });
        //burger animation
        burger.classList.toggle('toggle');

    });
  });

