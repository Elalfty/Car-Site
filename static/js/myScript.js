(function(){
    
    /* sync links to active while scolling  */
  $(window).on('scroll',function(){
      syncNavLinks(".block");
  });
    
   /*  after click in link nav it scroll to the spic section */    
  scrollTo("ul li a",3000,true);
    
    /*  this part to slide(up / down) menu (ul)  */
  $('#btn-menu').on('click',function(){
       var $list = $('ul');  
      if($list.css('display') == 'none'){
           $list.slideDown(1700);
      }else{ $list.slideUp(1700); } 
  });
  
})();
