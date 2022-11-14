"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Departmnent: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
accounting.addEmployee("Gabriel");
accounting.addEmployee("Emmanuel");
accounting.printEmployeeInfo;
