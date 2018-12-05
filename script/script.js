$(window).on('load', function () {
    $('html, body').animate({ scrollTop: 0 });
    setInterval(function () {
        $(".mrotate").addClass('done');  
    }, 1000)
})
$(document).ready(function () {
    // next----------------------------------------------------------
    function next() {
        $(".round i").css({ "margin-top": "0px" }) ? $(".round i").animate({ margintop: "0" }, function () {
            $(".round i").css({ "margin-top": "20px", "transition": "0.4s ease" });
        })
            :
            $(".round").css({ "background": "white", })
    }
    setInterval(function () { next() }, 1500)
    // typing----------------------------------------------------------------
    var typed = new Typed('.typing', {
        strings: ["I'm A Professional Web Developer.", "I'm A Professional Web Designer."],
        typeSpeed: 100, backDelay: 1300, loop: true
    });
    // swipe down--------------------------------------------------
    var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
    var raudio = new Audio('images/rollover2.wav');
    $(".btn-dark").click(function () {
        $('html, body').animate({ scrollTop: 3640 }, 600);
        audio.play();
    });
    // Start Scroll_Up----------------------------------------------
    $('.scrollup').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500);
        $(this).css({ "color": "white" })
        audio.play();
        return false;
    });
    // Start click_Scroll------------------------------------------
    $(".switch").click(function (c) {
        c.preventDefault();
        var changeID = c.currentTarget.id + "change";
        $("html,body").animate({
            scrollTop: $("#" + changeID).offset().top
        }, 1000)
        raudio.play();
    })
    $(".switch").hover(function () {
        $(this).append($('.liline'))
        $('.liline').css({ 'background': '#00e77b', "width": $(this).width(), "transition": "0.2s ease-out" })
    })
    // Clear l Function------------------------------------------------
    function clearli() {
        $(".static li a").css({ "color": "" })
        $('.liline').css({ "width": "0px" })
    }
    $(".static li a").mouseleave(function () {
        clearli();
    })
    // ripples------------------------------------------------------
    $(".head").ripples({ dropRadius: 23, resolution: 1000, perturbance: 0.01, });
    //round click-----------------------------------------------------
    $(".round").click(function () {
        $("html,body").animate({ scrollTop: 732 }, 1000)
        audio.play();
    })
    // Download CV-----------------------------------------------
    $(".first a").click(function () {
        audio.play();
    })
    // Window Scroll-----------------------------------------------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            $(".innerline.first").css({ "width": "100%", "transition": "1.3s ease" })
            $(".innerline.secondl").css({ "width": "90%", "transition": "1.3s ease" })
            $(".innerline.third").css({ "width": "75%", "transition": "1.3s ease" })
            $(".innerline.four").css({ "width": "70%", "transition": "1.3s ease" })
            $(".innerline.five").css({ "width": "80%", "transition": "1.3s ease" })
        }
    });
    $(window).scroll(function () {
        if($(this).scrollTop() == 0){ClearAll();}
        // animations---------------------------------------------------
        if ($(this).scrollTop() > 1700) {
            $(".firstw.sixan").css({ "top": "0px", "transition": "1.1s", "opacity": "1" })
            $(".firstw.fivean").css({ "top": "0px", "transition": "0.9s", "opacity": "1" })
            $(".firstw.fouran").css({ "top": "0px", "transition": "0.7s", "opacity": "1" })
        }
        if ($(this).scrollTop() > 3880) {
            $("#designchange ul li").css({ "animation-name": "flipInX", "animation-duration": "2s", "visibility": "visible" })
        }
        // active menu--------------------------------------------
        $(this).scrollTop() > 100 ? $('.scrollup').fadeIn() : $('.scrollup').fadeOut();
        var menubox = $(".menubox").offset().top;
        if (menubox > 0 && menubox < 100) {
            $(".switch.active").removeClass("active").next($(".switch:nth(0)").addClass("active")) 
        }
        else if (menubox > 730 && menubox < 900) {
            $(".switch.active").removeClass("active").next($(".switch:nth(1)").addClass("active"))
        }
        else if (menubox > 1100 && menubox < 2100) {
            $(".switch.active").removeClass("active").next($(".switch:nth(2)").addClass("active"))
            $(".firstw.thirdan,.firstw.secondan,.firstw.firstan")
            .css({ "left": "0%", "transition": "1s ", "transform": "rotate(0deg)" })
            $(".parts2 .screenshots,.parts2 #samerline").css({ "animation-name": "zoomIn", "animation-duration": "1.5s", "visibility": "visible" })
        }
        else if (menubox > 2500 && menubox < 3100) {
            $(".switch.active").removeClass("active").next($(".switch:nth(3)").addClass("active"))
            $(".parts3 .second_screen,.parts3 #samerline")
            .css({ "animation-name": "zoomIn", "animation-duration": "1.5s ","visibility": "visible" })
        }
        else if (menubox > 3100 && menubox < 3700) {
            $(".switch.active").removeClass("active").next($(".switch:nth(4)").addClass("active"))
            $(".parts4 .parts4Head .screen").css({ "animation-name": "tada", "animation-duration": "2s ", "visibility": "visible" })
        }
        else if (menubox > 3680 && menubox < 4000) {
            $(".switch.active").removeClass("active").next($(".switch:nth(5)").addClass("active"));
        }
        else {
            return false;
        }
        if($( window ).width()<1170){
            $(".switch.active").removeClass("active");
        }
        
        // Start Firt_menu Scrolling---------------------------------
        $(this).scrollTop() >= 25 ? $('.menubox').css({ "background": "black" })
            : $('.menubox').css({ "background": "transparent" });
    });
    // ClearAll-----------------------------------------------
     function ClearAll(){
        $(".firstw.thirdan,.firstw.secondan,.firstw.firstan")
            .css({ "left": "-353%", "transition": "1s ", "transform": "rotate(180deg)" })
         $(".parts2 .screenshots,.parts2 #samerline,.parts3 .second_screen,.parts3 #samerline,.parts4 .parts4Head .screen,#designchange ul li")
            .css({ "animation-name": "","visibility": "hidden" })
        $(".innerline.first,.innerline.secondl,.innerline.third,.innerline.four,.innerline.five").css({ "width": "0"})
        $(".firstw.sixan,.firstw.fivean,.firstw.fouran").css({ "top": "300px",})
    } 
    //Lines Click----------------------------------------------------------
    var click = true;
    $(".lines").click(function () {
        if (click == true) {
            $(".static").slideDown();
            $(".line1,.line2,.line3").css({ "opacity": "0" })
            $(".Cline1,.Cline2 ").css({ "opacity": "1" })
            click = false;
        } else {
            $(".static").slideUp();
            $(".line1,.line2,.line3").css({ "opacity": "1" })
            $(".Cline1,.Cline2").css({ "opacity": "0" })
            click = true;
        }
    })
    // Slider------------------------------------------------------------
    function lrnext() {
        $(".slide_owl").animate({ marginLeft: "-800px" }, 550, function () {
            $(".slide_owl").css({ "margin-left": "-400px" });
            $(".item").last().after($(".item").first())
        })
    }
    function lrprev() {
        $(".slide_owl").animate({ marginLeft: '0px' }, 550, function () {
            $(".slide_owl").css({ 'margin-left': '-400px' });
            $('.item').first().before($('.item').last())
        })
    }
    $(".lricons .right").click(function () {
        lrnext();
    })
    $(".lricons .left").click(function () {
        lrprev();
    })
    setInterval(function () { lrnext(); }, 5000)
});