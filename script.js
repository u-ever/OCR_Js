function screenShot() {
    let res = document.querySelector('div#resultado')
    res.innerHTML = 'Lendo o texto da imagem... Aguarde.'

    Tesseract.recognize(
        'print.png',
        'eng',
        { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
        res.innerHTML = text;
        })
   

}


res = document.getElementById('#resultado')
res.innerHTML = 'Lendo o texto da imagem... Aguarde.'