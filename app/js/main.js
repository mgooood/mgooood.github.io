$('a', '.nav-items').on('click', function() {
    $(this).parent('li').addClass('active').siblings('li').removeClass('active');
});