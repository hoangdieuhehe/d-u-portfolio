// JavaScript Document
var typed = new Typed('.element', {
               	strings: ["Marketing Executive.", "Content Creative.","Social Media Manager."],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});


/*Đây là timeline*/
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();
