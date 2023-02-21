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
let salary_AVG_Administration = Math.floor(salary_Total_Administration / count_Administration);





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
let salary_AVG_Finance = Math.floor(salary_Total_Finance / count_Finance);





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
let salary_AVG_Marketing = Math.floor(salary_Total_Marketing / count_Marketing);





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
let salary_AVG_Development = Math.floor(salary_Total_Development / count_Development);





// table footer 

let total_Emp = administration_EmpSum + finance_EmpSum + marketing_EmpSum + development_EmpSum;

let total_Salary = salary_Total_Administration + salary_Total_Finance + salary_Total_Marketing + salary_Total_Development;

let total_AVG = Math.floor((salary_AVG_Administration + salary_AVG_Finance + salary_AVG_Marketing + salary_AVG_Development));






// rendering data

const tableBody = document.getElementById('tableBody');
const tableFooter = document.getElementById('tableFooter');


// Table Body
// tr1
const tr1 = document.createElement('tr');
tableBody.appendChild(tr1);

let td1 = document.createElement('td');
tr1.appendChild(td1);
td1.textContent = `Administration`;

let td2 = document.createElement('td');
tr1.appendChild(td2);
td2.textContent = `${administration_EmpSum}`;

let td3 = document.createElement('td');
tr1.appendChild(td3);
td3.textContent = `${salary_AVG_Administration}$`;

let td4 = document.createElement('td');
tr1.appendChild(td4);
td4.textContent = `${salary_Total_Administration}$`;


// tr2
const tr2 = document.createElement('tr');
tableBody.appendChild(tr2);

let td5 = document.createElement('td');
tr2.appendChild(td5);
td5.textContent = `Finance`;

let td6 = document.createElement('td');
tr2.appendChild(td6);
td6.textContent = `${finance_EmpSum}`;

let td7 = document.createElement('td');
tr2.appendChild(td7);
td7.textContent = `${salary_AVG_Finance}$`;

let td8 = document.createElement('td');
tr2.appendChild(td8);
td8.textContent = `${salary_Total_Finance}$`;


// tr3
const tr3 = document.createElement('tr');
tableBody.appendChild(tr3);

let td9 = document.createElement('td');
tr3.appendChild(td9);
td9.textContent = `Marketing`;

let td10 = document.createElement('td');
tr3.appendChild(td10);
td10.textContent = `${marketing_EmpSum}`;

let td11 = document.createElement('td');
tr3.appendChild(td11);
td11.textContent = `${salary_AVG_Marketing}$`;

let td12 = document.createElement('td');
tr3.appendChild(td12);
td12.textContent = `${salary_Total_Marketing}$`;


// tr4
const tr4 = document.createElement('tr');
tableBody.appendChild(tr4);

let td13 = document.createElement('td');
tr4.appendChild(td13);
td13.textContent = `Development`;

let td14 = document.createElement('td');
tr4.appendChild(td14);
td14.textContent = `${development_EmpSum}`;

let td15 = document.createElement('td');
tr4.appendChild(td15);
td15.textContent = `${salary_AVG_Development}$`;

let td16 = document.createElement('td');
tr4.appendChild(td16);
td16.textContent = `${salary_Total_Development}$`;


// Table Footer
const tableFooter_tr = document.createElement('tr');
tableFooter.appendChild(tableFooter_tr);

let tableFooter_th1 = document.createElement('th');
tableFooter_tr.appendChild(tableFooter_th1);
tableFooter_th1.textContent = `Total :`;

let tableFooter_th2 = document.createElement('th');
tableFooter_tr.appendChild(tableFooter_th2);
tableFooter_th2.textContent = `${total_Emp}`;

let tableFooter_th3 = document.createElement('th');
tableFooter_tr.appendChild(tableFooter_th3);
tableFooter_th3.textContent = `${total_AVG}$`;

let tableFooter_th4 = document.createElement('th');
tableFooter_tr.appendChild(tableFooter_th4);
tableFooter_th4.textContent = `${total_Salary}$`;