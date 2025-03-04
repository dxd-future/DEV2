let n = 1;
let back_lvl = () => {
    if(n > 1){
        n -= 1;
        document.querySelector(`#tag${n}`).style.display = 'flex';
        document.querySelector(`#tag${n + 1}`).style.display = 'none';
    }
    if(n != 1){
        document.querySelector('#num1').textContent = n - 1;
    }else{
        document.querySelector('#num1').textContent = '';
    }
    if(n != 8){
        document.querySelector('#num2').textContent = n + 1;
    }
        document.querySelector('#num').textContent = n;     

}
let next_lvl = () => {
    if(n < 8){
        n += 1;
        document.querySelector(`#tag${n - 1}`).style.display = 'none';
        document.querySelector(`#tag${n}`).style.display = 'flex';
    }
    if(n != 1){
        document.querySelector('#num1').textContent = n - 1;
    }
    if(n != 8){
        document.querySelector('#num2').textContent = n + 1;
    }else{
        document.querySelector('#num2').textContent = '';
    }
        document.querySelector('#num').textContent = n;
}
let run_code = () => {
    document.querySelector('.table').innerHTML += `${editor.getValue()}`;
}
let clear_code = () => {
    document.querySelector('.table').innerHTML = '';
}