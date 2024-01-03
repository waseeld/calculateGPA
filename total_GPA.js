function calculateGPA(grades) {
    var currentTotalGradePoints  = 0;
    var currentTotalCreditHours  = 0;
    var previousGPA = grades.previous_GPA;
    var previousTotalHours = grades.previous_hours;

    var result = []
    grades.newGrades.forEach(course => {
        var gradePoint;
        let grade;
        let points;
        
        if (course.Total_Mark >= 95 && course.Total_Mark <= 100) {
            gradePoint = 5.0; // A+
            points = gradePoint * course.Credit_Hours;
            grade = "A+";
        } else if (course.Total_Mark >= 90 && course.Total_Mark <= 94) {
            gradePoint = 4.5; // A
            points = gradePoint * course.Credit_Hours;
            grade = "A";
        } else if (course.Total_Mark >= 85 && course.Total_Mark <= 89) {
            gradePoint = 4.0; // B+
            points = gradePoint * course.Credit_Hours;
            grade = "B+";
        } else if (course.Total_Mark >= 80 && course.Total_Mark <= 84) {
            gradePoint = 3.5; // B
            points = gradePoint * course.Credit_Hours;
            grade = "B";
        } else if (course.Total_Mark >= 75 && course.Total_Mark <= 79) {
            gradePoint = 3.0; // C+
            points = gradePoint * course.Credit_Hours;
            grade = "C+";
        } else if (course.Total_Mark >= 70 && course.Total_Mark <= 74) {
            gradePoint = 2.5; // C
            points = gradePoint * course.Credit_Hours;
            grade = "C";
        } else if (course.Total_Mark >= 65 && course.Total_Mark <= 69) {
            gradePoint = 2.0; // D+
            points = gradePoint * course.Credit_Hours;
            grade = "D+";
        } else if (course.Total_Mark >= 60 && course.Total_Mark <= 64) {
            gradePoint = 1.5; // D
            points = gradePoint * course.Credit_Hours;
            grade = "D";
        } else {
            gradePoint = 1; // F
            points = gradePoint * course.Credit_Hours;
            grade = "F";
        }

        result.push({ "course": course.course, "Credit_Hours": course.Credit_Hours, "Total_Mark": course.Total_Mark, "Grade": grade, "gradePoint": points })
        currentTotalGradePoints  += gradePoint * course.Credit_Hours;
        currentTotalCreditHours  += course.Credit_Hours;
    });

    let totalGradePoints = (previousGPA * previousTotalHours) + currentTotalGradePoints;
    let totalCreditHours = previousTotalHours + currentTotalCreditHours;
    let GPA = totalGradePoints / totalCreditHours;

    return {
        GPA: GPA.toFixed(2),
        GPA_in_this_term: currentTotalGradePoints  / currentTotalCreditHours ,
        previousGPA,
        totalCreditHours,
        result: result
    };
}

var input = {
    previous_GPA: 3.06,
    previous_hours:16,
    newGrades: [
        { "course": "Calculas 1", "Credit_Hours": 3, "Total_Mark": 90 },
        { "course": "Chemistry 1", "Credit_Hours": 4, "Total_Mark": 90 },
        { "course": "Algebra", "Credit_Hours": 3, "Total_Mark": 90 },
        { "course": "Computing", "Credit_Hours": 2, "Total_Mark": 90 },
        { "course": "English 2", "Credit_Hours": 3, "Total_Mark": 90 },
        { "course": "University Skills", "Credit_Hours": 1, "Total_Mark": 90 }
    ]
};

var gpa = calculateGPA(input);
console.log(JSON.stringify(gpa, null, 2));