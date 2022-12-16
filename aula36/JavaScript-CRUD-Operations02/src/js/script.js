let seletedRow = null;

const onFormSubmit = () => {
    if(validate()) {
        let formData = readFormData();

        if( seletedRow == null ) {
            insertNewRecord(formData);
        }

        else {
            updateRecord(formData);
        }

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

// Create Read Update Delete
// Post   Get  Update Delete

// CREATE
const insertNewRecord = (data) => {
    let table = document.querySelector("employeeList").getElementsByTagName("tbody")[0];

    let newRow = table.insertRow(table.length)

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName; // Celula 1 da Linha 1

    cell2 = newRow.insertCell(1);
    cell.innerHTML = data.empCode; // Celula 2 da Linha 1

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary; // Celula 3 of Linha 1

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;   // Celula 4 of Linha 1

    cell5 = newRow.insertCell(4); 
    cell5.innerHTML = ` 
        <a onClick="onEdit(this)">Edit</a>
        <a onClick="onDelete(this)">Delete</a>
    `;
}

const resetForm =  () => {
    document.querySelector("#fullName").value = "";
    document.querySelector("#empCode").value = "";
    document.querySelector("#salary").value = "";
    document.querySelector("#city").value = "";
    selectedRow = null;
}

const onEdit = (td) => {
    seletedRow = td.parentElement.parentElement;
    document.querySelector("#fullName").value = seletedRow.cells[0].innerHTML;
    document.querySelector("#empCode").value = seletedRow.cells[1].innerHTML;
    document.querySelector("#salary").value = seletedRow.cells[2].innerHTML;
    document.querySelector("#city").value = seletedRow.cells[3].innerHTML;
}

// UPDATE
const updateRecord = (formData) => {
    seletedRow.cells[0].innerHTML = formData.fullName;
    seletedRow.cells[1].innerHTML = formData.empCode;
    seletedRow.cells[2].innerHTML = formData.salary;
    seletedRow.cells[3].innerHTML = formData.city;
}

// DELETE
const onDelete = () => {
    if(confirm("Tem certeza que deseja DELETAR? ")) {
        row = td.parentElement.parentElement;
        document.querySelector("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

const validate = () => {
    isValid = true;
    if(document.querySelector("#fullName").value === "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

localStorage.setItem('items', JSON.stringify(newRow));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

