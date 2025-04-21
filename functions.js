let n = 1;


let back_lvl = () => {
    if(n > 1){
        n--;
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
        document.querySelector('.tag-container').innerHTML = `
        <${directory.html[n - 1].tag} class="test-tag">${directory.html[n - 1].tag_content}</${directory.html[n - 1].tag}>
        `;
    }
    if(directory.html[n - 1].type != ''){
        document.querySelector('.tag-container').innerHTML = `
        <${directory.html[n - 1].tag} style="width: 30px;" class="test" type="${directory.html[n].types}">${directory.html[n - 1].tag_content}</${directory.html[n - 1].tag}>
        `;
    }
}

let next_lvl = () => {
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
            <${directory.html[n - 1].tag} style="width: 30px;" class="test-tag" type="${directory.html[n - 1].type}">${directory.html[n - 1].tag_content}</${directory.html[n - 1].tag}>
            `;
        }else{
            document.querySelector('.tag-container').innerHTML = `
            <${directory.html[n - 1].tag} class="test-tag">${directory.html[n - 1].tag_content}</${directory.html[n - 1].tag}>
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
