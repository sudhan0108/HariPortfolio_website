document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.button'),
        loader = document.querySelector('.loader'),
        check = document.querySelector('.check');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const tog = document.querySelector('.burger.toggle');
    
    btn.addEventListener('click', function () {
      loader.classList.add('active');    
    });
   
    loader.addEventListener('animationend', function() {
      check.classList.add('active'); 
    });

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
