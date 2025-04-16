var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai"); // Выбор темы
editor.session.setMode("ace/mode/html"); // Установка языка


// setInterval(a, 1000)
document.querySelector('#back_lvl').addEventListener('click', back_lvl)
document.querySelector('#next_lvl').addEventListener('click', next_lvl)
document.querySelector('.update_code_btn').addEventListener('click', update_code)

let directory = {
    html:[
        {
            id: 1,
            info: "В начале работы тебе необходимо создать структуру приложения, делается это с помощью тегов. Тег — это метка у контента. Метки объясняют, что это за контент и о чем он. Но прежде чем начать ознакомся с этими самыми тегами.",
            tag: "",
            tag_content: "",
            type: ""
        },
        {
            id: 2,
            info: "Класс(class) тега — это атрибут который задаёт имя любому элементу на странице. Подходит любому тегу, в дальнейшем будет необходим.",
            tag: "",
            tag_content: "",
            type: ""
        },
        {
            id: 3,
            info: "Заголовок(h1) - элемент предназначенный для объявления заголовка.",
            tag: "h1",
            tag_content: "Текст",
            type: ""
        },
        {
            id: 4,
            info: "Div — это элемент контейнера, используемый для группировки и упорядочивания тегов на веб-странице.",
            tag: "div",
            tag_content: "Содержимое",
            type: ""
        },
        {
            id: 5,
            info: "Кнопка(Button) - элемент который позволяет пользователям взаимодействовать с веб-страницей, выполняя определенные действия.",
            tag: "button",
            tag_content: "Кнопка",
            type: ""
        },
        {
            id: 6,
            info: "Тип(type) тега — это атрибут который задаёт тип любому элементу на странице.",
            tag: "",
            tag_content: "",
            type: ""
        },
        {
            id: 7,
            info: "Инпут(input) - элемент, который предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.",
            tag: "input",
            tag_content: "",
            type: ""
        },
        {
            id: 8,
            info: "Инпут(input) - элемент, который предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.",
            tag: "input",
            tag_content: "",
            type: ""
        }
    ],
    css:[

    ],
    js:[

    ]
}