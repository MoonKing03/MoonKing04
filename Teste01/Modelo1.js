function Click1(caminho,texto){
    const container = document.getElementById('imagem-container');
    container.innerHTML = '';
    const img = document.createElement('img'); 
    img.src = caminho;
    img.alt = texto;
    img.style.color='blue'
    img.style.width='1000px';
    container.style.textAlign='center'
    const caption = document.createElement('p');
    caption.textContent = texto;
    caption.style.fontSize = '40px';
    caption.style.marginTop='5px';
    caption.style.color='white';
    container.appendChild(img);
    container.appendChild(caption);

}