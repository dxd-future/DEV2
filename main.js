let editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai"); // Выбор темы
editor.session.setMode("ace/mode/html"); // Установка языка

document.querySelector('#back_lvl').addEventListener('click', back_lvl);
document.querySelector('#next_lvl').addEventListener('click', next_lvl);
document.querySelector('.update_code_btn').addEventListener('click', update_code);

editor.on('change', () => {
    let currentValue = editor.getValue().trim();
    if(currentValue != ''){
        document.querySelector('.update_code_btn').disabled = false;
    }else{
        document.querySelector('.update_code_btn').disabled = true;
    }
});


let directory = {
    html:[
        {
            id: 1,
            info: "В начале работы тебе необходимо создать структуру приложения, делается это с помощью тегов. Тег — это метка у контента. Метки объясняют, что это за контент и о чем он.",
            tag: "",
            tag_content: "",
            type: "",
        },
        {
            id: 2,
            info: "Класс (class) тега — это атрибут который задаёт имя любому элементу на странице. Подходит любому тегу, в дальнейшем будет необходим.",
            tag: "",
            tag_content: "",
            type: ""
        },
        {
            id: 3,
            info: "Заголовок (h1) - элемент предназначенный для объявления заголовка.",
            tag: "h1",
            tag_content: "Заголовок",
            type: "",
            class: "title"
        },
        {
            id: 4,
            info: "Div — это элемент контейнера, используемый для группировки и упорядочивания тегов на веб-странице.",
            tag: "",
            tag_content: "Содержимое",
            type: "",
            class: "box"
        },
        {
            id: 5,
            info: "Кнопка (Button) - элемент который позволяет пользователям взаимодействовать с веб-страницей, выполняя определенные действия.",
            tag: "button",
            tag_content: "Кнопка",
            type: "",
            class: "btn"
        },
        {
            id: 6,
            info: "Тип (type) тега — это атрибут который задаёт тип любому элементу на странице.",
            tag: "",
            tag_content: "",
            type: ""
        },
        {
            id: 7,
            info: "Инпут (input) type text - элемент, который предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.",
            tag: "input",
            tag_content: "",
            type: "text",
            class: "input_name"
        },
        {
            id: 8,
            info: "Инпут (input) type checkbox - элемент, который предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.",
            tag: "input",
            tag_content: "",
            type: "checkbox",
            class: "checkbox_choose"
        }
    ],
    css:[

    ],
    js:[

    ]
}