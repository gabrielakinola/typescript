class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Departmnent: " + this.name);
  }

  addEmployee(employee: string) {
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
