let n = 1;

let back_lvl = () => {
    if(n > 1){
        n -= 1;
    console.log(n);
    document.querySelector(`#tag${n}`).style.display = 'flex';
    document.querySelector(`#tag${n + 1}`).style.display = 'none';
    }
    document.querySelector('#num').textContent = n
}
let next_lvl = () => {
    if(n < 8){
        n += 1;
        document.querySelector(`#tag${n - 1}`).style.display = 'none';
        document.querySelector(`#tag${n}`).style.display = 'flex';
    }
    document.querySelector('#num').textContent = n
}
let a = () => {
    document.querySelector('.table').innerHTML += `${editor.getValue()}`;
}

setInterval(a , 500);