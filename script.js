// Array to store student data
let students = [];

// Function to add student
function addStudent() {
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const marks = document.getElementById('marks').value;

    if (name && rollNo && marks) {
        // Create student object and add to array
        const student = {
            name: name,
            rollNo: rollNo,
            marks: marks
        };
        students.push(student);

        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('rollNo').value = '';
        document.getElementById('marks').value = '';

        alert('Student added successfully!');
    } else {
        alert('Please fill all fields!');
    }
}

// Function to find student
function findStudent() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    let found = false;

    // Using for loop to search through the array
    for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === searchValue || 
            students[i].rollNo === searchValue) {
            alert(`Student Found!\nName: ${students[i].name}\nRoll No: ${students[i].rollNo}\nMarks: ${students[i].marks}`);
            found = true;
            break;
        }
    }

    if (!found) {
        alert('Student not found!');
    }
}
