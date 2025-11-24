class Student {
  constructor(name, marks) {
    if (!Array.isArray(marks) || marks.length === 0) throw new Error('Marks must be a non-empty array');
    if (marks.some(m => typeof m !== 'number' || m < 0 || m > 100)) throw new Error('Marks must be numbers between 0 and 100');
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const sum = this.marks.reduce((acc, v) => acc + v, 0);
    return sum / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return 'A';
    if (avg >= 75) return 'B';
    if (avg >= 60) return 'C';
    return 'F';
  }
}

function formatStudentOutput(student) {
  return `${student.name} → Avg: ${student.calculateAverage().toFixed(2)} | Grade: ${student.getGrade()}`;
}

document.getElementById('runQ1').addEventListener('click', () => {
  try {
    const s1 = new Student('Aman', [88, 92, 79, 95]);
    const s2 = new Student('Riya', [72, 65, 70, 68]);
    const s3 = new Student('Kabir', [45, 55, 52, 49]);
    const out = [s1, s2, s3].map(formatStudentOutput).join('\n');
    document.getElementById('q1out').textContent = out;
  } catch (err) {
    document.getElementById('q1out').textContent = 'Error: ' + err.message;
  }
});

document.getElementById('demoQ1').addEventListener('click', () => {
  const rndMarks = () => Array.from({length:4}, () => Math.floor(Math.random()*41)+60);
  const demo = new Student('Demo Student', rndMarks());
  document.getElementById('q1out').textContent = formatStudentOutput(demo) + '\n(marks: ' + demo.marks.join(', ') + ')';
});
