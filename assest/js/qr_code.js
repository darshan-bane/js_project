const qrImg = document.getElementById('qr_img');
const qrText = document.getElementById('qr_text');
const imgBox = document.getElementById('img_box');

function generateQR() {
    if (qrText.value == '') {
        alert('Please enter Text or URL');
        qrImg.src = ''
    }
    else {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    }
}
