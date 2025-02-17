document.addEventListener("DOMContentLoaded", function() {
    let block = document.createElement("div");
    block.innerHTML = `
        <div class="header-menu">
            <a href="/pl/en/index_en.html" class="button_start">Nauka angielskiego</a>
            <a href="/pl/index.html" class="button_start">Strona główna</a>
            <a href="/pl/alphabet.html" class="button_start">Alfabet z transkrypcją</a>
            <a href="/pl/alphabet2.html" class="button_start">Próba alfabetu</a>
            <a href="/pl/words.html" class="button_start">Słowa</a>
            <a href="/pl/words2.html" class="button_start">Próba słowa</a>
            <a href="/pl/historie.html" class="button_start">Historie</a>
        </div>
    `;
    document.body.insertAdjacentElement("afterbegin", block);
});
