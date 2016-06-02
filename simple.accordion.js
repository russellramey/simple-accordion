// Document Ready
$( document ).ready(function() {
    $('.simple-accordion').simple_accordion();
});
// Simple Accordion
$.fn.simple_accordion = function(){
    var action = $('.simple-accordion--action');
    var moredetails = $('.simple-accordion--content');
    $(action).click(function(){
        $(action).removeClass('active');
        $(moredetails).slideUp(150).removeClass('active');
        $(this).parent().find(moredetails).slideDown(150).addClass('active');
        $(this).addClass('active');
        return false;
    });
};