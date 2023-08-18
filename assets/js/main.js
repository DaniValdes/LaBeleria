$(document).ready(function() {
    $('.carousel-control-prev, .carousel-control-next').click(function(e) {
        e.preventDefault();
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log("Scroll: " + scroll); 

        var carouselOffset = $('#carousel-home').offset().top + $('#carousel-home').height();
        console.log("Carousel offset: " + carouselOffset); 

        if (scroll > carouselOffset) {
            console.log("Changing navbar color"); 
            $(".navbar").removeClass('bg-transparent'); // Removemos la clase bg-transparent
            $(".navbar").css("background-color", "#24140c");
            $(".nav-link").css("color", "#FBEEE3");
        } else {
            console.log("Resetting navbar color"); 
            $(".navbar").addClass('bg-transparent'); // Agregamos nuevamente la clase bg-transparent
            $(".navbar").css("background-color", "transparent");
            $(".nav-link").css("color", "#FFFFFF"); 
        }
    });
});

var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
})

//#24150a y #24140c 
