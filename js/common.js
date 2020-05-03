// $('select').selectpicker;
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
$('.inf-text-t').slick({
    arrows: true,
    fade: true,
    asNavFor: '.img-t',
    pauseOnHover: true
});

$('.img-t').slick({
    pauseOnHover: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    //centerPadding: '0px',
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    asNavFor: '.inf-text-t',
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 2000
});
function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}
AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});
$(document).ready(function(){
    $('.benefits__number').spincrement({
        thousandSeparator: "",
        duration: 2000
    });
});
$('#r11').on('click', function(){
    $(this).parent().find('a').trigger('click');
});

$('#r12').on('click', function(){
    $(this).parent().find('a').trigger('click');
});
$('#r13').on('click', function(){
    $(this).parent().find('a').trigger('click');
});
jQuery(function ($) {
    var $active = $('#accordion .panel-collapse.in').prev().addClass('active');

    $('#accordion').on('show.bs.collapse', function (e)
    {
        $('#accordion .panel-heading.active').removeClass('active');
        $(e.target).prev().addClass('active');
    });
    $('#accordion').on('hide.bs.collapse', function (e)
    {
        $(e.target).prev().removeClass('active');
    });
});

$(function(){
    $('#circle-checkbox > input').nicelabel();
});
$('.click-bonus').click(function () {
    $('.in-bonus').show();
    $(this).css("color", "#7047F0");
});
$(window).load(function(){
    $(".input-effect input").val("");

    $(".input-effect input").focusout(function(){
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    })
});

