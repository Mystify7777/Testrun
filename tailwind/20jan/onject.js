// Array of objects
const students = [
    { id: 1, name: "Alice", age: 22, grade: "A" },
    { id: 2, name: "Bob", age: 24, grade: "B" },
    { id: 3, name: "Charlie", age: 23, grade: "C" },
    { id: 4, name: "Diana", age: 21, grade: "A" },
    { id: 5, name: "Ethan", age: 25, grade: "B" },
    { id: 6, name: "Fiona", age: 20, grade: "C" },
    { id: 7, name: "George", age: 22, grade: "B" },
    { id: 8, name: "Hannah", age: 24, grade: "A" },
    { id: 9, name: "Ian", age: 23, grade: "C" },
    { id: 10, name: "Julia", age: 21, grade: "B" },
    { id: 11, name: "Kyle", age: 26, grade: "A" },
    { id: 12, name: "Liam", age: 22, grade: "C" },
    { id: 13, name: "Mia", age: 20, grade: "A" },
    { id: 14, name: "Noah", age: 23, grade: "B" },
    { id: 15, name: "Olivia", age: 25, grade: "A" }
  ];
  
  
  // 1. Function to add a new student to the array
  function addStudent(id, name, age, grade) {
    students.push({ id, name, age, grade });
    console.log(`Student ${name} added successfully.`);
  }
  
  // 2. Function to delete a student by ID
  function deleteStudentById(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      const removedStudent = students.splice(index, 1)[0];
      console.log(`Student ${removedStudent.name} removed successfully.`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }
  
  // 3. Function to update a student's grade by ID
  function updateStudentGrade(id, newGrade) {
    const student = students.find(student => student.id === id);
    if (student) {
      student.grade = newGrade;
      console.log(`Student ${student.name}'s grade updated to ${newGrade}.`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }
  
  // 4. Function to get a list of students with a specific grade
  function getStudentsByGrade(grade) {
    const filteredStudents = students.filter(student => student.grade === grade);
    console.log(`Students with grade ${grade}:`, filteredStudents);
  }
  
  // 5. Function to calculate the average age of all students
  function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`The average age of students is ${averageAge.toFixed(2)} years.`);
  }
  
  // Calling the functions
  addStudent(6, "Fiona", 20, "C");
  deleteStudentById(3);
  updateStudentGrade(2, "A");
  getStudentsByGrade("A");
  calculateAverageAge();
  