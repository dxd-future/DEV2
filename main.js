let editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");

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
            info: "А вот и первый уровень. На нем ты будешь использовать язык гипертекстовой разметки HTML, он нужен что бы создать структуру страницы. Также ты ознакомишься с первыми тегами, они представляют главные элементы для взаимодействия со страницей",
            tag: "",
            tag_content: "",
            type: "",
            class: ""
        },
        {
            id: 2,
            info: "Кнопка - наверно самый распрастранённый тег, как не сложно догадаться на неё можно нажать и тогда что то произойдет.",
            tag: "button",
            tag_content: "Кнопка",
            type: "",
            class: "btn_test"
        },
        {
            id: 3,
            info: "",
            tag: "",
            tag_content: "",
            type: "",
            class: ""
        },
        {
            id: 4,
            info: "",
            tag: "",
            tag_content: "",
            type: "",
            class: ""
        },
        {
            id: 5,
            info: "",
            tag: "",
            tag_content: "",
            type: "",
            class: ""
        },
        {
            id: 6,
            info: "",
            tag: "",
            tag_content: "",
            type: "",
            class: ""
        },
        {
            id: 7,
            info: "",
            tag: "",
            tag_content: "",
            type: "",
            class: ""
        },
        {
            id: 8,
            info: "",
            tag: "",
            tag_content: "",
            type: "",
            class: ""
        }
    ],
    css:[

    ],
    js:[

    ]
}