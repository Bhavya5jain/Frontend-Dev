class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in ${this.department}.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize = 0) {
    super(name, department);
    this.teamSize = teamSize;
  }

  work() {
    return `${this.name} manages a team of ${this.teamSize} in ${this.department}.`;
  }
}

document.getElementById('runQ4').addEventListener('click', () => {
  try {
    const e = new Employee('Arjun', 'HR');
    const m = new Manager('Vikram', 'IT', 8);
    const arr = [e, m];
    const lines = arr.map(obj => obj.work());
    lines.push('', 'Explanation: Both objects share the same method name (work), but Manager overrides it — this is polymorphism.');
    document.getElementById('q4out').textContent = lines.join('\n');
  } catch (err) {
    document.getElementById('q4out').textContent = 'Error: ' + err.message;
  }
});
