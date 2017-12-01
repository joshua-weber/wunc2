$(window).on("scroll", function() {
    if($(window).scrollTop() < 3) {
        $(".navbar-fixed-top").css("background", "rgba(0, 0, 0, 0)");
    } else if ($(window).scrollTop() > 3){
    //    $(".navbar-fixed-top").css("background", "linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.5), rgba(0,0,0,.25), rgba(0,0,0,0))");
       $(".navbar-fixed-top").css("background", "rgba(0, 0, 0, .7)");
    }
});


// var vid = document.getElementById("myVideo"); 

// function playVid() { 
//     vid.play(); 
// } 

// function pauseVid() { 
//     vid.pause(); 
// } 

// var vid = document.getElementById("myVideo");
// vid.onplaying = function() {
//     alert("The video is now playing");
// };