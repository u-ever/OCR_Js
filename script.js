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


// //IIFE Immediately Invoked Function Expression
// ;(function(){

//     //Pega os elementos da tela e declara como constantes
//     const leitorDeArquivos = new FileReader(),
//             formulario = document.querySelector('.upload-imagem'),
//             previaDaImagem = document.querySelector('.imagem'),
//             inputArquivo = document.querySelector('.upload'),
//             btnAtualiza = document.querySelector('.btnAtualiza');

    
//     function leEAtualiza(){
//         //pega o arquivo enviado e guarda nesta variavel
//         let imagemEnviada = inputArquivo.files[0];

//         //Usa a função do objeto leitor de arquivos, que lê o arquivo, e consegue reaproveita-lo para usar o arquivo como uma URL
//         leitorDeArquivos.readAsDataURL(imagemEnviada);
        
//         //Após leitura da imagem (evento load), a função de callback define o valor do src da imagem de prévia com o valor do resultado da leitura do leitor de arquivos
//         leitorDeArquivos.addEventListener('loadend', function(load){
            
//             //veja no console o que o resultado do leitor de arquivos :)
//             console.log(load.target.result);
//             //define o caminho da imagem com o caminho criado pelo leitor de arquivos
//             previaDaImagem.src = load.target.result
//         })
//     }

//     //Quando o formulário for enviado:
//     formulario.addEventListener('submit', function(submit){
//         //empede o recarregamento da página
//         submit.preventDefault();

//         leEAtualiza();
//     })

//     //Ou quando clica no boão atualizar
//     btnAtualiza.addEventListener('click', function(){
//         leEAtualiza();
//     })
    

// })()