const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => quoteDisplay(data));
}

const quoteDisplay = (data) => {
    const container = document.getElementById('quote-container');
    // console.log(data)
    container.innerText = data.quote;
}






loadQuote()