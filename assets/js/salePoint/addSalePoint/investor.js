const tags = document.querySelector("#investor");
const downArrow = document.querySelector("#investorDownArrow");


 downArrow.addEventListener("click", ()=> {

    $( function() {
        var availableTags = [
          "SwipeWire",
          "Goyette, Graham And Kihn",
          "Ebert - Weissnat",
          "Stark And Sons",
          "Balistreri - O'Keefe",
          "White Inc",
          "Hilpert Group",
          "Jerde Inc"
        ];
        $(tags).autocomplete({
          source: function (request, response) {
              response( availableTags);
          },
          minLength: 0
        }).focus(function(){
            $(this).data("uiAutocomplete").search('');
        });
      } );

 })
