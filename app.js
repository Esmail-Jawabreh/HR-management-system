'use strict'


function Employee(id, full_name, department, level, img_url, salary) {
    this.id = id;
    this.full_name = full_name;
    this.department = department;
    this.level = level;
    this.img_url = img_url;
    this.salary = salary;
}

Employee.prototype.print_id=function(){
    return this.id;
}

Employee.prototype.print_name=function(){
    return this.full_name;
}

Employee.prototype.print_department=function(){
    return this.department;
}

Employee.prototype.print_level=function(){
    return this.level;
}

Employee.prototype.calc_salary = function (min, max) {
    let salary = (Math.floor((Math.random() * min) + max)) 
    let salary_after_tax = salary - ((7.5/100)*salary)  
    return salary_after_tax;
}


// let senior_salary =     (Math.floor((Math.random() * 500) +  1500)) - (7.5/100); //max=2000 , min=1500 --> random to 500 and add it to 1500 
// let mid_senior_salary = (Math.floor((Math.random() * 500) +  1000)) - (7.5/100); //max=1500 , min=1000 --> random to 500 and add it to 1000 
// let junior_salary =     (Math.floor((Math.random() * 500) +  500)) - (7.5/100);  //max=1000 , min=500  --> random to 500 and add it to 500 


let senior_min_salary= 500;
let senior_max_salary= 1500;

let midsenior_min_salary= 500;
let midsenior_max_salary= 1000;

let junior_min_salary= 500;
let junior_max_salary= 500;


//Employee 1000
let employee1000 = new Employee(1000,"Ghazi Samer", "Administration","Senior");

let id1000 = document.getElementById('id1000');
id1000.innerHTML += `${employee1000.print_id()}`;

let fullname1000 = document.getElementById('fullname1000');
fullname1000.innerHTML += `${employee1000.print_name()}`;

let department1000 = document.getElementById('department1000');
department1000.innerHTML += `${employee1000.print_department()}`;

let level1000 = document.getElementById('level1000');
level1000.innerHTML += `${employee1000.print_level()}`;

let salary1000 = document.getElementById('salary1000');
salary1000.innerHTML += `${employee1000.calc_salary(senior_min_salary,senior_max_salary)+'$'}`;


//Employee 1001
let employee1001 = new Employee(1001,"Lana Ali","Finance","Senior");

let id1001 = document.getElementById('id1001');
id1001.innerHTML += `${employee1001.print_id()}`;

let fullname1001 = document.getElementById('fullname1001');
fullname1001.innerHTML += `${employee1001.print_name()}`;

let department1001 = document.getElementById('department1001');
department1001.innerHTML += `${employee1001.print_department()}`;

let level1001 = document.getElementById('level1001');
level1001.innerHTML += `${employee1001.print_level()}`;

let salary1001 = document.getElementById('salary1001');
salary1001.innerHTML += `${employee1001.calc_salary(senior_min_salary,senior_max_salary)+'$'}`;


//Employee 1002
let employee1002 = new Employee(1002,"Tamara Ayoub", "Marketing","Senior");

let id1002 = document.getElementById('id1002');
id1002.innerHTML += `${employee1002.print_id()}`;

let fullname1002 = document.getElementById('fullname1002');
fullname1002.innerHTML += `${employee1002.print_name()}`;

let department1002 = document.getElementById('department1002');
department1002.innerHTML += `${employee1002.print_department()}`;

let level1002 = document.getElementById('level1002');
level1002.innerHTML += `${employee1002.print_level()}`;

let salary1002 = document.getElementById('salary1002');
salary1002.innerHTML += `${employee1002.calc_salary(senior_min_salary,senior_max_salary)+'$'}`;


//Employee 1003
let employee1003 = new Employee(1003,"Safi Walid","Administration","Mid-Senior");

let id1003 = document.getElementById('id1003');
id1003.innerHTML += `${employee1003.print_id()}`;

let fullname1003 = document.getElementById('fullname1003');
fullname1003.innerHTML += `${employee1003.print_name()}`;

let department1003 = document.getElementById('department1003');
department1003.innerHTML += `${employee1003.print_department()}`;

let level1003 = document.getElementById('level1003');
level1003.innerHTML += `${employee1003.print_level()}`;

let salary1003 = document.getElementById('salary1003');
salary1003.innerHTML += `${employee1003.calc_salary(midsenior_min_salary,midsenior_max_salary)+'$'}`;


//Employee 1004
let employee1004 = new Employee(1004,"Omar Zaid","Development", "Senior");

let id1004 = document.getElementById('id1004');
id1004.innerHTML += `${employee1004.print_id()}`;

let fullname1004 = document.getElementById('fullname1004');
fullname1004.innerHTML += `${employee1004.print_name()}`;

let department1004 = document.getElementById('department1004');
department1004.innerHTML += `${employee1004.print_department()}`;

let level1004 = document.getElementById('level1004');
level1004.innerHTML += `${employee1004.print_level()}`;

let salary1004 = document.getElementById('salary1004');
salary1004.innerHTML += `${employee1004.calc_salary(senior_min_salary,senior_max_salary)+'$'}`;

//Employee 1005
let employee1005 = new Employee(1005,"Rana Saleh","Development","Junior");

let id1005 = document.getElementById('id1005');
id1005.innerHTML += `${employee1005.print_id()}`;

let fullname1005 = document.getElementById('fullname1005');
fullname1005.innerHTML += `${employee1005.print_name()}`;

let department1005 = document.getElementById('department1005');
department1005.innerHTML += `${employee1005.print_department()}`;

let level1005 = document.getElementById('level1005');
level1005.innerHTML += `${employee1005.print_level()}`;

let salary1005 = document.getElementById('salary1005');
salary1005.innerHTML += `${employee1005.calc_salary(junior_min_salary,junior_max_salary)+'$'}`;


//Employee 1006
let employee1006 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

let id1006 = document.getElementById('id1006');
id1006.innerHTML += `${employee1006.print_id()}`;

let fullname1006 = document.getElementById('fullname1006');
fullname1006.innerHTML += `${employee1006.print_name()}`;

let department1006 = document.getElementById('department1006');
department1006.innerHTML += `${employee1006.print_department()}`;

let level1006 = document.getElementById('level1006');
level1006.innerHTML += `${employee1006.print_level()}`;

let salary1006 = document.getElementById('salary1006');
salary1006.innerHTML += `${employee1006.calc_salary(midsenior_min_salary,midsenior_max_salary)+'$'}`;