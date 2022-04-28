const apiURL = 'https://api.adviceslip.com/advice';
const card = document.getElementById('advice');
const btn = document.getElementById('btn');

const advice = () => {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => displayAdvice(data));
}


const displayAdvice = (data) => {
    const html = `
    <span>ADVICE #${data.slip.id}</span>
    <h1>"${data.slip.advice}"</h1>
    `;

    card.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', advice);
btn.addEventListener('click', advice);

