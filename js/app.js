let amigos = [];
let lista = document.getElementById('lista-amigos');
let amigo = document.getElementById('nome-amigo');
let sorteio = document.getElementById('lista-sorteio');

function adicionar() {

    amigos.push(amigo.value);

    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value;
    }
    
    amigo.value = "";

    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    embaralhar(amigos);

    
     
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length -1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        }else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br/>';
        }
    }

}

function excluirAmigo(index) {
    amigos.splice(index,1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    sorteio.innerHTML = '';
}

function atualizarLista() {
    
    lista.innerHTML = ''; 

    for(let i =0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function(){
            excluirAmigo(i);
        })

        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}