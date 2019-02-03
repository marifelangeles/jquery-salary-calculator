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



$(document).ready(docReady);


function docReady(){
    console.log('jq');

    // add and delete employees
    $('#submit').on('click', addEmployee);
    $('#employeesList').on('click', '.deleteButton', deleteEmployee);

    // calculate monthly cost
    $('#submit').on('click', addMonthlyCost);

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
        <tr class="employeeRow">
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

// add salary function
function addMonthlyCost() {
    console.log('in addDollars');

    console.log('getMonthlySalaries(employeesList)', getMonthlySalaries(employeesList) );
    
    // let monthlyCost = [];
    // monthlyCost.push(getMonthlySalaries(employeesList));
    // console.log('monthlySalaryList', monthlyCost);
    
    // let total = 0;
    // for (let i = 0; i < monthlyCost.length; i++) {
    //     console.log('monthlyCost[i]:', monthlyCost[i]);
         
    //     total += monthlyCost[i];
    //     console.log('total:', total);
    // }

    // console.log('total:', total);
    
    
    
    //$('#totalMonthlyCost').text(` $${total}`);

} // end addMonthlySalary


function subtractDollars(monthlySalary) {
    console.log('in subtractDollars');
    
} // end deleteMonthlySalary

// collect monthly salaries and get total
function getMonthlySalaries(employeesList) {
    console.log('in getMonthlySalaries');
    console.log('input:', fnameInput, lnameInput, idInput, titleInput, salaryInput);
    
    
    let monthlySalary = [];
    
    // loop through employee list annual salary
    // push to monthly salary array
    for (let i = 0; i < employeesList.length; i++) {
        console.log('employeesList[i]:', Math.floor(employeesList[i].salary / 12) );
        
        monthlySalary.push(Math.floor(employeesList[i].salary / 12) );
        console.log('monthlySalary:', monthlySalary);
        
    } // end employeesList loop

    console.log('monthlySalary:', monthlySalary);

    let total = 0;
    
    for (let i = 0; i < monthlySalary.length; i++) {
        console.log('monthlySalary[i]:', monthlySalary[i]);
        
        total += monthlySalary[i];
        console.log('total:', total);
    }

    $('#totalMonthlyCost').text()

    return total;

} // end calculateMonthlyCosts




// STEP 3: Create a delete button that removes an employee from the DOM.
// target #employeesList, if it has .deleteButton, on click...
// target this employeeRow and remove closest tr

function deleteEmployee(){
    console.log('in deleteEmployee');
    
    $(this).closest('tr').remove();

    getMonthlySalaries(employeesList);

    //$('#totalMonthlyCost').text(`new total`);

} // end deleteEmployee


// STEP 4: Once the employee is deleted, update the total spend on salaries account for this employee's removal. 
// in deleteEmployee...
// when delete is clicked, 
// target #totalMonthlyCost replace text with new total


