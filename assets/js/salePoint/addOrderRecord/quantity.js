const totalCount = document.querySelector("#quantity");
const incrementCount = document.querySelector("#quantityUpArrow");
const decrementCount = document.querySelector("#quantityDownArrow");

// Variable to track count
var count = 0;

// Display initial count value
totalCount.value = count;

// Function to increment count
const handleIncrement = ()=> {
    count++;
    totalCount.value = count;
  };

  // Function to decrement count
const handleDecrement = () => {
    count--;
    if(totalCount.value <= 1){
        handleDecrement.disabled = true;
    } else{
        totalCount.value = count;
    }
  };
  if(totalCount.value == 0){
    totalCount.value = "";
}



// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);