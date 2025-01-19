// Your code here




//Create time card: must receive input of employee, time in, and time-out,
//possibly a function with three parameters? They clearly want me to use .map and .reduce

//upon revision this lab was utterly terrible. Basing the testing questions on the chai prompts is just bad practice and I am
//dissapointed with flatiron that this is the way you conduct our homework. This could have easily taken me days due to the lack
//of clarity. I have been absolutely elated at learning, and I adore this in-person program, yet these labs consistently throw
//the most absurd wrenches in my learning experience. they don't teach me how to code. AT ALL. they teach me how to read chai tests.
//it's completely reprehensible. I pay so much money for a serious educational experience and the second I have to do any homework
//via canvas I am utterly confused. Not only have we not discussed any of this in class, but the entire lab is based on
//absurdity. It's like throwing a dictionary at a kid that's learning how to read, or even speak. I am SO incredibly new to this
//still, and labs like this are literallly insulting. Do better.


function createEmployeeRecord(employee){
    
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees){
    return employees.map(employeeArray => createEmployeeRecord(employeeArray))
}

function createTimeInEvent(employeeRecord, dateStamp) {
    employeeRecord.timeInEvents.push({
        type: "TimeIn", 
        date: dateStamp.split(" ")[0],  
        hour: parseInt(dateStamp.split(" ")[1])  
    });
    
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, dateStamp){
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        date: dateStamp.split(" ")[0],
        hour: parseInt(dateStamp.split(" ")[1])
    })
    return employeeRecord
}

function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(event => event.date === date);
    let timeOut = employee.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100; 
}

function wagesEarnedOnDate(employee, date) {
    return hoursWorkedOnDate(employee, date) * employee.payPerHour;
}

function allWagesFor(employee) {
    let dates = employee.timeInEvents.map(event => event.date);
    return dates.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
}

function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor(employee), 0);
}