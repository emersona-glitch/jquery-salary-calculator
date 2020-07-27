let employees = [];
let table = [];

$(document).ready(readyNow)

function readyNow() {
    console.log('JQ');
    $('#submitButton').on('click', submitEmployee);
    $('#employeeTable').on('click', '.deleteButton', deleteEmployee);
    figureTotal();
}

function submitEmployee() {

    let newEmployee = {
        first: $('#firstInput').val(),
        last: $('#lastInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        salary: $('#salaryInput').val()
    };

    for (let prop in newEmployee) {

        if (newEmployee[prop] === '') {
            // console.log('please complete all fields');
            $(`#${prop}Alert`).text('please complete this field');
            return false;
        } else {
            $(`#${prop}Alert`).text('');
        }
    }

    employees.push(newEmployee);

    convertToTable(newEmployee);

    pushToTable(convertToTable(newEmployee));

    figureTotal();

    $('#firstInput').val('');
    $('#lastInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');

}

function deleteEmployee () {
    console.log('oop');
    
}

function convertToTable(employeeInput) {
    return `<tr>
            <td>${employeeInput.first}</td>
            <td>${employeeInput.last}</td>
            <td>${employeeInput.id}</td>
            <td>${employeeInput.title}</td>
            <td>${employeeInput.salary}</td>
            <td> <button class="deleteButton" 
            id="delete${employeeInput.id}">delete</button> </td>
            </tr>`;
}

function pushToTable(entry) {
    table.push(entry)

    $('#tableBody').html(table.join(''))

}



function figureTotal() {
    let sum = 0;

    for (let employee of employees) {
        sum += Number(employee.salary);
    }

    $('#totalCost').html(`Total Monthly Cost: \$${sum}`);
}


