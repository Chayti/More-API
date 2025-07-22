const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
const displayQuotes = (quotes) => {
    const block = document.getElementById('block-q');
    const p = document.createElement('p');
    p.innerHTML = `"${quotes.quote}"`;
    block.appendChild(p);


}