//to toggle divs on click

const tabButtons = document.querySelectorAll('.toggle')
const tabContents = document.querySelectorAll('.target')


tabButtons.forEach(btn => {
    btn.addEventListener('click', ()=> {
       const target = btn.getAttribute('target')
       tabContents.forEach(content => {
        content.classList.remove('active');
       });
       document.querySelector(`.tab-${target}-content`).classList.add('active');
    
    })
})

var btnContainer = document.getElementById("toggle-menu");
var btns = btnContainer.getElementsByClassName("toggle");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("change");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" change", "");
    }
    this.className += " change";
    });
}