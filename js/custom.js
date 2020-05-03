
$('.call-payment').on('click', function () {
    $(this).find('.arr-up').toggleClass('rotate-180');
});
$('.call-teacher').on('click', function () {
    $('.teacher-modal').addClass('showed');
    $('.overlay').addClass('showed');
});
$('.close-modal').on('click', function () {
    $('.overlay').removeClass('showed');
    $('.modal-box').removeClass('showed');
});
$('.overlay').on('click', function () {
    $('.overlay').removeClass('showed');
    $('.modal-box').removeClass('showed');
});

$('.call-teach').on('click', function () {
    $('.modal-box').removeClass('showed');
    $('.overlay').addClass('showed');
    $('.teacher-calling').addClass('showed');
});