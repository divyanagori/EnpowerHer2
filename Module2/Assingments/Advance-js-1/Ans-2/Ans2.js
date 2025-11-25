function processStudents(students) {
  // Step 1: Filter students with marks above 60
  const filtered = students.filter(function(student) {
    return student.marks > 60;
  });

  // Step 2: Sort in descending order of marks
  const sorted = filtered.sort(function(a, b) {
    return b.marks - a.marks;
  });

  // Step 3: Map to extract only names
  const names = sorted.map(function(student) {
    return student.name;
  });

  // Step 4: Return result
  return names;
}