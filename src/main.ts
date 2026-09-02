import './style.css'

const lista = document.getElementById('lista') as HTMLUListElement;
const campoDigitar = document.getElementById('campo-texto') as HTMLInputElement;
const botaoAdicionar = document.getElementById('botao-adicionar') as HTMLButtonElement;

botaoAdicionar.addEventListener('click', ()=>{
    const li = document.createElement('li');
    const botaoRemover = document.createElement('button');
    li.textContent = campoDigitar.value;
    botaoRemover.textContent = 'remover';
    li.appendChild(botaoRemover);
    lista.appendChild(li);
    campoDigitar.value='';
    botaoRemover.addEventListener('click', ()=>{
        li.remove();
    })
});

