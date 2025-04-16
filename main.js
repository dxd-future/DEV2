var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai"); // Выбор темы
editor.session.setMode("ace/mode/html"); // Установка языка


// setInterval(a, 1000)
document.querySelector('#back_lvl').addEventListener('click', back_lvl)
document.querySelector('#next_lvl').addEventListener('click', next_lvl)
document.querySelector('#clear_code_btn').addEventListener('click', clear_code)
document.querySelector('#run_code_btn').addEventListener('click', run_code)

// let directory = {
//     html:[
//         {
//             id:"1",
//             title: "",
            
//         },
//         {
            
//         },
//         {

//         }           
//     ],
//     css:[

//     ],
//     js:[
//     ]
// }