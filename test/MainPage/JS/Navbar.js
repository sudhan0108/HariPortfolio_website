const header = document.querySelector("header");
const sectionOne = document.querySelector(".landing_page");

const sectionOneOptions = {};
const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
    ) {
        entries.forEach(entry =>{
            if(!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
            }else {
                header.classList.remove("nav-scrolled");
            }
        });
    },
    sectionOneOptions);

    sectionOneObserver.observe(sectionOne);

