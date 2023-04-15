'use strict'


let allEmployees = [];
let formEl = document.getElementById('employee-Form');
formEl.addEventListener("submit", submitHand);

function Employee(employeeId, fullName, department, level, imageURL, salary) {

    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.imageURL = imageURL;
    this.level = level;
    this.salary = salary;
    allEmployees.push(this);

}

function calculating() {
for (let i = 0; i < allEmployees.length; i++) {
    
    if (allEmployees[i].level == "Senior") {
        allEmployees[i].salary = Math.round(Math.floor(Math.random() * (2000 - 1500) + 1500))
        allEmployees[i].salary = parseInt(allEmployees[i].salary - (allEmployees[i].salary * 7.5 / 100))
        return allEmployees[i].salary;
    }
    else if (allEmployees[i].level == "Mid-senior") {
        allEmployees[i].salary = Math.round(Math.floor(Math.random() * (1500 - 1000) + 1000))
        allEmployees[i].salary = parseInt(allEmployees[i].salary - (allEmployees[i].salary * 7.5 / 100))
        return allEmployees[i].salary;
    }
    else {
        allEmployees[i].salary = Math.round(Math.floor(Math.random() * (1000 - 500) + 500))
        allEmployees[i].salary = parseInt(allEmployees[i].salary - (allEmployees[i].salary * 7.5 / 100))
        return allEmployees[i].salary;
    }
}
  

}
function generateRandom4digit() {
    let randomNumber4digit = Math.floor(1000 + Math.random() * 9000);
    return randomNumber4digit;
}
function addEmployeeJson() {
    let jsonArray = localStorage.getItem('keyEmployee')
    let getInformationEmployee = JSON.parse(jsonArray);
    allEmployees = getInformationEmployee;

}

function submitHand(event) {
    let fullname = event.target.fname.value;
    let Department = event.target.Department.value;
    let levels = event.target.level.value;
    let image = event.target.imgurl.value
    let id = generateRandom4digit();
    let salarys =calculating() || 562;
    let newEmployee = new Employee(id, fullname, Department, levels, image,salarys)
    let jsonArryEmployee = JSON.stringify(allEmployees);
    localStorage.setItem('keyEmployee', jsonArryEmployee);

}

function rander() {
    addEmployeeJson();
    if (allEmployees == null) {
        allEmployees = [];
    }
    
    for (let i = 0; i < allEmployees.length; i++) {
        if (allEmployees[i].department == 'Administration') {
            const contaner = document.getElementById("Administration");
            let divElback = document.createElement('div')
            divElback.id = "background-container";
            contaner.appendChild(divElback);
            let img = document.createElement('img')
            divElback.appendChild(img);
            img.src = allEmployees[i].imageURL || `./assets/${allEmployees[i].fullName}.jpg`;
            let divElAbout = document.createElement('div');
            divElback.appendChild(divElAbout);
            divElAbout.id = "about-employes";
            let h1ElName = document.createElement('h1');
            divElAbout.appendChild(h1ElName);
            h1ElName.textContent = `Name: ${allEmployees[i].fullName}`
            let h1ElId = document.createElement('h1')
            divElAbout.appendChild(h1ElId);
            h1ElId.textContent = `ID: ${allEmployees[i].employeeId}`;
            let h1ElDepartment = document.createElement('h1');
            divElAbout.appendChild(h1ElDepartment);
            h1ElDepartment.textContent = `Department: ${allEmployees[i].department}`;
            let h1ElLevel = document.createElement('h1')
            divElAbout.appendChild(h1ElLevel);
            h1ElLevel.textContent = `Level: ${allEmployees[i].level}`;
                
        }
        else if (allEmployees[i].department == 'Marketing') {
            const contaner = document.getElementById("Marketing");
            let divElback = document.createElement('div')
            divElback.id = "background-container";
            contaner.appendChild(divElback);
            let img = document.createElement('img')
            divElback.appendChild(img);
            img.src = allEmployees[i].imageURL || `./assets/${allEmployees[i].fullName}.jpg`;
            let divElAbout = document.createElement('div');
            divElback.appendChild(divElAbout);
            divElAbout.id = "about-employes";
            let h1ElName = document.createElement('h1');
            divElAbout.appendChild(h1ElName);
            h1ElName.textContent = `Name: ${allEmployees[i].fullName}`
            let h1ElId = document.createElement('h1')
            divElAbout.appendChild(h1ElId);
            h1ElId.textContent = `ID: ${allEmployees[i].employeeId}`;
            let h1ElDepartment = document.createElement('h1');
            divElAbout.appendChild(h1ElDepartment);
            h1ElDepartment.textContent = `Department: ${allEmployees[i].department}`;
            let h1ElLevel = document.createElement('h1')
            divElAbout.appendChild(h1ElLevel);
            h1ElLevel.textContent = `Level: ${allEmployees[i].level}`;
        }
        else if (allEmployees[i].department == 'Development') {
            const contaner = document.getElementById("Development");
            let divElback = document.createElement('div')
            divElback.id = "background-container";
            contaner.appendChild(divElback);
            let img = document.createElement('img')
            divElback.appendChild(img);
            img.src = allEmployees[i].imageURL || `./assets/${allEmployees[i].fullName}.jpg`;
            let divElAbout = document.createElement('div');
            divElback.appendChild(divElAbout);
            divElAbout.id = "about-employes";
            let h1ElName = document.createElement('h1');
            divElAbout.appendChild(h1ElName);
            h1ElName.textContent = `Name: ${allEmployees[i].fullName}`
            let h1ElId = document.createElement('h1')
            divElAbout.appendChild(h1ElId);
            h1ElId.textContent = `ID: ${allEmployees[i].employeeId}`;
            let h1ElDepartment = document.createElement('h1');
            divElAbout.appendChild(h1ElDepartment);
            h1ElDepartment.textContent = `Department: ${allEmployees[i].department}`;
            let h1ElLevel = document.createElement('h1')
            divElAbout.appendChild(h1ElLevel);
            h1ElLevel.textContent = `Level: ${allEmployees[i].level}`;
        }
        else {
            const contaner = document.getElementById("Finance");
            let divElback = document.createElement('div')
            divElback.id = "background-container";
            contaner.appendChild(divElback);
            let img = document.createElement('img')
            divElback.appendChild(img);
            img.src = allEmployees[i].imageURL || `./assets/${allEmployees[i].fullName}.jpg`;
            let divElAbout = document.createElement('div');
            divElback.appendChild(divElAbout);
            divElAbout.id = "about-employes";
            let h1ElName = document.createElement('h1');
            divElAbout.appendChild(h1ElName);
            h1ElName.textContent = `Name: ${allEmployees[i].fullName}`
            let h1ElId = document.createElement('h1')
            divElAbout.appendChild(h1ElId);
            h1ElId.textContent = `ID: ${allEmployees[i].employeeId}`;
            let h1ElDepartment = document.createElement('h1');
            divElAbout.appendChild(h1ElDepartment);
            h1ElDepartment.textContent = `Department: ${allEmployees[i].department}`;
            let h1ElLevel = document.createElement('h1')
            divElAbout.appendChild(h1ElLevel);
            h1ElLevel.textContent = `Level: ${allEmployees[i].level}`;
        }
    }
}





addEmployeeJson();

rander();






