const calender = document.querySelector('#calender');


calender.addEventListener("click", ()=> {

    $( function() {
        $( ".datepicker" ).datepicker();
      } );
})