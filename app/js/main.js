$('li', '.nav-items').on('click', function() {
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
});