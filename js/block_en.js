document.addEventListener("DOMContentLoaded", function () {
    // ✅ Стили для html и body, чтобы использовать Flexbox
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";

    // ✅ Создаём контейнер для основного содержимого
    let content = document.createElement("div");
    content.className = "content";
    content.style.flex = "1";
    content.style.padding = "20px";

    // Перемещаем всё текущее содержимое body внутрь .content
    const existingChildren = Array.from(document.body.childNodes);
    existingChildren.forEach(child => content.appendChild(child));
    document.body.appendChild(content);

    // ✅ Меню (вставляем в начало content)
    let header = document.createElement("div");
    header.innerHTML = `
        <div class="header-menu">
            <a href="/pl/en/index_en.html" class="button_start">Home Page</a>
            <a href="/pl/en/zasady_en.html" class="button_start">Rules</a>
            <a href="/pl/en/alphabet_en.html" class="button_start">Alphabet with Transcription</a>
            <a href="/pl/en/alphabet2_en.html" class="button_start">Alphabet Practice</a>
            <a href="/pl/en/words_en.html" class="button_start">Words</a>
            <a href="/pl/en/words2_en.html" class="button_start">Word Practice</a>
            <a href="/pl/en/music/music_lyrics_en.html" class="button_start">Music</a>
            <a href="/pl/en/opis_en.html" class="button_start">Description</a>
            <a href="/pl/en/dialogi_en.html" class="button_start">Dialogues</a>
            <a href="/pl/en/historie_en.html" class="button_start">Stories</a>             
        </div>
    `;
    content.insertAdjacentElement("afterbegin", header);

    // ✅ Футер (внизу, всегда)
    let footer = document.createElement("div");
    footer.innerHTML = `
        <div style="background-color: #84898b; padding: 10px; text-align: center;">
            <a href="https://t.me/twoj_nick" target="_blank" style="text-decoration: none; color: #000; font-weight: bold;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" 
                     alt="Telegram" width="20" style="vertical-align: middle; margin-right: 5px;">
                @My_acc_tg
            </a>
        </div>
    `;
    document.body.appendChild(footer);
});
