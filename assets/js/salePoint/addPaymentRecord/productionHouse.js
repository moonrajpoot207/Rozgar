const tags = document.querySelector("#production");
const downArrow = document.querySelector("#productionDownArrow");


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
