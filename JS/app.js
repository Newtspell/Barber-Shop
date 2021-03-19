let nav = document.getElementById('navigation');
let liens = document.getElementsByClassName('liensNav');
let icon = document.getElementById('icon');

window.onresize = colorHeader;
window.onload = colorHeader;


function colorHeader() {
    let myWidth = window.innerWidth;


    window.onscroll = function () {

        if (myWidth > 768) {



            if (document.documentElement.scrollTop > 980) {

                nav.style.background = '#373737';
                liens[0].style.color = "white";
                liens[1].style.color = "white";
                liens[2].style.color = "white";
                liens[3].style.color = "white";


            } else {
                nav.style.background = '#F0EAD6';
                liens[0].style.color = "#373737";
                liens[1].style.color = "#373737e";
                liens[2].style.color = "#373737";
                liens[3].style.color = "#373737";

            }







        } else {
            nav.style.background = '#F0EAD6';
            liens[0].style.color = "#373737";
            liens[1].style.color = "#373737e";
            liens[2].style.color = "#373737";
            liens[3].style.color = "#373737";


        }

    }

}

function toggleNav() {

    if (nav.className === "")  {
        nav.className += "responsive";


    } else {


    nav.className = "";
    }
}

$('html').click(function () {

    if (nav.className += "responsive") {
        nav.className = ""
    }

})

$('#icon').click(function (event) {
    event.stopPropagation();
})

/* Smooth Scroll */

$('arrow').click(function () {

    $('html,body').animate({
        scrolltop: $('#section-about').offset().top - 50
  
    },
            'slow');
    

})


$(".liensNav:nth-child(1)").click(function () {

    $('html,body').animate({
        scrolltop: $('#accueil').offset().top + 50
  
    },
            'slow');
    

})

$(".liensNav:nth-child(2)").click(function () {

    $('html,body').animate({
        scrolltop: $('#section-about').offset().top - 50
  
    },
            'slow');
    

})

$(".liensNav:nth-child(3)").click(function () {

    $('html,body').animate({
        scrolltop: $('#tarifs').offset().top - 50
  
    },
            'slow');
    

})

$(".liensNav:nth-child(4)").click(function () {

    $('html,body').animate({
        scrolltop: $('#contact').offset().top - 50
  
    },
            'slow');
    

})
