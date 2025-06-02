const letters = ['a', 'b', 'c', 'ch', 'd', 'dh', 'e', 'f', 'g', 'gh', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ng', 'o', 'oo', 'ou', 'ow', 'oi', 'oy', 'p', 'ph', 'qu', 'r', 's', 'sh', 't', 'th', 'u', 'ur', 'v', 'w', 'wh', 'x', 'y', 'z']
;
let remainingLetters = [...letters];

function showRandomLetter() {
    if (remainingLetters.length === 0) {
        alert('All letters are done! Restarting the list.');
        remainingLetters = [...letters];
    }

    const randomIndex = Math.floor(Math.random() * remainingLetters.length);
    const randomLetter = remainingLetters.splice(randomIndex, 1)[0];
    document.getElementById('letter').textContent = randomLetter;
}


const words = [
    { pl: "Filar", ru: "Столб" },
    { pl: "Wspaniałe", ru: "Замечательно" },
    { pl: "Sprawia", ru: "Делает" },
    { pl: "Spotkać", ru: "Встретить" },
    { pl: "Troska", ru: "Забота" }
];

const wordList = document.getElementById("word-list");

words.forEach(word => {
    const span = document.createElement("span");
    span.textContent = word.pl;
    span.classList.add("word");
    span.onclick = () => {
        span.textContent = span.textContent === word.pl ? word.ru : word.pl;
    };
    
    const p = document.createElement("p");
    p.appendChild(span);
    wordList.appendChild(p);
});