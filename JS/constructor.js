'use strict'
let AllEmployees=[];

function Employee(employeeId,fullName,department,level,imageURL,salary){

    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.imageURL =`./assets/${this.fullName}.jpg`;
    this.level=level;
    this.salary=0;

    AllEmployees.push(this);
}

Employee.prototype.calculating=function(){

if(this.level=="Senior"){
   this.salary= Math.round(Math.floor(Math.random()*(2000-1500)+1500))
   this.salary=parseInt(this.salary- (this.salary * 7.5/100))
   return this.salary;
}
else if(this.level=="Mid-senior"){
     this.salary= Math.round(Math.floor(Math.random()*(1500-1000)+1000))
     this.salary=parseInt(this.salary- (this.salary * 7.5/100))
      return this.salary;
}
else{
    this.salary= Math.round(Math.floor(Math.random()*(1000-500)+500))
    this.salary=parseInt(this.salary- (this.salary * 7.5/100))
    return this.salary;
}
}



Employee.prototype.rander = function (){
   
const contaner = document.getElementById('nested');

const divEl = document.createElement('div');
    contaner.appendChild(divEl);
   
    const imges =document.createElement('img')
    divEl.appendChild(imges)
    imges.src=`${this.imageURL}`
    
    const h3El=document.createElement('h3')
    divEl.appendChild(h3El);
    h3El.textContent=`Name:${this.fullName} -Id:${this.employeeId}`
    const h4El=document.createElement('h3')
    divEl.appendChild(h4El);
    h4El.textContent=`Deperatment:${this.department}
     level: ${this.level}`
}




let formEl=document.getElementById('employeeForm')

formEl.addEventListener("submit",submitHand)

function submitHand(event){
    event.preventDefault();
 
    let fullname =event.target.fname.value;
    let department=event.target.Department.value;
    let levels=event.target.level.value;
let image=event.target.imgurl.value
    
let newEmployee= new Employee(10001,fullname,department,levels,image)

newEmployee.rander();
}





   



