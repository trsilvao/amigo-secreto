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

// 2 - Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chama da novaLista. Imprima novaLista no console.

let minhaLista = [1,2,3,3];
let outraLista = [4,5,6,5,6,4];
let novaLista = minhaLista.concat(outraLista);

console.log(novaLista);

// 3 - Remova o último elemento de novaLista. Imprima novaLista após a remoção.

novaLista.pop();
console.log(novaLista);

// 4 - Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

embaralhar(novaLista);

console.log(novaLista);

// 5 - Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.

function removerDuplicatas (array) {
    
    let meuSet = new Set(array);
    let novaNovaLista = [...meuSet];

    return novaNovaLista;
}

let novaListaSemDuplicatas = removerDuplicatas(novaLista);
console.log(novaListaSemDuplicatas);


// Função para remover duplicatas de um array
// function removerDuplicatas(array) {
//   return [...new Set(array)];
// }

// Testando a função com novaLista
// let novaListaSemDuplicatas = removerDuplicatas(novaLista);
// console.log("Remover duplicatas:", novaListaSemDuplicatas);