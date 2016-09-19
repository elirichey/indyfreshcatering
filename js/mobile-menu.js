$(document).ready(function() {
    $('.mobile-menu-base').hide().before('<a href="#" id="toggle-mobile-menu-base" class="button">MAIN MENU</a>');
    $('a#toggle-mobile-menu-base').click(function() {
        $('.mobile-menu-base').slideToggle(1000);
        return false;
    });
});


$(document).ready(function() {
    $('.mobile-menu-menu').hide().before('<a href="#" id="toggle-mobile-menu-menu" class="button">MENU</a>');
    $('a#toggle-mobile-menu-menu').click(function() {
        $('.mobile-menu-menu').slideToggle(1000);
        return false;
    });
});

$(document).ready(function() {
    $('.mobile-menu-bundles').hide().before('<a href="#" id="toggle-mobile-menu-bundles" class="button">BUNDLES</a>');
    $('a#toggle-mobile-menu-bundles').click(function() {
        $('.mobile-menu-bundles').slideToggle(1000);
        return false;
    });
});

$(document).ready(function() {
    $('.mobile-menu-events').hide().before('<a href="#" id="toggle-mobile-menu-events" class="button">EVENTS</a>');
    $('a#toggle-mobile-menu-events').click(function() {
        $('.mobile-menu-events').slideToggle(1000);
        return false;
    });
});