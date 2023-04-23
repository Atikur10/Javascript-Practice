function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

let assignment1Marks = 57;
let assignment2Marks = 27;
let assignment3Marks = 27;


const totalMarks = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log(totalMarks)






