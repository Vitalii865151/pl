const letters = ['a', 'ą', 'b', 'c', 'ch', 'cz', 'ć', 'd', 'dz', 'dź', 'dż', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p','r','rz','s','sz','ś','t','u','w','y','z','ź','ż'];
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


function toggleTranslation(element, word1, word2) {
    element.textContent = element.textContent === word1 ? word2 : word1;
}


