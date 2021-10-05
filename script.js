const menuBtn = document.querySelector('.menu-btn');
const accr = document.querySelectorAll('.expand');
const accrCon = document.querySelector('.first nav');
const deskIll = document.querySelector('.second img');
const deskLap = document.querySelector('.laptop');
const body7 = document.querySelector('body');

let menuOpen = false;

menuBtn.addEventListener('click', function () {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        accrCon.setAttribute('id', 'visible');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        accrCon.removeAttribute('id', 'visible');
        menuOpen = false;
    }

})
i = 0;
accrOpen = false;
for (i=0; i < accr.length; i++) {
accr[i].addEventListener('click', function() {
    if(!accrOpen) {
    this.classList.add('active');
    accrOpen = true;
}else {this.classList.remove('active');
    accrOpen = false}
} )}

window.addEventListener('onchange', function () {if(window.innerWidth >= 750) {
    deskIll.setAttribute('src', 'images/illustration-editor-desktop.svg');
    deskLap.setAttribute('src', 'images/illustration-laptop-desktop.svg')
}else {
    deskIll.setAttribute('src', 'images/illustration-editor-mobile.svg');
    deskLap.setAttribute('src', 'images/illustration-laptop-mobile.svg')
}
})

/*html.addEventListener('click', function() {
    if(menuOpen || accrOpen) {
        this.classList.remove('active');
        accrOpen = false
        menuBtn.classList.remove('open');
        accrCon.removeAttribute('id', 'visible');
        menuOpen = false;
    }
})*/
