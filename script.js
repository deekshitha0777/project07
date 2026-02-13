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
function sendMessage() {

    let input = document.getElementById("userInput").value.toLowerCase();
    let chatbox = document.getElementById("chatbox");

    let userMessage = `<p><strong>You:</strong> ${input}</p>`;
    chatbox.innerHTML += userMessage;

    let botReply = "";

    if (input.includes("motivate")) {
        botReply = "Keep going! Small daily progress leads to big success 💪";
    }
    else if (input.includes("stress")) {
        botReply = "Take a 10-minute break and try deep breathing exercises.";
    }
    else if (input.includes("math")) {
        botReply = "Practice daily and solve previous year question papers.";
    }
    else if (input.includes("exam")) {
        botReply = "Start revising early and follow your AI study plan regularly.";
    }
    else if (input.includes("timetable")) {
        botReply = "Use the Generate Plan button above to create your schedule.";
    }
    else {
        botReply = "I am your study assistant 🤖 Ask me about exams, stress, motivation, or subjects!";
    }

    let botMessage = `<p><strong>Bot:</strong> ${botReply}</p>`;
    chatbox.innerHTML += botMessage;

    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}