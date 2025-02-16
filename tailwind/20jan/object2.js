const students = [
    {
      id: 1,
      name: "Alice",
      age: 22,
      grade: "A",
      enrolled_subjects: ["Computer Science", "Mathematics", "Physics", "Literature"],
      received_grade: {
        "Computer Science": "A",
        "Mathematics": "B",
        "Physics": "A-",
        "Literature": "A+"
      },
      attendance_percentage: 95,
      extracurricular_activities: ["Debate Club", "Basketball"],
      achievements: ["Top Scorer in Physics", "Best Speaker Award"],
      is_graduating: true
    },
    {
      id: 2,
      name: "Bob",
      age: 24,
      grade: "B",
      enrolled_subjects: ["History", "Economics", "Political Science", "Sociology"],
      received_grade: {
        History: "B+",
        Economics: "B",
        "Political Science": "A",
        Sociology: "B-"
      },
      attendance_percentage: 88,
      extracurricular_activities: ["Drama Club"],
      achievements: ["Won Best Actor Award"],
      is_graduating: false
    },
    {
      id: 3,
      name: "Charlie",
      age: 23,
      grade: "C",
      enrolled_subjects: ["Biology", "Chemistry", "Physics", "Mathematics"],
      received_grade: {
        Biology: "C+",
        Chemistry: "C",
        Physics: "B",
        Mathematics: "C-"
      },
      attendance_percentage: 80,
      extracurricular_activities: ["Science Club", "Chess Club"],
      achievements: [],
      is_graduating: false
    },
    {
      id: 4,
      name: "Diana",
      age: 21,
      grade: "A",
      enrolled_subjects: ["Literature", "Philosophy", "Sociology", "Psychology"],
      received_grade: {
        Literature: "A+",
        Philosophy: "A",
        Sociology: "A-",
        Psychology: "A"
      },
      attendance_percentage: 92,
      extracurricular_activities: ["Creative Writing Club", "Drama Club"],
      achievements: ["Won Best Playwright Award"],
      is_graduating: true
    },
    {
      id: 5,
      name: "Ethan",
      age: 25,
      grade: "B",
      enrolled_subjects: ["Mathematics", "Physics", "Chemistry"],
      received_grade: {
        Mathematics: "B+",
        Physics: "B",
        Chemistry: "C+"
      },
      attendance_percentage: 85,
      extracurricular_activities: ["Basketball Team"],
      achievements: [],
      is_graduating: false
    },
    {
      id: 6,
      name: "Fiona",
      age: 22,
      grade: "A",
      enrolled_subjects: ["Computer Science", "Data Structures", "Algorithms"],
      received_grade: {
        "Computer Science": "A",
        "Data Structures": "A-",
        Algorithms: "A+"
      },
      attendance_percentage: 97,
      extracurricular_activities: ["Coding Club", "AI Research Group"],
      achievements: ["Hackathon Winner", "Best Programmer Award"],
      is_graduating: true
    },
    {
      id: 7,
      name: "George",
      age: 23,
      grade: "C",
      enrolled_subjects: ["Physics", "History", "Philosophy"],
      received_grade: {
        Physics: "C",
        History: "B",
        Philosophy: "C+"
      },
      attendance_percentage: 70,
      extracurricular_activities: [],
      achievements: [],
      is_graduating: false
    },
    {
      id: 8,
      name: "Hannah",
      age: 20,
      grade: "B",
      enrolled_subjects: ["Economics", "Statistics", "Mathematics"],
      received_grade: {
        Economics: "B+",
        Statistics: "B",
        Mathematics: "B"
      },
      attendance_percentage: 89,
      extracurricular_activities: ["Math Club"],
      achievements: ["Best Statistician Award"],
      is_graduating: false
    },
    {
      id: 9,
      name: "Ian",
      age: 24,
      grade: "A",
      enrolled_subjects: ["Chemistry", "Biology", "Physics"],
      received_grade: {
        Chemistry: "A",
        Biology: "A+",
        Physics: "A-"
      },
      attendance_percentage: 91,
      extracurricular_activities: ["Science Club"],
      achievements: ["Published Research Paper on Biology"],
      is_graduating: true
    },
    {
      id: 10,
      name: "Julia",
      age: 22,
      grade: "B",
      enrolled_subjects: ["Literature", "Drama", "Philosophy"],
      received_grade: {
        Literature: "B+",
        Drama: "A",
        Philosophy: "B-"
      },
      attendance_percentage: 86,
      extracurricular_activities: ["Theater Group"],
      achievements: ["Lead Actor in University Play"],
      is_graduating: false
    },
    {
      id: 11,
      name: "Kevin",
      age: 23,
      grade: "C",
      enrolled_subjects: ["History", "Political Science", "Law"],
      received_grade: {
        History: "C",
        "Political Science": "C+",
        Law: "B-"
      },
      attendance_percentage: 75,
      extracurricular_activities: ["Debate Team"],
      achievements: [],
      is_graduating: false
    },
    {
      id: 12,
      name: "Lila",
      age: 21,
      grade: "A",
      enrolled_subjects: ["Art", "Music", "Literature"],
      received_grade: {
        Art: "A+",
        Music: "A",
        Literature: "A-"
      },
      attendance_percentage: 94,
      extracurricular_activities: ["Music Club", "Art Club"],
      achievements: ["Best Painter Award"],
      is_graduating: true
    },
    {
      id: 13,
      name: "Michael",
      age: 24,
      grade: "B",
      enrolled_subjects: ["Economics", "Statistics", "Finance"],
      received_grade: {
        Economics: "B",
        Statistics: "B+",
        Finance: "A"
      },
      attendance_percentage: 88,
      extracurricular_activities: ["Finance Club"],
      achievements: ["Won Investment Challenge"],
      is_graduating: false
    },
    {
      id: 14,
      name: "Nina",
      age: 22,
      grade: "A",
      enrolled_subjects: ["Psychology", "Sociology", "Anthropology"],
      received_grade: {
        Psychology: "A",
        Sociology: "A+",
        Anthropology: "A-"
      },
      attendance_percentage: 93,
      extracurricular_activities: ["Research Club"],
      achievements: ["Published Research on Social Behavior"],
      is_graduating: true
    },
    {
      id: 15,
      name: "Oliver",
      age: 25,
      grade: "C",
      enrolled_subjects: ["Mathematics", "Physics", "Astronomy"],
      received_grade: {
        Mathematics: "C+",
        Physics: "B",
        Astronomy: "C"
      },
      attendance_percentage: 76,
      extracurricular_activities: ["Astronomy Club"],
      achievements: [],
      is_graduating: false
    }
  ];
  
// 1. Function to calculate average attendance of all students
  function calculateAverageAttendance(students) {
    const totalAttendance = students.reduce((sum, student) => sum + student.attendance_percentage, 0);
    return totalAttendance / students.length;
  }
  
  console.log("Average Attendance:", calculateAverageAttendance(students)); 
console.log(" ");

// 2. Function to get graduating students 
  function getGraduatingStudents(students) {
    return students.filter(student => student.is_graduating).map(student => student.name);
  }
  
  console.log("Graduating Students:", getGraduatingStudents(students));
  console.log(" ");

// 3. Function to add achievement for a student by ID
  function addAchievement(id, achievement) {
    const student = students.find(student => student.id === id);
    if (student) {
      student.achievements.push(achievement);
      console.log(`Achievement added for ${student.name}: ${achievement}`);
    } else {
      console.log("Student not found!");
    }
  }
  
  addAchievement(3, "Won School Science Fair");
  console.log(" ");

//4.function to get low attendance students
  function getLowAttendanceStudents(students, threshold = 85) {
    return students.filter(student => student.attendance_percentage < threshold).map(student => student.name);
  }
  
  console.log("Low Attendance Students:", getLowAttendanceStudents(students, 85));
  console.log(" ");

//5.function to find top scorer in a subject
  function findTopScorer(students, subject) {
    let topStudent = null;
    let highestGrade = "F";
  
    students.forEach(student => {
      const grade = student.received_grade[subject];
      if (grade && grade < highestGrade) {
        topStudent = student;
        highestGrade = grade;
      }
    });
  
    return topStudent ? topStudent.name : "No student enrolled in this subject.";
  }
  
  console.log("Top Scorer in Physics:", findTopScorer(students, "Physics"));
console.log(" ");

//6. function to get students with specific extracurricular activity
    function getStudentsByActivity(students, activity) {
        return students.filter(student => student.extracurricular_activities.includes(activity)).map(student => student.name);
    }

    console.log("Students in Debate Club:", getStudentsByActivity(students, "Debate Club"));
    console.log(" ");
//7.function to get students enrolled in a specific subject

    function getStudentsBySubject(students, subject) {
        return students.filter(student => student.enrolled_subjects.includes(subject)).map(student => student.name);
    }
    console.log("Students enrolled in Physics:", getStudentsBySubject(students, "Physics"));
  