$(document).ready(function() {
    $('a[data-toggle="popup"]').each(function() {
        console.log('asd');
        $(this).popup({
            popup: $(this).attr('data-content'),
            position: $(this).attr('data-position'),
            on: 'click'
        })
    });

    $('a[data-toggle="slide"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 60
        }, 900, 'swing');
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#section-two .grid').addClass('animated slideInUp');
        }
    });

    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });
});
