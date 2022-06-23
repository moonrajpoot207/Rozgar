// Tab Selected
const button = document.querySelector('#buttonLogin');
const radio = document.querySelector('.loginRadio');
const tabs = document.querySelectorAll('#loginTab')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => {
      tab.classList.remove('loginBox-active')
    })
    tab.classList.add('loginBox-active')
    radio.active;
  })
})



// Open new window from selected tab
tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    const self = e.target;
    dataUrl = self.getAttribute("data-page-url");
      var form =   document.getElementById("get_form");
      form.action =  dataUrl;
  })
})


    // investor.addEventListener("click", ()=> {
    //     function makeActive() {
    //         salepoint.classList.remove("loginBox-active");
    //         production.classList.remove("loginBox-active");
    //         investor.classList.add("loginBox-active");
    //      }
    //      makeActive();
    // })

    // salepoint.addEventListener("click", ()=> {
    //     function makeActive() {
    //         investor.classList.remove("loginBox-active");
    //         production.classList.remove("loginBox-active");
    //         salepoint.classList.add("loginBox-active");
    //      }
    //      makeActive();
    // })

    // production.addEventListener("click", ()=> {
    //     function makeActive() {
    //         investor.classList.remove("loginBox-active");
    //         salepoint.classList.remove("loginBox-active");
    //         production.classList.add("loginBox-active");
    //      }
    //      makeActive();
    // })
