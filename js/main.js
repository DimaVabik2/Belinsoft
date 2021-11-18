$(document).ready(() => {
    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'custom',
        customDirection: {
            x0: '80%',
            y0: '1000px',
            x1: '60%',
            y1: '10px',
        },
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    ['#222047', '#00b29e'],
                    ['#170e1f', '#2a4256'],
                    ['#222047', '#182232']
                ]
            }
        }
    });

    // new Swiper('.solution-products', {
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     simulateTouch: true,
    //     grabCursor: true,
    //     keyboard: {
    //         enable: true,
    //         onlyInViewport: true
    //     },
    //     slidesPerView: 'auto',
    //     // mousewheel: {
    //     //     sensitivity: 1
    //     // },
    //     watchOverflow: true,
    //     spaceBetween: 190,
    //     speed: 1000,
    //     observer: true,
    //     observeParents: true,
    //     observeSlideChildren: true,
    //
    //
    // });
    $('#strategic-solution').slick({
        dots: true,
        slidesToShow: 1,
        speed: 1000,
        infinite: false,
        initialSlide: 0,
        touchThreshold: 15,
        arrows: true,
        variableWidth: true

    });
    $('#tactical-solution').slick({
        dots: true,
        slidesToShow: 1,
        speed: 1000,
        infinite: false,
        initialSlide: 0,
        touchThreshold: 15,
        arrows: true,
        variableWidth: true

    });
    $('#cyber-solution').slick({
        dots: true,
        slidesToShow: 1,
        speed: 1000,
        infinite: false,
        initialSlide: 0,
        touchThreshold: 15,
        arrows: true,
        variableWidth: true

    });
    $('#homeland-solution').slick({
        dots: true,
        slidesToShow: 1,
        speed: 700,
        infinite: false,
        initialSlide: 0,
        touchThreshold: 15,
        arrows: true,
        variableWidth: true
    });


    $('.solution-nav-menu-item').click((e) => {
        $('.solution-products').hide();
        let currentElement = $(e.target);
        console.log(currentElement);
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.solution-nav-menu-item').removeClass('active');
        currentElement.addClass('active');
        currentElement.parent(".solution-nav-menu-item").addClass('active');

        $('#' + id + '.solution-nav-menu-item-line').addClass('active');
        $('#' + id).slick('setPosition');
    });

    let name = $('#name');
    let email = $('#email');
    let phone = $('#phone');
    let company = $('#company');
    let areaOfInterest = $('#area-of-interest');

    let allInputs = $('.form-input');

    $('#button-submit').click(() => {
        let successInput = true;
        for (let i = 0; i < allInputs.length; i++) {
            $(allInputs[i]).attr('placeholder', '');
        }
        for (let i = 0; i < allInputs.length; i++) {
            if (!allInputs[i].value) {
                $(allInputs[i]).attr('placeholder', 'Please fill in the field');
                successInput = false;
            }
        }
        if (successInput === false) {
            return;
        }

        // $('#loader').css('display', 'flex')

        $.ajax({
            type: 'post',
            url: 'mail.php',
            data: 'name=' + name.val() + '&email=' + email.val() + '&phone=' + phone.val() + '&company=' + company.val() + '&areaOfInterest=' + areaOfInterest.val(),
            success: () => {
                $('#success-order-container').css('display', 'flex');
                $('#success-order-name').text($('#name').val());
                setTimeout(() => {
                    $('#success-order-container').css('display', 'none')
                }, 8000);
                $(name).val(' ');
                $(email).val(' ');
                $(phone).val(' ');
                $(areaOfInterest).val(' ');
                $(company).val(' ');
            },
            error: () => {
                alert('error')
                // $('#loader').css('display', 'none')
            }
        })

    });
    $('#success-order-close, #success-order-container').click((e) => {
        if (e.target.id === 'success-order-container' || e.target.id === '#success-order-close') {
            $('#success-order-container').hide();
        }
    });

    $(' #success-order-close svg').click((e) => {
        $('#success-order-container').hide();
    });


});