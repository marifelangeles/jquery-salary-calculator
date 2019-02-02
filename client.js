console.log('js');

// variables for form
let fnameInput;
let lnameInput;
let idInput;
let titleInput;
let salaryInput = 0;

class EmployeeInfo {
    constructor(fname, lname, id, title, salary) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }
}

let employeesList = [];
let total = 0;
let monthlyCost = 0;


$(document).ready(docReady);


function docReady(){
    console.log('jq');

    $('#submit').on('click', addEmployee);
    //$('#submit').on('click', storeEmployeeInfo);
    
    $('#submit').on('click', calculateMonthlyCosts);

} // end docReady

// Step 1: on submit, get input values and add to Employees list
// target submit button and create event listener
// get input values
// append row and val to tbody
// set input val to ''
// create new employee
// push new employee to employees list

function addEmployee(){
    console.log('in addEmployee');
        
    fnameInput = $('#fname').val();
    lnameInput = $('#lname').val();
    idInput = $('#id').val();
    titleInput = $('#title').val();
    salaryInput = $('#salary').val();
    salaryInput = Math.floor( Number(salaryInput) );
    console.log('input', fnameInput, lnameInput, idInput, titleInput, salaryInput);
    
    $('#employeesList').append(`
        <tr>
            <td>${fnameInput}</td>
            <td>${lnameInput}</td>
            <td>${idInput}</td>
            <td>${titleInput}</td>
            <td>${salaryInput}</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>
    `);

    $('#fname').val('');
    $('#lname').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');

    let newEmployee = new EmployeeInfo(fnameInput, lnameInput, idInput, titleInput, salaryInput);
    console.log('temp:', newEmployee);

    employeesList.push(newEmployee);
    //employeesList.push(temp);
    console.log('employeesList:', employeesList);

} // end addEmployee


// STEP 2: Using the stored information, calculate monthly costs and append this to the to DOM
// target button, on submit...
// create temp monthly salary array
// loop through annual salary
// divide annual salary by 12
// assign to monthly salary array
// loop through monthly salary 
// create monthly cost = 0
// add to monthly cost 
// get #total monthly cost and append total


function calculateMonthlyCosts() {
    console.log('in calculateMonthlyCosts');
    console.log('input:', fnameInput, lnameInput, idInput, titleInput, salaryInput);
    
    let monthlySalary = [];
    
    for (let i = 0; i < employeesList.length; i++) {
        console.log('employeesList[i]:', Math.floor(employeesList[i].salary / 12) );
        
        monthlySalary.push(Math.floor(employeesList[i].salary / 12) );
        console.log('monthlySalary:', monthlySalary);
        
    } // end employeesList loop
    
    let total = 0;
    for (let employee in monthlySalary) {
        console.log('in monthlySalary');
        
        total += monthlySalary[employee];
        console.log('total:', total);
    } // end monthlySalary loop

    $('#totalMonthlyCost').text(` $${total}`);

} // end calculateMonthlyCosts