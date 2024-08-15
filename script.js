let img = document.getElementById('img');
let button = document.getElementById('button');
let input = document.getElementById('input');
let imgbox = document.getElementById('img-box')

button.addEventListener('click',function(){
    if(input.value === ''){
        alert('Write Something In Input')
    }else{

        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        imgbox.classList.add('show-img')
    }   
})