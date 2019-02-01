console.log('js');

// variables for form
let fname;
let lname;
let id;
let title;
let salary;
let employeeInfo = { };
}

$(document).ready(docReady);


function docReady(){
    console.log('jq');

    $('#submit').on('click', addEmployee);
    
    
    
}

// Step 1: on submit, get input values and add to Employees list
// target submit button and create event listener
// get input values
// append row and val to tbody
// set input val to ''

function addEmployee(){
    console.log('in addEmployee');
        
    fname = $('#fname').val();
    lname = $('#lname').val();
    id = $('#id').val();
    title = $('#title').val();
    salary = $('#salary').val();
    console.log('input', fname, lname, id, title, salary);
    
    $('#employeesList').append(`
        <tr>
            <td>${fname}</td>
            <td>${lname}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${salary}</td>
        </tr>
    `);

    $('#fname').val('');
    $('#lname').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');

} // end addEmployee

// STEP 2: store information and calculate monthly costs
// 