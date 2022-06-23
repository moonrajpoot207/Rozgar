const modal = document.querySelector("#myModal");
const btn = document.querySelectorAll("#readMore");
const span = document.getElementsByClassName("close")[0];
const proposal = document.getElementById("proposal");
const para = document.getElementById("modal-para");


btn.forEach( element =>{
  element.onclick = function(e) {
    e.preventDefault();
    const currentBtn = e.target
    const currentParagraph = currentBtn.parentElement.parentElement.querySelector('#proposal')
    para.innerHTML = currentParagraph.innerHTML;
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
})

