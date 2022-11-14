"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Departmnent ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees);
    }
}
const accounting = new Department("no 1", "Accounting");
console.log(accounting);
accounting.describe();
accounting.addEmployee("Gabriel");
accounting.addEmployee("Emmanuel");
accounting.printEmployeeInfo;
