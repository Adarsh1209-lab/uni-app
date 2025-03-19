function studentLogin() {
    let rollNumber = document.getElementById("studentRoll").value;
    if (rollNumber) {
        localStorage.setItem("loggedInUser", rollNumber);
        showStudentSection(rollNumber);
    } else {
        alert("Please enter your roll number.");
    }
}

function teacherLogin() {
    let username = document.getElementById("teacherUser").value;
    let password = document.getElementById("teacherPass").value;
    
    if (username === "teacher" && password === "password123") {
        localStorage.setItem("loggedInUser", "teacher");
        showTeacherSection();
    } else {
        alert("Invalid teacher credentials.");
    }
}

function showStudentSection(rollNumber) {
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("studentSection").classList.remove("hidden");

    let attendance = localStorage.getItem(`attendance_${rollNumber}`) || 0;
    document.getElementById("studentAttendance").innerText = attendance;
}

function showTeacherSection() {
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("teacherSection").classList.remove("hidden");
}

function markAttendance(rollNumber) {
    let currentAttendance = localStorage.getItem(`attendance_${rollNumber}`) || 0;
    let newAttendance = parseInt(currentAttendance) + 1;
    localStorage.setItem(`attendance_${rollNumber}`, newAttendance);
    alert(`Attendance marked for Roll No: ${rollNumber}`);
}

function logout() {
    localStorage.removeItem("loggedInUser");
    location.reload();
}

// Auto-login check
window.onload = function () {
    let user = localStorage.getItem("loggedInUser");
    if (user) {
        if (user === "teacher") {
            showTeacherSection();
        } else {
            showStudentSection(user);
        }
    }
};
