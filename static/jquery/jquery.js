$(document).ready(function() {
    /*INDEX PAGE CHANGING PICTURE HOVER*/

    /*Hovering to change opacity of the picture and text in index.html*/
    $(".displayed-image").mouseenter(function() {
        $(".overlay-image-heading").stop().animate({ "color": "#fff" }, 'slow');
        $(".displayed-image").stop().animate({ "opacity": "1" }, 'slow');
    });
    $(".displayed-image").mouseleave(function() {
        $(".overlay-image-heading").stop().animate({ "color": "color: rgba(255,255,255,.7);" }, 'slow')
        $(".displayed-image").stop().animate({ "opacity": ".9" }, 'slow');
    });
    $(".overlay-image-heading").mouseenter(function() {
        $(".overlay-image-heading").stop().animate({ "color": "#fff" }, 'slow')
        $(".displayed-image").stop().animate({ "opacity": "1" }, 'slow');
    });
    $(".overlay-image-heading").mouseleave(function() {
        $(".overlay-image-heading").stop().animate({ "color": "color: rgba(255,255,255,.7);" }, 'slow')
        $(".displayed-image").stop().animate({ "opacity": ".9" }, 'slow');
    });

    /*INDEX PAGE CHANGING PICTURE */
    /* In index.html this adds a class "change-picture" + an incremented number by + 1 to each element that has the same "add-class" class */
    $('.add-class').each(function(i) {
        $(this).attr('class', "box change-picture" + i);
    });

    /*When the page loads show "change-picture0" straight away*/
    $('.change-picture0').show('fade', 500).delay(6000)
    $('.change-picture0').hide('fade', 500)


    /*When change-picture0 hides after the time delay, the change-picture1 time delay to show will happen*/
    /*After change-picture1 hides the count will increment by 1 starting the new 'changepicturei' class */
    var count = 1
    setInterval(function() {
        $('.change-picture' + count).show('fade', 500).delay(6000)
        $('.change-picture' + count).hide('fade', 500)

        /*Once the count gets to 4 reset the count to 0*/
        if (count == 4) {
            count = 0
        }
        else {
            count += 1

        }
    }, 7000);

    var current = $(window).scrollTop();
    /*SHOW DELETE CONFIRMATION POP UP WHEN DELETE BUTTON CLICKED*/
    $(".delete-btn").click(function() {
        $(".comfirmation").show('fade', 500)
    });

    /*SHOW POP UP FOR CHOICE TO REGISTER AFTER GUEST CLICKING EMPTY HEART*/
    $(".guest-heart").click(function() {
        $(".comfirmation").show('fade', 500)
    });

    /*DELETE OR REGISTER CHOICE POP UP CLOSE ENABLE SCROLLING*/
    $(".comfirmation-no").click(function() {
        $(".comfirmation").hide('fade', 500)
        $(window).off('scroll');
    })
    /*CLOSE LIKE POPUP WHEN REGISTER BUTTON CLICKED*/
    $(".like-register").click(function() {
        $(".comfirmation").hide('fade', 500)
    });

    /*MOBILE REGISTER BTN*/
    $('.mobile-form-btn').click(function() {
        $(".mobile-ul").hide('fade', 500)
        $('.mobile-li').hide('fade', 500)
    });

    /*REGISTER*/
    $('.register-close-btn').click(function() {
        $(this).parent().parent().parent().hide('fade', 500)
        $(window).off('scroll');
    });

    $('.register-trigger').click(function() {
        $(".signin-page").hide('fade')
        $(".register-page").show('fade', 500)
        $(window).off('scroll');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        $(window).scroll(function() {
            $(window).scrollTop(current);
        });

    });

    $('.signin-trigger').click(function() {
        $(".register-page").hide('fade')
        $(".signin-page").show('fade', 500)
        $(window).scroll(function() {
            $(window).scrollTop(current);
        });

    });

    /*MOBILE MENU*/
    $('#fa-bars').click(function() {
        $('.mobile-ul').toggle('fade', 500)
        $('.mobile-bars').toggleClass("mobile-bars-clicked")
    })


    $('#fa-bars').click(function() {
        $('.mobile-li').toggle('clip', 1000).delay(500)
    })



    $("#mobile-search-btn").click(function() {
        $("#allergen_and_cuisine_search").show()
        $(window).scroll(function() {
            $(window).scrollTop(current);
        });
    })

    /* SEARCH BAR THAT OPENS DIFFERENT SEARCH CATEGORIES*/

    $(".search-btn").click(function() {
        if ($(this).hasClass("choice")) {
            $(this).parent().next().next().next().next().removeClass("chosen")
        }
        $(this).parent().next().next().next().next().show('fade', 500)
        $('.chosen').hide('fade', 500)
        $('.chosen').removeClass('chosen')
        $(this).parent().next().next().next().next().addClass('chosen')
        $('.search-btn').removeClass("choice")
        $(this).addClass("choice")
        $(window).scroll(function() {
            $(window).scrollTop(current);
        });
    })

    $(".close-btn").on('click', function() {
        $('.chosen').hide('fade', 500)
        $('.chosen').removeClass('chosen')
        $('.choice').removeClass("choice")
        $(window).off('scroll');
    })


    /*Add input field for instruction and ingredients, also adds the add and remove buttons*/

    $("body").on('click', '.duplicate', function() {

        var id_name = $(this).parent().children('input').attr("name");

        if ($(this).attr('id') == 'firsta' || $(this).attr('id') == 'firstb') {
            $(this).append().prev().before(
                '<input type="text" name="' + id_name + '" placeholder="' + id_name + '" class="margin-left-45 inline" placeholder=""/>' +
                ' <i class="material-icons inline duplicate pointer">add</i>' +
                ' <i class="material-icons inline remove_duplicate pointer">remove</i><br>');
        }

        else {
            $(this).prev().append().before(
                '<input type="text" name="' + id_name + '" placeholder="' + id_name + '" class="margin-left-45 inline" placeholder=""/>' +
                ' <i class="inline material-icons duplicate pointer">add</i>' +
                ' <i class="inline material-icons remove_duplicate pointer">remove</i><br>');
        }

    });

    $("body").on('click', '.remove_duplicate', function() {
        $(this).prev().remove();
        $(this).prev().remove();
        $(this).prev().remove();
        $(this).remove();
    });
    /*Select cuisine on add and edit html*/

    $("body").on('click', '.duplicate_select', function() {

        var select_remove_button = ' <i class="material-icons remove_select pointer">remove</i><br>';

        if ($(this).attr('id') == 'add_cuisine') {
            $(this).prev().clone().appendTo(".cuisine_container").before(select_remove_button)
            $(this).appendTo(".cuisine_container")
            $('.duplicate_select').addClass("add-fourpx")
            $('.duplicate_select').removeClass("remove-width")
        }
    });

    $("body").on('click', '.remove_select', function() {
        $(this).prev().remove();
        $(this).next().remove();
        $(this).remove();
    });

    /*Select allergen on add and edit html*/

    $(".nuts:not(:first)").parent().remove();
    $(".dairy:not(:first)").parent().remove();
    $(".penuts:not(:first)").parent().remove();
    $(".eggs:not(:first)").parent().remove();
    $(".crustacean:not(:first)").parent().remove();
    $(".wheat:not(:first)").parent().remove();
    $(".soybeans:not(:first)").parent().remove();


    if ($('.duplicate_select').prev().prev().hasClass('remove_select')) {
        $('.duplicate_select').prev().remove()
        $('.duplicate_select').prev().remove()

    }

});
