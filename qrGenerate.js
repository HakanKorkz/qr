const button=document.getElementById("qr-generate")

button.addEventListener("click",async ()=>{
 const data=await getFetch().then(r => r)

    let url=""
    data.forEach( (d) =>{
        url += `http://localhost/qr/data.php?otel=${d.otel}&oda_no=${d.odaNo}&oda_fiyat=${d.fiyat} \n`
    })
    //url=`http://localhost/qr/data.php?otel=${data.otel}&oda_no=${data.odaNo}}&oda_fiyat=${data.fiyat}`
   const preview=document.getElementById("preview")
    let typeNumber;

    // typeNumber=crtOpt('' + 0, 'Auto Detect');
    // for (let i = 1; i <= 40; i += 1) {
    //     typeNumber=crtOpt('' + i, '' + i);
    // }
    typeNumber = '0';
    let errorCorrectionLevel = 'H';
    let qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(url);
    qr.make();
    preview.innerHTML = qr.createImgTag();
})

const getFetch = async () => {
    return await fetch("http://localhost/qr/data.php", {
        headers: {
            "Content-Type": "application/json",
        }
    }).then(response => response.json()).catch(error => error)
}

const crtOpt = function(value, label) {
    let opt = document.createElement('option');
    opt.appendChild(document.createTextNode(label) );
    opt.value = value;
    return opt;
};
