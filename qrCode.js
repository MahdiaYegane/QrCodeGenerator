//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mah

let imgBox=document.getElementById("imgBox")
let qrImg=document.getElementById("qrImg")
let qrText=document.getElementById("inputQr")
let btnGenerateQrCode=document.querySelector(".btnGenerateQrCode")
let textError=document.querySelector(".err")

function generateApi(){

if(qrText.value==""){
    imgBox.classList.add("hide")
    textError.style.display="block"
}
else{
qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
imgBox.classList.add("show")
console.log(qrText.value) 
textError.style.display="none"
imgBox.style.display="block"
}

}

btnGenerateQrCode.addEventListener("click",function(){
    generateApi()
})

