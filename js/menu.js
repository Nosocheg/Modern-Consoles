
/* Parallax Effect initialization */
let rellax = new Rellax('.parallax', { speed: 1.25 });

/* Animations initialization */
AOS.init();

/* Handle Navigation-bar Events function */
function responsiveNavbar() {
    
    if (self.innerWidth <= 680) {

        let nav = document.getElementById("_navbar");
        let navIcon = document.getElementById('navIcon');
        let bodyContent = document.getElementById('content-fraction');

        if (nav.className === "navbar") { 
            nav.className += " responsive";
            navIcon.className = 'fas fa-arrow-left';
            bodyContent.style.display = "none";
        }
        else {
            nav.className = "navbar";
            navIcon.className = 'fa fa-bars';
            bodyContent.style.display = "block";
        }
    }
}