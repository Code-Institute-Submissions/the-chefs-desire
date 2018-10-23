$(document).ready( function() {
    
    $(".displayed-image").mouseenter(function(){
       $(".overlay-image-heading").stop().animate({"color": "#fff"}, 'slow'); 
       $(".displayed-image").stop().animate({"opacity": "1"}, 'slow');
    });
    $(".displayed-image").mouseleave(function(){
       $(".overlay-image-heading").stop().animate({"color": "color: rgba(255,255,255,.7);"}, 'slow') 
       $(".displayed-image").stop().animate({"opacity": ".7"}, 'slow');
    });
    $(".overlay-image-heading").mouseenter(function(){
       $(".overlay-image-heading").stop().animate({"color": "#fff"}, 'slow') 
       $(".displayed-image").stop().animate({"opacity": "1"}, 'slow');
    });
    $(".overlay-image-heading").mouseleave(function(){
       $(".overlay-image-heading").stop().animate({"color": "color: rgba(255,255,255,.7);"}, 'slow') 
       $(".displayed-image").stop().animate({"opacity": ".7"}, 'slow');
    });
        
    
    $('.test').each(function(i) {
    $(this).attr('class',"box change-picture"+i);
    });
   
    $('.change-picture0').show('fade', 500).delay(6000)
    $('.change-picture0').hide('fade', 500)
    var count  = 1
    setInterval(function () {
        $('.change-picture'+count).show('fade', 500).delay(6000)
        $('.change-picture'+count).hide('fade', 500)
        
        if (count == 4) {
            count = 0
        } 
        else {
        count += 1
            
        } 
    },7000 );
    
    
    
    /*MOBILE REGISTER BTN*/
    $('.mobile-form-btn').click(function() {
        $(".mobile-ul").hide('fade', 500)
        $('.mobile-li').hide('fade', 500)
    });
    
    /*REGISTER*/
    $('.register-close-btn').click(function() {
        $(this).parent().parent().parent().hide('fade', 500)
    });
    
    $('.register-trigger').click(function() {
        $(".signin-page").hide('fade')
        $(".register-page").show('fade', 500)
    });
    
    $('.signin-trigger').click(function() {
        $(".register-page").hide('fade')
        $(".signin-page").show('fade', 500)
    });
    
    
    
    
    /* LIKE HEART*/
    $('#fa-heart').click(function() {
        $('#fa-heart').hide()
        $('#heart-2').show()
    })
    
    /*MOBILE MENU*/
    $('#fa-bars').click(function() {
        $('.mobile-ul').toggle('fade', 500)
    })
    $('#fa-bars').click(function() {
        $('.mobile-li').toggle('clip', 1000).delay(500)
    })
    
    
    $("#mobile-search-btn").click(function() {
        $("#allergen_and_cuisine_search").show()
    })
    
    /* SEARCH BAR THAT OPENS DIFFERENT SEARCH CATEGORIES*/
    
    $(".search-btn").click(function() {
        if ($(this).hasClass("choice")){
            $(this).parent().next().next().next().next().removeClass("chosen")
        }
        $(this).parent().next().next().next().next().show('fade', 500)
        $('.chosen').hide('fade', 500)
        $('.chosen').removeClass('chosen')
        $(this).parent().next().next().next().next().addClass('chosen')
        $('.search-btn').removeClass("choice")
        $(this).addClass("choice")
        
    })
    
    $(".close-btn").on('click', function() {
        $('.chosen').hide('fade', 500)
        $('.chosen').removeClass('chosen')
        $('.choice').removeClass("choice")
    })
    
    
/*Add input field for instruction and ingredients, also adds the add and remove buttons*/    
   
    $("body").on('click','.duplicate', function(){
        
        var id_name = $(this).parent().children('input').attr("name");
        
        if ($(this).attr('id') == 'first') {
            $(this).append().after(
            '<br><input type="text" name="' + id_name +'" class="' + id_name +'" placeholder="Add"/>'+
            ' <i class="material-icons duplicate pointer">add</i>' +
            ' <i class="material-icons remove_duplicate pointer">remove</i>');
        } 
        
        else 
        {
            $(this).prev().prev().prev().append().after(
            '<br><input type="text" name="' + id_name +'" class="' + id_name +'" placeholder="Add"/>'+
            ' <i class="material-icons duplicate pointer">add</i>' +
            ' <i class="material-icons remove_duplicate pointer">remove</i>');
        }
        
    });
    
    $("body").on('click','.remove_duplicate', function(){
        $(this).prev().remove();
        $(this).prev().remove();
        $(this).prev().remove();
        $(this).remove();
    });
/*Select cuisine on add and edit html*/
    
    $("body").on('click','.duplicate_select', function(){
        
    var select_remove_button = ' <i class="material-icons remove_select pointer">remove</i><br>';
    
        if ($(this).attr('id') == 'add_cuisine') {
            $("#cuisine").clone().appendTo(".cuisine_container").before(select_remove_button)
            $(this).appendTo(".cuisine_container")
            $('.duplicate_select').addClass("add-fourpx")
        }
    });
    
    $("body").on('click','.remove_select', function(){
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