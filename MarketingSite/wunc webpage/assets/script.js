$(window).on("scroll", function() {
    if($(window).scrollTop() < 1) {
        $(".navbar-fixed-top").css("background-color", "rgba(36, 38, 45, 0)");
    } else if ($(window).scrollTop() > 1){
       $(".navbar-fixed-top").css("background-color", "rgba(36, 38, 45, .95)");
    }
});
