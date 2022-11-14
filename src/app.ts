class Department {
  // name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Departmnent ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
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
