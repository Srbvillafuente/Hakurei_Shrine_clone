const audio = document.getElementById("backgroundMusic");

    const audioQuery = document.querySelector("audio");
    window.addEventListener("DOMContentLoaded", event =>{

        audioQuery.volume = 1;
        audioQuery.play();
    });

    function audioController(){
        if (!audio.paused) {
            audio.pause();
        }
        else{
            audio.play();
        }
    }

    let imageTracker ="i";
    function imageChange(){
        var image = document.getElementById("audioController");

        if (imageTracker == "i"){
            image.src = "resources/audioControllerOff.png"
            imageTracker = "I"
        }
        else {
            image.src = "resources/audioControllerOn.png"
            imageTracker = "i"
        }
    }

    // cycles through whether or not the menu burger is open or not
    const menuBtn = document.querySelector('.menuHamburger')
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if(!menuOpen){
            menuBtn.classList.add('open');
            menuOpen = true;
        }
        else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });

    // cycles between whether or not the right hand bar is visible
    const list = document.querySelector('.rightBarStuff');
    menuBtn.addEventListener('click', () => {
        list.classList.toggle('show');
    });

    const qq = document.querySelector(".dropdownContent");
    function s(){
        qq.style.display ="flex";
    }
    function c(){
        qq.style.display = "none";
    }

    function showOrHide(){
        if(qq.style.display == "none"){
            s()
        }
        else{
            c()
        }
    }