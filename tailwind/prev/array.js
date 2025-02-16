// const students = [
//     {
//         name: "Ram",
//         math_marks: 90,
//         age: 22
//     },
//     {
//         name: "Rajezh",
//         math_marks: 50,
//         age: 24
//     },
//     {
//         name: "Ritesh",
//         math_marks: 70,
//         age: 23
//     },
//     {
//         name: "Rohan",
//         math_marks: 79,
//         age: 21
//     }
// ];

// let mathmarks = 0;

// for (let student of students) {
//     mathmarks += student.math_marks;
// }

// console.log("Total Math Marks:", mathmarks);


const students  = [
    {
        name : "Ram",
        marks: [50,84,72,92],
        age : 22
    },
    {
        name : "Rajesh",
        marks: [90,34,72,42],
        age : 24
    },
    {
        name : "Ritesh",
        marks:[53,34,82,72],
        age : 23
    },
    {
        name : "Rohan",
        marks: [40,74,52,52],
        age : 21
    }
]
for(let student of students){
    console.log(student.name,"-->",student.marks);
    let totalmarks = 0;
    for(let mark of student.marks){
        totalmarks += mark;
    }
    const avg = totalmarks/student.marks.length;
    console.log("Total Marks:",totalmarks);
    console.log("Average Marks:",avg);
    if(avg > 60){
        console.log("Grade:Pass");
    }else{
        console.log("Grade:Fail");
    } 
    console.log("-------------------------------");
}
for (let student_keys of Object.keys(students)){
    console.log(student_keys);
}

for(let key in students[0]){
    console.log(key);
    console.log(students[0][key]);
}