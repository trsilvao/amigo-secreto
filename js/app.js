let amigos = [];
let lista = document.getElementById('lista-amigos');
let amigo = document.getElementById('nome-amigo');
let sorteio = document.getElementById('lista-sorteio');

function adicionar() {

    //para impedir que add espaços vazios
    if (amigo.value =="") {
        return alert('Digite um nome');
    }

    //Impede que add nomes repetidos e tambem normaliza tudo como minusculo.
    if (amigos.map(i => i.toLowerCase()).includes(amigo.value.toLowerCase())) {
        return alert("Este nome ja foi adicionado");
    }

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

    //Para impedir que o sorteio ocorra com menos de 3 pessoas.
    if (amigos.length <= 2){
        return alert("A lista deve conter ao menos 3 nomes")
    }

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


// >>>>>>>>>>>> Desafios: hora da prática <<<<<<<<<<<<<<


// 1: Crie uma função que valide se um número é positivo, negativo ou zero.

let numero = -21;

function validacaoNumero(){
    if (numero <0) {
        console.log('Negativo');
    } else if (numero > 0){
        console.log('Positivo');
    } else {
        console.log('zero');
    }
}

validacaoNumero();

// 2: Implemente uma função que verifique se uma pessoa é maior de idade.

let idade = 17;

function verificarIdade(){
    if (idade >=18) {
        console.log('maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

verificarIdade();

// 3: Desenvolva uma função que valide se uma string é vazia ou não.

let conteudo = "";

function verificarString(){
    if(typeof conteudo === 'string' && conteudo !== ""){
        console.log('Esta variavel contem uma string');
    } else if (typeof conteudo === 'string' && conteudo === ""){
        console.log('Esta variavel esta vazia');
    } else {
        console.log('O conteudo desta variavel não é um string');
    }
}

verificarString();

// 4:Crie uma função que determine se um ano é bissexto
// tive que olhar pq n tinha ideia de como calcular se um ano é ou n bissexto

function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}

console.log(verificarAnoBissexto(2028))

// 5: Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
// quando testei um codigo parecido com o do professor vi que se eu deixasse a string vazia ele considerava que tinha um zero ali, ou se eu digitace um numero dentro de uma string ele iria concatenar os dois numero Ex: a = "10" b = 52 o resultado da soma n seria 62 mais sim 1052. ai fui na ia e ela me deu a ideia de usar isFinite e parece esta funcionando bem

let numeroUm = "";
let numeroDois = 52;

function calcularMedia(a,b){
    if((a !== "" && Number.isFinite(Number(a)))&&(b !== "" && Number.isFinite(Number(b)))){
        let calculando = (a+b)/2;
        console.log(calculando); 
    } else {
        console.log('confira os valores digitados por favor.');              
    }
}

calcularMedia(numeroUm,numeroDois);

// 6: console.log('confira os valores digitados por favor.');      

let umArray = [1,2,3,4,5,6,7,8,9,10];

function calculandoTamanhoDoArray(array){
    let tamanho = array.length;
    console.log(tamanho);
}

calculandoTamanhoDoArray(umArray);

// 7: Crie um array e utilize a função includes para verificar se um elemento específico está presente

console.log('O array contem o numero 11?', umArray.includes(11));


// 8: Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

function arrayEElemento(a,e){
    console.log('O array contem o elemento?', a.includes(e));
}

arrayEElemento(umArray,numeroDois);

// 9: Crie um array de strings e utilize includes para verificar se uma determinada string está presente.

let nomesDoPovo = ['tairone','nathalia','rosangela', 'leonor', 'marcos', 'ricardo', 'daniella', 'ricardo jr']

console.log(`O array contem a String tairone?`, nomesDoPovo.includes('tairone'));

// 10: Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.


function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

let estudanteCadastrados = [
    {id:1, nome: 'tairone', idade: 35, curso: 'js'},
    {id:2, nome: 'nathalia', idade: 41, curso: 'idiomas'},
    {id:3, nome: 'rosangela', idade: 55, curso: 'jardinagem'},
    {id:4, nome: 'leonor', idade: 60, curso: 'olaria'},
    {id:5, nome: 'marcos', idade: 56, curso: 'vendas'},
];

let estudantePocurado = {id:1, nome: 'tairone', idade: 35, curso: 'js'};

let estudantePocuradoDois = {id:6, nome: 'ricardo', idade: 65, curso: 'motorista'};

let resultadoDaBusca = verificarObjetoNoArray(estudanteCadastrados,estudantePocuradoDois);

if (resultadoDaBusca) {
    console.log('estudante encontrado');
} else {
    console.log('N encontramos');
}

// 11: Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

let umArry = [1,2,3,4,5,6,7,8,9,10];


function calculandoArry(arr){

    let somaDosPares = 0;
    let produtoDosImpares = 1;

    //1 pegar o comprimento do array
    let tamanhoDoArry = arr.length;
    //2 fazer um if que ira verificar se o conteudo é par
    for(let i=0; i < tamanhoDoArry; i++){
        if(arr[i] % 2 === 0){
            somaDosPares += arr[i];
        } else {
            produtoDosImpares *= arr[i];
        }
    }
    console.log(`O resultado da soma dos numeros pares  é ${somaDosPares}, e o produto dos impares é ${produtoDosImpares}`);
}

calculandoArry(umArry);