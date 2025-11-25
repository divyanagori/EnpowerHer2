const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

// 1. Filter employees with tasksCompleted > 5
const filtered = employees.filter(emp => emp.tasksCompleted > 5);

// 2. Map to name + performance level
const mapped = filtered.map(emp => {
  let level = "";
  if (emp.rating > 4.5) {
    level = "Excellent";
  } else if (emp.rating >= 3 && emp.rating <= 4.5) {
    level = "Good";
  } else {
    level = "Needs Improvement";
  }

  return { name: emp.name, performance: level };
});

// 3. Sort by performance priority
const priority = {
  "Excellent": 3,
  "Good": 2,
  "Needs Improvement": 1
};

const finalResult = mapped.sort((a, b) => priority[b.performance] - priority[a.performance]);

console.log(finalResult);