function generatePlan() {

    let subjects = document.getElementById("subjects").value.split(",");
    let examDate = new Date(document.getElementById("examDate").value);
    let hours = parseInt(document.getElementById("hours").value);

    let today = new Date();
    let timeDiff = examDate - today;
    let daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysLeft <= 0) {
        document.getElementById("output").innerHTML = "Exam date must be in future!";
        return;
    }

    let studyPlan = "<h3>📅 Your AI Study Plan</h3>";
    let hoursPerSubject = (hours / subjects.length).toFixed(2);

    for (let i = 0; i < subjects.length; i++) {
        studyPlan += `<p>📘 ${subjects[i].trim()} → ${hoursPerSubject} hours/day for ${daysLeft} days</p>`;
    }

    document.getElementById("output").innerHTML = studyPlan;
}