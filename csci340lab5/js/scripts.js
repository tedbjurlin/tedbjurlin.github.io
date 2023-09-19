/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$(document).ready(function() {

    new_dogs();
  
    $("#both").click(new_dogs);
  
    $("#left").click(new_left_dog);
    $("#right").click(new_right_dog);
  
});
  
  
// function new_right_dog() {
// $.ajax({
//     dataType: "json",
//     url: "https://api.kanye.rest/",
//     success: function(results) {
//     $('#quote1').text(results["quote"]);
//     },
//     error: function(xhr,status,error) {
//     console.log(error);
//     }
// });

// $.ajax({
//     dataType: "json",
//     url: " https://dog.ceo/api/breeds/image/random",
//     success: function(results) {
//     console.log(results["message"])
//     $('#dog1').css("background-image", `url(${results["message"]})`);
//     },
//     error: function(xhr,status,error) {
//     console.log(error);
//     }
// });
// }


// function new_left_dog() {
// $.ajax({
//     dataType: "json",
//     url: "https://api.kanye.rest/",
//     success: function(results) {
//     $('#quote2').text(results["quote"]);
//     },
//     error: function(xhr,status,error) {
//     console.log(error);
//     }
// });

// $.ajax({
//     dataType: "json",
//     url: " https://dog.ceo/api/breeds/image/random",
//     success: function(results) {
//     console.log(results["message"])
//     $('#dog2').css("background-image", `url(${results["message"]})`);
//     },
//     error: function(xhr,status,error) {
//     console.log(error);
//     }
// });
// }


// function new_dogs() {
// new_right_dog();
// new_left_dog();
// }