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
