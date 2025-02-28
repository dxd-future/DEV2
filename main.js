var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai"); // Выбор темы
editor.session.setMode("ace/mode/html"); // Установка языка


// setInterval(a, 1000)
document.querySelector('#back_lvl').addEventListener('click', back_lvl)
document.querySelector('#next_lvl').addEventListener('click', next_lvl)