
$(function(){

    $('#quantityUpArrow').on('click',add);
    $('#quantityDownArrow').on('click',remove);
  
  });
  
  function add(){
  
    var input = $('#quantity'),
        value = input.val();
        
    input.val(++value);
    
    if(value > 0){
      $('#quantityDownArrow').removeAttr('disabled');
    }
  
  }
  
  function remove(){
  
     var input = $('#quantity'),
         value = input.val();
        
     if(value > 0){
       input.val(--value);
     }else{
       $('#quantityDownArrow').attr('disabled','disabled');
    }
  
  }