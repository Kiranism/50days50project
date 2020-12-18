const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// search.forEach((search) => {
//     document.querySelector('.input').classList.add('input');
//     document.querySelector('.input').classList.remove('input');
    
// })


btn.addEventListener ('click', () => {
    search.classList.toggle('active')
    input.focus()
})