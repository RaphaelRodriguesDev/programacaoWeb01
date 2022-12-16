let selectedRow = null

// Função executada quando o formulário é enviado
const onFormSubmit = () => {
    if (validate()) {
        let formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

// READ
const readFormData = () => {
    let formData = {};
    formData.fullName = document.querySelector("#fullName").value;
    formData.empCode = document.querySelector("#empCode").value;
    formData.salary = document.querySelector("#salary").value;
    formData.city = document.querySelector("#city").value;
    return formData; 
}

// CREATE
const insertNewRecord = (data) => {
    let table = document.querySelector("#employeeList").getElementsByTagName('tbody')[0];
    // Cria uma nova linha e insere dados continuamente ao longo do comprimento da tabela (table.length)
    let newRow = table.insertRow(table.length); // table.length para os dados subsequentes a serem enviados
    cell1 = newRow.insertCell(0); 
    cell1.innerHTML = data.fullName; //celula 1 da linha 1
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode; //celula 2 da linha 1
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary; //celula 3 da linha 1
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;   //celula 4 da linha 1
    cell5 = newRow.insertCell(4); 
    cell5.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Deletar</a>`;
}

// Função para RESETAR o formulário
const resetForm = () => {
    document.querySelector("#fullName").value = "";
    document.querySelector("#empCode").value = "";
    document.querySelector("#salary").value = "";
    document.querySelector("#city").value = "";
    selectedRow = null;
}

// Ações realizadas ao clicar no botão editar. Ele grava as informações da tabela no formulário para ser editado.
const onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;
    document.querySelector("#fullName").value = selectedRow.cells[0].innerHTML;
    document.querySelector("#empCode").value = selectedRow.cells[1].innerHTML;
    document.querySelector("#salary").value = selectedRow.cells[2].innerHTML;
    document.querySelector("#city").value = selectedRow.cells[3].innerHTML;
}

// UPDATE
const updateRecord = (formData) => {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

// DELETE
const onDelete = (td) => {
    if (confirm('Tem certeza que deseja excluir este registro ?')) { // OBS.: a função confirme é nativa do javascript para exibir um POPUP de confirmação
        row = td.parentElement.parentElement;
        document.querySelector("#employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

// Função de validação
const validate = () => {
    isValid = true;
    if (document.querySelector("#fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

// Adicionando ao LocalStorage
localStorage.setItem('items', JSON.stringify(newRow));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}