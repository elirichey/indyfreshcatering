

// Main Menu Drop Down

$(document).ready(function() {
    $('.mobile-menu-base').hide().before('<a href="#" id="toggle-mobile-menu-base" class="button">MAIN MENU</a>');
    $('a#toggle-mobile-menu-base').click(function() {
        $('.mobile-menu-base').slideToggle(250);
        return false;
    });
});




// Secondary Menu Drop Downs

$(document).ready(function() {
    $('.mobile-menu-menu').hide().before('<a href="#" id="toggle-mobile-menu-menu" class="button">MENU</a>');
    $('a#toggle-mobile-menu-menu').click(function() {
        $('.mobile-menu-menu').slideToggle(250);
        return false;
    });
});

$(document).ready(function() {
    $('.mobile-menu-packages').hide().before('<a href="#" id="toggle-mobile-menu-packages" class="button">PACKAGES</a>');
    $('a#toggle-mobile-menu-packages').click(function() {
        $('.mobile-menu-packages').slideToggle(250);
        return false;
    });
});

$(document).ready(function() {
    $('.mobile-menu-events').hide().before('<a href="#" id="toggle-mobile-menu-events" class="button">EVENTS</a>');
    $('a#toggle-mobile-menu-events').click(function() {
        $('.mobile-menu-events').slideToggle(250);
        return false;
    });
});