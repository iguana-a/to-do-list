import './style.css'

const lista = document.getElementById('lista') as HTMLUListElement;
const campoTexto = document.getElementById('campo-texto') as HTMLInputElement;
const botaoAdicionar = document.getElementById('botao-adicionar') as HTMLButtonElement;

botaoAdicionar.addEventListener('click', ()=>{
    const li = document.createElement('li');
    const botaoRemover = document.createElement('button');
    li.textContent = campoTexto.value;
    botaoRemover.textContent = 'x';
    li.appendChild(botaoRemover);
    lista.appendChild(li);
    campoTexto.value='';
    botaoRemover.addEventListener('click', ()=>{
        li.remove();
    })
});

