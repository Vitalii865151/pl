document.addEventListener("DOMContentLoaded", function() {
    let block = document.createElement("div");
    block.innerHTML = `
        <div class="header-menu">
            <a href="/pl/index.html" class="button_start">Polnisch lernen</a>
            <a href="/pl/index_de.html" class="button_start">Startseite</a>
            <a href="/pl/alphabet_de.html" class="button_start">Alphabet mit Transkription</a>
            <a href="/pl/test_de.html" class="button_start">Alphabettest</a>
            <a href="/pl/words_de.html" class="button_start">Worte</a>
            <a href="/pl/test2_de.html" class="button_start">Worttest</a>
            <a href="/pl/historie_de.html" class="button_start">Geschichten</a>
        </div>
    `;
    document.body.insertAdjacentElement("afterbegin", block);
});
