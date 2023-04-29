const form = document.querySelector('#formAtividade') 
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado"> aprovado</span>'
const spanReprovado = '<span class="resultado reprovado"> reprovado</span>'
const notaMinima = parseFloat(prompt('Digita a nota minima:'))

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault()

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha(){
    const inputNomeAtividade = document.querySelector('#nomeAtividade');
    const inputNotaAtividade = document.querySelector('#notaAtividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`a atividade ${inputNomeAtividade.value} ja foi inserida`);
    }else{

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = "<tr>";
    linha += `<td> ${inputNomeAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`;
    linha += "<tr>";

    linhas += linha;
}
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){

    const mediaFinal = calcMedia();

    document.querySelector('#mediaFinalValor').innerHTML = mediaFinal.toFixed(2);
    document.querySelector('#mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calcMedia(){
    let somaDasNotas = 0;
    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}