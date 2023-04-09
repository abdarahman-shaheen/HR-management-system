'use strict'

function Employee(employeeId,fullName,department,level,imageURL,salary){

    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.imageURL =imageURL;
    this.level=level;
    this.salary=salary;

}

Employee.prototype.calculating=function(){
    let netSalary=0;
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

let Ghazi= new Employee(1000,"Ghazi Samer","	Administration","Senior","",0,)
let Lana= new Employee(1001,"Lana Ali","Finance","Senior","",0,)

let Tamara= new Employee(1002,"Tamara Ayoub","	Marketing","Senior","",0,)
let Safi= new Employee(1001,"	Safi Walid","Administration	","	Mid-Senior","",0,)

let Omar= new Employee(1002,"Omar Zaid","	Development","Senior","",0,)
let Rana= new Employee(1001,"	Rana Saleh","Development	","	Junior","",0,)
let Hadi= new Employee(1001,"	Hadi Ahmad","	Finance","Mid-Senior","",0,)



Employee.prototype.rander = function (){
    document.write(`<section><h2>${this.fullName} <h2> ${this.salary}</h2>
    </h2>   </section>
     `)
    
}

Ghazi.calculating();
Ghazi.rander();
Lana.calculating();
Lana.rander();
Tamara.calculating();
Tamara.rander();
Safi.calculating();
Safi.rander();
Omar.calculating();
Omar.rander();
Rana.calculating();
Rana.rander();
Hadi.calculating();
Hadi.rander();



   



