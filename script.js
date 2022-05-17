var selectedRow = null

//Atualização dos conteúdos a partir de eventos
function onFormSubmit(e) {
	event.preventDefault();
        var formData = lerNota();
        if (selectedRow == null){
            inserirNota(formData);
		}
        else{
            atualizarNota(formData);
		}
        resetarNota();    
}

//Atualizando a tabela para ver os dados salvos 
function lerNota() {
    var formData = {};
    formData["titulo"] = document.getElementById("titulo").value;
    formData["conteudo"] = document.getElementById("conteudo").value;
    return formData;
}

//Inserindo novas notas, celula a celula pegando o que foi digitado nos inputs e armazenando localmente
function inserirNota(data) {
    var table = document.getElementById("notas").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.titulo;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.conteudo;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = `<button onClick="editarNota(this)" class="button-interno">Editar</button> <button onClick="deletarNota(this)" class="button-interno">Apagar</button>`;
}

//Editando as notas
function editarNota(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("titulo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("conteudo").value = selectedRow.cells[1].innerHTML;
}

//Atualizando as notas 
function atualizarNota(formData) {
    selectedRow.cells[0].innerHTML = formData.titulo;
    selectedRow.cells[1].innerHTML = formData.conteudo;
}

//Deletando as notas criadas
function deletarNota(td) {
    if (confirm('🤨 Vish, você quer mesmo apagar essa nota?')) {
        row = td.parentElement.parentElement;
        document.getElementById('notas').deleteRow(row.rowIndex);
        resetarNota();
    }
}

//Resetando as notas
function resetarNota() {
    document.getElementById("titulo").value = '';
    document.getElementById("conteudo").value = '';
    selectedRow = null;
}
