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
   
    const contaner = document.getElementById("container");
    let divElback = document.createElement('div')
    divElback.id="background-container";
    contaner.appendChild(divElback);
    
    let img=document.createElement('img')
    divElback.appendChild(img);
    img.src="./assets/Ghazi.jpg";
    
    let divElAbout =document.createElement('div');
    divElback.appendChild(divElAbout);
    divElAbout.id="about-employes";
    let h1ElName=document.createElement('h1');
    divElAbout.appendChild(h1ElName);
    h1ElName.textContent=`Name: ${this.fullName}`
    let h1ElId=document.createElement('h1')
    divElAbout.appendChild(h1ElId);
    h1ElId.textContent=`Id: ${this.employeeId}`;
    let h1ElDepartment=document.createElement('h1')
    divElAbout.appendChild( h1ElDepartment);
    h1ElDepartment.textContent=`Department:${this.department}`;
    let h1ElLevel=document.createElement('h1')
    divElAbout.appendChild(h1ElLevel);
    h1ElLevel.textContent=`Level: ${this.level}`;
    
    
}


let formEl=document.getElementById('employee-Form')

formEl.addEventListener("submit",submitHand)

function submitHand(event){
    event.preventDefault();
    let fullname =event.target.fname.value;
    let Department=event.target.Department.value;
    let levels=event.target.level.value;
let image=event.target.imgurl.value
    
let newEmployee= new Employee(10001,fullname,Department,levels,image)

newEmployee.rander();
}





   



