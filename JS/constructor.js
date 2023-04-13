'use strict'
let allEmployees=[];

function Employee(employeeId,fullName,department,level,imageURL,salary){

    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.imageURL =imageURL;
    this.level=level;
    this.salary=salary;

    allEmployees.push(this);
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
    console.log(allEmployees)
   
   if(this.department=='Administration'){
    const contaner = document.getElementById("Administration");
    let divElback = document.createElement('div')
    divElback.id="background-container";
    contaner.appendChild(divElback);
    
    let img=document.createElement('img')
    divElback.appendChild(img);
    img.src=this.imageURL || `./assets/${this.fullName}.jpg` ;
    let divElAbout =document.createElement('div');
    divElback.appendChild(divElAbout);
    divElAbout.id="about-employes";
    let h1ElName=document.createElement('h1');
    divElAbout.appendChild(h1ElName);
    h1ElName.textContent=`Name: ${this.fullName}`
    let h1ElId=document.createElement('h1')
    divElAbout.appendChild(h1ElId);
    h1ElId.textContent=`ID: ${this.employeeId}`;
    let h1ElDepartment=document.createElement('h1')
    divElAbout.appendChild( h1ElDepartment);
    h1ElDepartment.textContent=`Department: ${this.department}`;
    let h1ElLevel=document.createElement('h1')
    divElAbout.appendChild(h1ElLevel);
    h1ElLevel.textContent=`Level: ${this.level}`;
    }
    else if(this.department=='Marketing'){
        const contaner = document.getElementById("Marketing");
    let divElback = document.createElement('div')
    divElback.id="background-container";
    contaner.appendChild(divElback);
    
    let img=document.createElement('img')
    divElback.appendChild(img);
    img.src=this.imageURL || `./assets/${this.fullName}.jpg` ;
    let divElAbout =document.createElement('div');
    divElback.appendChild(divElAbout);
    divElAbout.id="about-employes";
    let h1ElName=document.createElement('h1');
    divElAbout.appendChild(h1ElName);
    h1ElName.textContent=`Name: ${this.fullName}`
    let h1ElId=document.createElement('h1')
    divElAbout.appendChild(h1ElId);
    h1ElId.textContent=`ID: ${this.employeeId}`;
    let h1ElDepartment=document.createElement('h1')
    divElAbout.appendChild( h1ElDepartment);
    h1ElDepartment.textContent=`Department: ${this.department}`;
    let h1ElLevel=document.createElement('h1')
    divElAbout.appendChild(h1ElLevel);
    h1ElLevel.textContent=`Level: ${this.level}`;
    }
    else if(this.department=='Development'){
        const contaner = document.getElementById("Development");
        let divElback = document.createElement('div')
        divElback.id="background-container";
        contaner.appendChild(divElback);
        
        let img=document.createElement('img')
        divElback.appendChild(img);
        img.src=this.imageURL || `./assets/${this.fullName}.jpg` ;
        let divElAbout =document.createElement('div');
        divElback.appendChild(divElAbout);
        divElAbout.id="about-employes";
        let h1ElName=document.createElement('h1');
        divElAbout.appendChild(h1ElName);
        h1ElName.textContent=`Name: ${this.fullName}`
        let h1ElId=document.createElement('h1')
        divElAbout.appendChild(h1ElId);
        h1ElId.textContent=`ID: ${this.employeeId}`;
        let h1ElDepartment=document.createElement('h1')
        divElAbout.appendChild( h1ElDepartment);
        h1ElDepartment.textContent=`Department: ${this.department}`;
        let h1ElLevel=document.createElement('h1')
        divElAbout.appendChild(h1ElLevel);
        h1ElLevel.textContent=`Level: ${this.level}`;
    }
    else{
        const contaner = document.getElementById("Finance");
        let divElback = document.createElement('div')
        divElback.id="background-container";
        contaner.appendChild(divElback);
        
        let img=document.createElement('img')
        divElback.appendChild(img);
        img.src=this.imageURL || `./assets/${this.fullName}.jpg` ;
        let divElAbout =document.createElement('div');
        divElback.appendChild(divElAbout);
        divElAbout.id="about-employes";
        let h1ElName=document.createElement('h1');
        divElAbout.appendChild(h1ElName);
        h1ElName.textContent=`Name: ${this.fullName}`
        let h1ElId=document.createElement('h1')
        divElAbout.appendChild(h1ElId);
        h1ElId.textContent=`ID: ${this.employeeId}`;
        let h1ElDepartment=document.createElement('h1')
        divElAbout.appendChild( h1ElDepartment);
        h1ElDepartment.textContent=`Department: ${this.department}`;
        let h1ElLevel=document.createElement('h1')
        divElAbout.appendChild(h1ElLevel);
        h1ElLevel.textContent=`Level: ${this.level}`;
    }
    }
    
    



let formEl=document.getElementById('employee-Form')

formEl.addEventListener("submit",submitHand)

function submitHand(event){
    event.preventDefault();
    let fullname =event.target.fname.value;
    let Department=event.target.Department.value;
    let levels=event.target.level.value;
let image=event.target.imgurl.value
let id=generateRandom4digit();
let newEmployee= new Employee(id,fullname,Department,levels,image)

newEmployee.rander();
}

function generateRandom4digit(){
    let randomNumber4digit=Math.floor(1000 + Math.random() * 9000);
    return randomNumber4digit;
}




   



