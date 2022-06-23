const tag = document.querySelector("#production");
const subs = document.querySelector("#productionHouseDownArrow");


 subs.addEventListener("click", ()=> {

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
        $(tag).autocomplete({
          source: function (request, response) {
              response( availableTags);
          },
          minLength: 0
        }).focus(function(){
            $(this).data("uiAutocomplete").search('');
        });
      } );

 })
