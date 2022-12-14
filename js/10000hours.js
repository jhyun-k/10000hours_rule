const inp_text = document.querySelector('.text');
const inp_time = document.querySelector('.time');
const bigTxt1 = document.querySelector('.big_txt1')
const bigTxt2 = document.querySelector('.big_txt2')

const yellowBtn = document.querySelector('.yellow_btn')
const goBtn = document.querySelector('.go_btn')
const endBtn = document.querySelector('.end_btn')

const modal = document.querySelector('.cont-modal')
const result = document.querySelector('.result')

const loadImg = document.querySelector('.loading_img')

yellowBtn.addEventListener('click',()=>{
    result.style.display='none'
    loadImg.classList.add('show');

    setTimeout(() => {
        loadImg.classList.remove('show')
    }, 1500);

    setTimeout(() => {
        let time = inp_time.value   
        console.log(time)
        bigTxt1.textContent = inp_text.value;
        bigTxt2.textContent = Math.round(10000/time)
    
        if(inp_text.value==''|| time==''){
            alert('값을 입력해주세요')
        }else{
        result.style.display='block'
        }
    }, 1500);

})


goBtn.addEventListener('click',()=>{
    modal.style.display = 'block'
})

endBtn.addEventListener('click',()=>{
    modal.style.display = 'none'
})