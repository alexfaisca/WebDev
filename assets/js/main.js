/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SERVICES MODAL ===============*/


/*=============== FILTER PORTFOLIO (MIXITUP) ===============*/

const linkWork = document.querySelectorAll('.work__item')

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    },
    callbacks: {
        onMixClick: function (state, originalEvent) {
            linkWork.forEach(l => l.classList.remove('active-work'))
            this.classList.add('active-work')
            console.log('The control "' + this.innerText + '" was clicked');
        }
    }
});

/*=============== POPOUT MENU ===============*/
const dropdown = document.getElementById('dropdown-menu')


function dropdownMenu() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!(event.target.id === 'dbutton')) {
        let dropdowns = document.getElementsByClassName('nav__menu__dropdown__content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.toggle('show');
            }
        }
    }
}

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const themeButtonDrop = document.getElementById('theme-button-dropdown')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'
let navImg = document.querySelectorAll('.nav__img')
let navTxt = Array.from(document.querySelectorAll('.nav__text'))

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-sun' : 'bx-moon'

//We validate if the user previously chose a topic
if (selectedTheme) {
    let icon = getCurrentIcon(), theme = getCurrentTheme()
    //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
    if(theme == 'dark' && icon != iconTheme || icon != selectedIcon) {
        themeButtonDrop.classList.toggle(iconTheme)
        themeButton.classList.toggle(iconTheme)
    }
    if(theme == 'dark') {
        navImg.forEach((z) => {
            z.classList.toggle(lightTheme);
        });
        navTxt.forEach((z) => {
            z.classList.toggle(lightTheme);
        });
    }
    if(theme == 'dark' && theme != lightTheme || theme != selectedTheme)
        document.body.classList.toggle(lightTheme)


}

function toggle_light_theme() {
    //Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButtonDrop.classList.toggle(iconTheme)
    themeButton.classList.toggle(iconTheme)
    navImg.forEach((z) => {
        z.classList.toggle(lightTheme);
    });
    navTxt.forEach( (z) => {
        z.classList.toggle(lightTheme);
    });
    //We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    toggle_light_theme()
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data')


/*================ POPOUT CARDS ===================*/
let popoutCard = null;

function closePopout(element) {
    let card = element.parentElement.parentElement;
    let bgBox = card.parentElement;
    card.classList.add("hidden");
    bgBox.classList.add("hidden");
    popoutCard = null;
}

function openPopout(callingElement) {
    document.getElementById('card-' + callingElement.id).classList.remove('hidden');
    document.getElementById('card-' + callingElement.id).parentElement.classList.remove('hidden');
    popoutCard = callingElement;
}

/*================ Carrousel ====================*/


function imgForward(element) {
    var carousel = element.parentElement;
    console.log(carousel);

    var imgs = carousel.getElementsByClassName('imgs');
    var imgsArr = Array.from(imgs);
    imgsArr.every((img, index) => {
        if (img.className.indexOf('hidden') == -1) {
            imgs[index].classList.add('hidden')
            if (index == imgsArr.length - 1) {
                imgs[0].classList.remove('hidden');
                return false;
            } else {
                imgs[index + 1].classList.remove('hidden');
                return false;
            }
        }
        return true;
    });
}

function imgBackward(element) {
    var carousel = element.parentElement;
    console.log(carousel);

    var imgs = carousel.getElementsByClassName('imgs');
    var imgsArr = Array.from(imgs);
    imgsArr.every((img, index) => {
        if (img.className.indexOf('hidden') == -1) {
            imgs[index].classList.add('hidden')
            if (index == 0) {
                imgs[imgsArr.length - 1].classList.remove('hidden');
                return false;
            } else {
                imgs[index - 1].classList.remove('hidden');
                return false;
            }
        }
        return true;
    });


}