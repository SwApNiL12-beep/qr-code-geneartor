let qrprint= document.querySelector("#input")
let button= document.getElementById("qr-button")
let qrimg=  document.getElementById("qr-image")

button.addEventListener("click", ()=>{
    const inputvalue= qrprint.value
    if(!inputvalue ){
        alert("Please Enter a Valid URL")
        return
    }
    else{
        qrimg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
        arimg.alt=`QR code for ${inputvalue}`
    }
})
