// Scroll top functions (topBtn's functions)
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function(){
        $('html,body').animate({scrollTop : 0}, 800);
    });
});

// Ensure all carousel images have the same size
$(document).ready(function () {
    var maxHeight = 0;
    $('.carousel-img').each(function () {
        var currentHeight = $(this).height();
        if (currentHeight > maxHeight) {
            maxHeight = currentHeight;
        }
    });
    $('.carousel-img').height(maxHeight);
});

/**image Slider animation**/


        var slideIndex = 0;
        showSlides();
    
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
    
            // Hide all slides
            for (i = 0; i < slides.length; i++) {
                slides[i].style.opacity = 0;
                slides[i].style.display = "none";
            }
    
            // Increment slide index
            slideIndex++;
    
            // Reset index if it exceeds the number of slides
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
    
            // Display current slide with smooth fade-in effect
            slides[slideIndex - 1].style.display = "inline-block";
            slides[slideIndex - 1].style.opacity = 1;
    
            // Update dots
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[slideIndex - 1].className += " active";
    
            // Change image every 5 seconds (5000 milliseconds)
            setTimeout(showSlides, 5000);
        }
    

