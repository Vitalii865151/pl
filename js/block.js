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
            <a href="/pl/index.html" class="button_start">Strona główna</a>
            <a href="/pl/zasady.html" class="button_start">Zasady</a>
            <a href="/pl/alphabet.html" class="button_start">Alfabet z transkrypcją</a>
            <a href="/pl/alphabet2.html" class="button_start">Próba alfabetu</a>
            <a href="/pl/words.html" class="button_start">Słowa</a>
            <a href="/pl/words2.html" class="button_start">Próba słowa</a>
            <a href="/pl/opis.html" class="button_start">Opis</a>
            <a href="/pl/dialogi.html" class="button_start">Dialogi</a>
            <a href="/pl/historie.html" class="button_start">Historie</a>
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
