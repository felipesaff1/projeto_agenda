const agenda = [];
const contatos = [];
let linhas='';
function abrirModal(){
    const modal = document.getElementById('janela');
    modal.classList.add('abrir');
}
function fecharModal(){
    const modal = document.getElementById('janela');
    modal.classList.remove('abrir');
}
function adicionar(){
    adicionaLinha();
    atualizaTabela();
    const modal = document.getElementById('janela');
    modal.classList.remove('abrir');
}
function adicionaLinha(){
    const inputNome = document.getElementById('nome-agenda');
    const inputNumero = document.getElementById('numero-agenda');
    
    if (agenda.includes(inputNome.value)){
        alert (`O Contato: ${inputNome.value} já foi inserido`);
    }else{
        agenda.push(inputNome.value);
        contatos.push(parseFloat(inputNumero.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
        linhas +=linha;
    };
    inputNome.value='';
    inputNumero.value='';

}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    
}