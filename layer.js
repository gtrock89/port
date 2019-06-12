$(function(){
  $('.navtog').click(function(){
    $('.contentwrap').toggleClass('bodyleft'); 
   $('.navtog .span1').toggleClass('rot1');
    $('.navtog .span2').toggle();
    $('.navtog .span3').toggleClass('rot2');
    return false;
  });
 
    
  
  $('.contentwrap').click(function(){          
    $(this).removeClass('bodyleft');
   
    var left=$(this).css('left');            
    if (left !== '0px' ){
     $('.navtog .span1').toggleClass('rot1');
    $('.navtog .span2').toggle();
    $('.navtog .span3').toggleClass('rot2');
   
    }   
  });
  
  $('.nav ul li').hover(function(){
    $(this).find('.subnav').toggle();
  });
  
  $('.mobtog').click(function(){
      $(this).parent().find('.sub').slideToggle(400);
  });
  
    $('.mobtog').click(function(){
      $(this).toggleClass('rot1');
  });
  

  $('.gotop').click(function(event){
   event.preventDefault();
  $('html,body').animate({
    scrollTop:0
  },700);
  });
})