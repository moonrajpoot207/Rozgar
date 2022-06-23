
$(function(){

  $('#amountUpArrow').on('click',add);
  $('#amountDownArrow').on('click',remove);

});

function add(){

  var input = $('#amount'),
      value = input.val();
      
  input.val(++value);
  
  if(value > 0){
    $('#amountDownArrow').removeAttr('disabled');
  }

}

function remove(){

   var input = $('#amount'),
       value = input.val();
      
   if(value > 0){
     input.val(--value);
   }else{
     $('#amountDownArrow').attr('disabled','disabled');
  }

}









// const totalCount = document.querySelector("#amount");
// const incrementCount = document.querySelector("#amountUpArrow");
// const decrementCount = document.querySelector("#amountDownArrow");

// // Variable to track count
// var count = 0;
// // var x = 1;
// // x *= -1;

// // Display initial count value
// totalCount.value = count;

// // Function to increment count
// const handleIncrement = ()=> {
//     count++;
//     totalCount.value = count;
//   };

//   // Function to decrement count
// const handleDecrement = () => {
//     count--;
//     if(totalCount.value == 1){
//         handleDecrement.disabled = true;
//     } else{
//         totalCount.value = count;
//     }
//   };
//   if(totalCount.value == 0){
//     totalCount.value = "";
// }



// // Add click event to buttons
// incrementCount.addEventListener("click", handleIncrement);
// decrementCount.addEventListener("click", handleDecrement);