window.app 			 				= {el : {}, fn : {}};
app.el['window']     				= $(window);
app.el['document']   				= $(document);
app.el['html-body'] 				= $('html,body');
app.el['body'] 		                = $('body');
app.el['back-to-top'] 				= $('.back-to-top');

//Smooth scroll to ID
$('.scroll-to').on('click', function(event) {
    var target = $(this).attr('href');
    if($(target).length){
        event.preventDefault();
        app.el['html-body'].animate({
            scrollTop: $(target).offset().top,
        }, 750)
    }
});

// Back to top
app.el['back-to-top'].click(function (event) {
    event.preventDefault();
    app.el['html-body'].animate({
        scrollTop: 0
    }, 750);
});
function fadeScrollTop(){
    if(app.el['window'].scrollTop()>500){
        app.el['back-to-top'].fadeIn();
    }else{
        app.el['back-to-top'].fadeOut();
    }
}


// Window scroll events
app.el['window'].on('scroll',function () {
    fadeScrollTop();
});

$('.mobile-menu-toggle').on('click', function(event){
    event.preventDefault();
    $('.menu-mobile').toggleClass('open');
});

$('.banner-carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});
$('.vns-carousel').slick({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.accordion').accordion({
    "transitionSpeed": 400
});