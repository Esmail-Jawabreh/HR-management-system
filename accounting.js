'use strict'



let emplArr = localStorage.getItem('allEmployees');
const employees = JSON.parse(emplArr);





// Administration department

// Number of Administration employees
let administration_EmpSum = 0;
for (let i = 0; i < employees.length; i++) {
  if (employees[i].department === "Administration") {
    administration_EmpSum += 1;
  }
}    

// total & AVG salary for Administration employees
let salary_Total_Administration = 0;
let count_Administration = 0;
for (let i = 0; i < employees.length; i++) {
  if (employees[i].department === "Administration") {
    salary_Total_Administration += employees[i].salary;
    salary_Total_Administration = Math.floor(salary_Total_Administration);
    count_Administration++;
  }
}
let salary_AVG_Administration = salary_Total_Administration / count_Administration;





// Finance department

// Number of Finance employees
let finance_EmpSum = 0;
for (let i = 0; i < employees.length; i++) {
  if (employees[i].department === "Finance") {
    finance_EmpSum += 1;
  }
}    

// total & AVG salary for Finance employees
let salary_Total_Finance = 0;
let count_Finance = 0;
for (let i = 0; i < employees.length; i++) {
  if (employees[i].department === "Finance") {
    salary_Total_Finance += employees[i].salary;
    salary_Total_Finance = Math.floor(salary_Total_Finance);
    count_Finance++;
  }
}
let salary_AVG_Finance = salary_Total_Finance / count_Finance;





// Marketing department

// Number of Marketing employees
let marketing_EmpSum = 0;
for (let i = 0; i < employees.length; i++) {
  if (employees[i].department === "Marketing") {
    marketing_EmpSum += 1;
  }
}

// total & AVG salary for Marketing employees
let salary_Total_Marketing = 0;
let count_Marketing = 0;
for (let i = 0; i < employees.length; i++) {
  if (employees[i].department === "Marketing") {
    salary_Total_Marketing += employees[i].salary;
    salary_Total_Marketing = Math.floor(salary_Total_Marketing);
    count_Marketing++;
  }
}
let salary_AVG_Marketing = salary_Total_Marketing / count_Marketing;





//Development department

// Number of Development employees
let development_EmpSum = 0;
for (let i = 0; i < employees.length; i++) {
  if (employees[i].department === "Development") {
    development_EmpSum += 1;
  }
}

// total & AVG salary for Development employees
let salary_Total_Development = 0;
let count_Development = 0;
for (let i = 0; i < employees.length; i++) {
  if (employees[i].department === "Development") {
    salary_Total_Development += employees[i].salary;
    salary_Total_Development = Math.floor(salary_Total_Development);
    count_Development++;
  }
}
let salary_AVG_Development = salary_Total_Development / count_Development;





// table footer 

let total_Emp = administration_EmpSum + finance_EmpSum + marketing_EmpSum + development_EmpSum;

let total_Salary = salary_Total_Administration + salary_Total_Finance + salary_Total_Marketing + salary_Total_Development;

let total_AVG = Math.floor((salary_AVG_Administration + salary_AVG_Finance + salary_AVG_Marketing + salary_AVG_Development) / 4);






