let toHTML = ()=>{
    // document.querySelector('.main_menu').style.display = 'none';
    // document.querySelector('#box1').style.display = 'block';
    // document.querySelector('.box').innerHTML += `
    // <button class="btnNextCss" type="button">NextLVL</button>
    // `;
    // const btnUnlockCss = document.querySelector('.btnNextCss')

    // btnUnlockCss.addEventListener('click', ()=>{
    //     document.querySelector('.box').classList.add('hidden')
    //     document.querySelector('.box1').classList.remove('hidden')
    //     document.querySelector('.btnlvl2').disabled = false;
    // })
}
let toCSS = ()=>{
    // document.querySelector('.main_menu').style.display = 'none';
    // document.querySelector('#box2').style.display = 'block';
    // document.querySelector('.box3').innerHTML = `
    // <button class="btnNextJs" type="button">NextLVL</button>
    // `;
    // const btnUnlockJs = document.querySelector('.btnNextJs')

    // btnUnlockJs.addEventListener('click', ()=>{
    //     document.querySelector('.box3').classList.add('hidden')
    //     document.querySelector('.box1').classList.remove('hidden')
    //     document.querySelector('.btnlvl3').disabled = false;
    // })
}
let toJS = ()=>{
    // document.querySelector('.maim_menu').style.display = 'none';
    // document.querySelector('#box').style.display = 'flex';
    // document.querySelector('.box4').innerHTML = `
    // <button class="btnBackMenu" type="button">Back Menu</button>
    // `;
    // const btnBackToMenu = document.querySelector('.btnBackMenu')

    // btnBackToMenu.addEventListener('click', ()=>{
    //     document.querySelector('.box4').classList.add('hidden')
    //     document.querySelector('.box1').classList.remove('hidden')
    // })
}

let n = 1;
let back_lvl = () => {
    document.querySelector('.tagbox').innerHTML = '';    
    if(n >= 1){
        n--;
    }
    if(n == 0){
        window.location = 'http://127.0.0.1:5501/index.html';
    }
    document.querySelector('.info').textContent = directory.html[n - 1].info;
    document.querySelector('#num').textContent = n;
    if(n != 1){
        document.querySelector('#num1').textContent = n - 1;
    }else{
        document.querySelector('#num1').textContent = '';
    }   
    if(n != directory.html.length){
        document.querySelector('#num2').textContent = n + 1;
    }
    document.querySelector('#num').textContent = n;
    document.querySelector('.tag-container').innerHTML = '';
    if(directory.html[n - 1].tag != ''){
        if(directory.html[n - 1].type != ''){
            document.querySelector('.tag-container').innerHTML = `
            <${directory.html[n - 1].tag} class="test-tag" type="${directory.html[n - 1].type}">${directory.html[n - 1].tag_content}</${directory.html[n - 1].tag}>
            `;
            document.querySelector('.tagbox').innerHTML += `
                <span style="color: white;">&lt</span>${directory.html[n - 1].tag}<span style="color: #a6e22e;"> type</span><span style="color: white;">=</span><span style="color: #e6cd4a;">"${directory.html[n - 1].type}"</span><span style="color: white;">&gt</span><span style="color: white;">
            `;  
        }else{
            document.querySelector('.tag-container').innerHTML = `
            <${directory.html[n - 1].tag} class="test-tag">${directory.html[n - 1].tag_content}</${directory.html[n - 1].tag}>
            `;
            document.querySelector('.tagbox').innerHTML += `
                <span style="color: white;">&lt</span>${directory.html[n - 1].tag}<span style="color: white;">&gt</span><span style="color: white;">${directory.html[n - 1].tag_content}</span><span style="color: white;">&lt/</span><span>${directory.html[n - 1].tag}</span><span style="color: white;">&gt</span>
            `;  
        }
        
    }
}
let next_lvl = () => {
    
    if(n == directory.html.length){
        // document.querySelector('#box1').style.display = 'none';
        // document.querySelector('.main_menu').style.display = 'block';
        window.location = 'http://127.0.0.1:5501/index.html';
        // document.querySelector('.logo').innerHTML = `Поздравляем! Ты прошел сюда уровень по 1 по HTML, скорее переходи на уровень 2 по CSS`
        document.querySelector('#next_lvl').textContent = "Завершить";
    }
    document.querySelector('.tagbox').innerHTML = '';    
    if(n < directory.html.length){
        n++;
    }
    document.querySelector('#num').textContent = n;
    document.querySelector('.info').textContent = directory.html[n - 1].info;
    if(n != 1){
        document.querySelector('#num1').textContent = n - 1;
    }
    if(n != directory.html.length){
        document.querySelector('#num2').textContent = n + 1;
    }else{
        document.querySelector('#num2').textContent = '';
    }
    document.querySelector('.tag-container').innerHTML = '';

    if(directory.html[n - 1].tag != ''){
        if(directory.html[n - 1].type != ''){
            document.querySelector('.tag-container').innerHTML = `
            <${directory.html[n - 1].tag} class="test-tag" type="${directory.html[n - 1].type}">${directory.html[n - 1].tag_content}</${directory.html[n - 1].tag}>
            `;
            document.querySelector('.tagbox').innerHTML += `
                <span style="color: white;">&lt</span>${directory.html[n - 1].tag}<span style="color: #a6e22e;"><span style="color: #a6e22e;"> class</span><span style="color: white;">=</span><span style="color: #e6cd4a;">"${directory.html[n - 1].class}"</span> type</span><span style="color: white;">=</span><span style="color: #e6cd4a;">"${directory.html[n - 1].type}"</span><span style="color: white;">&gt</span><span style="color: white;">
            `;  
        }else{
            document.querySelector('.tag-container').innerHTML = `
            <${directory.html[n - 1].tag} class="test-tag">${directory.html[n - 1].tag_content}</${directory.html[n - 1].tag}>
            `;
            document.querySelector('.tagbox').innerHTML += `
                <span style="color: white;">&lt</span>${directory.html[n - 1].tag}<span style="color: white;">&gt</span><span style="color: white;">${directory.html[n - 1].tag_content}</span><span style="color: white;">&lt/</span><span>${directory.html[n - 1].tag}</span><span style="color: white;">&gt</span>
            `;  
        }
        
    }

}
let update_code = () => {
    document.querySelector('.table').innerHTML = '';
    document.querySelector('.table').innerHTML += `${editor.getValue()}`;
    if(document.querySelector('.table').innerHTML != ''){
        document.querySelector('.update_code_btn').textContent = "Обновить"
    }
}
let count = 0;

let next_hint = () => {
    count ++;
    if(count == 1){
        document.querySelector('.hint').style.top = `35%`;
        document.querySelector('.hint').style.left = `25%`;     
        document.querySelector('.hint').style.borderRadius = '15px 15px 15px 0px';    
        document.querySelector('.hint_text').textContent = "Это твоя основная рабочая область, в ней ты будешь писать код"
        document.querySelector('.test-tags').style.zIndex = 0;
        document.querySelector('.test-tags').style.border = 'none';
        document.querySelector('#editor').style.zIndex = 999;
        document.querySelector('#editor').style.border = '1px solid orange';
    }else if(count == 2){
        document.querySelector('.hint').style.top = `85%`;
        document.querySelector('.hint').style.left = `29%`;     
        document.querySelector('.hint_text').textContent = "С помощью этих кнопок ты сможешь переключить уровень"
        document.querySelector('#editor').style.zIndex = 0;
        document.querySelector('#editor').style.border = 'none';
        document.querySelector('.lvl_panel').style.zIndex = 999;
        document.querySelector('.lvl_panel').style.border = '1px solid orange';
    }else if(count == 3){
        document.querySelector('.hint').style.top = `85%`;
        document.querySelector('.hint').style.left = `75%`;   
        document.querySelector('.hint').style.borderRadius = '15px 15px 0px 15px';
        document.querySelector('.hint_text').textContent = "Здесь ты сможешь запустить и обновить свой код"
        document.querySelector('.lvl_panel').style.zIndex = 0;
        document.querySelector('.lvl_panel').style.border = 'none';
        document.querySelector('.update_code_btn').style.zIndex = 999;
        document.querySelector('.update_code_btn').style.border = '1px solid orange';
    }else if(count == 4){
        document.querySelector('.hint').style.top = `50%`;
        document.querySelector('.hint').style.left = `80%`;   
        document.querySelector('.hint').style.borderRadius = '0px 15px 15px 15px';
        document.querySelector('.hint_text').textContent = "Тут будет отображаться твой проект"
        document.querySelector('.update_code_btn').style.zIndex = 0;
        document.querySelector('.update_code_btn').style.border = 'none';
        document.querySelector('.table').style.zIndex = 999;
        document.querySelector('.table').style.border = '1px solid orange';
        document.querySelector('.table').style.backgroundColor = 'rgb(220, 220, 220)'
    }else if(count == 5){
        document.querySelector('.shadow').style.display = 'none';
        document.querySelector('.hint').style.display = 'none';
           document.querySelector('.table').style.backgroundColor = 'white'
    }
}