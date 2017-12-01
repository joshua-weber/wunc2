$(window).on("scroll", function() {
    if($(window).scrollTop() < 1) {
        $(".navbar-fixed-top").css("background-color", "rgba(36, 38, 45, 0)");
    } else if ($(window).scrollTop() > 1){
       $(".navbar-fixed-top").css("background-color", "rgba(36, 38, 45, .95)");
    }
});


var vid = document.getElementById("myVideo"); 

function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
} 

// var vid = document.getElementById("myVideo");
// vid.onplaying = function() {
//     alert("The video is now playing");
// };