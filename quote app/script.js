const quoteEl = document.getElementById('quote')
const quoteBtn = document.getElementById('quoteBtn')
const author = document.getElementById("author")

quoteBtn.addEventListener('click', generateQuote)

// generateQuote()

function generateQuote() {
    fetch('https://api.quotable.io/random')
    // .then(res => console.log(res))
    // youtube https://www.youtube.com/watch?v=aUPeASfr944
    .then(res => res.json())
    .then(data => {
        quoteEl.innerHTML = `"${data.content}"`
        author.innerHTML = `- ${data.author}`
    })

}