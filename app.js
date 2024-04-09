const wrapper=document.querySelector('.wrapper'),
qInpt=wrapper.querySelector('.form input'),
gBtn=wrapper.querySelector('.form button'),
gImg=wrapper.querySelector('.qr img');

gBtn.addEventListener('click', ()=>{
    let qrV=qInpt.value;
    if(!qrV) return; // bow bosa nixera bomidi
    gBtn.innerText='Generating QR CODE...';
    // console.log(qrV)
    gImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrV} `;
    gImg.addEventListener('load', ()=>{
        wrapper.classList.add('active');
        gBtn.innerText='Generate QR CODE';
    })
})
 
qInpt.addEventListener('keyup', ()=>{
    if(!qInpt.value){
    wrapper.classList.remove('active');
    }
})