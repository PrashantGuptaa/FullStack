const express = require("express");
const studentData = require("./database");
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// To Fetch Data Of all Students
app.get("/fetch-all-student-data", (req, res) => {
  res.status(200).json(studentData);
});

// To Fetch Single Student Data
app.get("/fetch-student-data/:studentId", (req, res) => {
  const { studentId } = req.params;
  console.log("Student Id", studentId, typeof studentId);
  const data = studentData.find(
    (studentDataObj) => studentDataObj.id.toString() === studentId
  );

  if (!data) {
    res
      .status(404)
      .json({ error: `Student with Id ${studentId} do not exists` });
  }
  res.status(200).json(data);
});

// Add New Student
app.post('/save-student', (req, res) => {
    console.log("Request Body: ", req.body)
  const { name, class: studentClass, subjects } = req.body; 
  const id = studentData.length + 1;
  const dataObj = {
    name, subjects, id,
    class: studentClass
  }
  studentData.push(dataObj);
  res.status(201).json({ message: 'success', id })
})

// Update Student Data
app.patch('/update-student-data/:studentId', (req, res) => {
  const { studentId } = req.params;
    const { name, class: studentClass, subjects } = req.body; 
    for (let i = 0; i < studentData.length; i++) {
        const studentObj = studentData[i];
        if (studentObj.id.toString() === studentId) {
            studentObj.name = name || studentObj.name;
            studentObj.class = studentClass || studentObj.class;
            studentObj.subjects = subjects || studentObj.subjects;
        }
    }
  res.status(200).json({ message: 'success' })
})

// Delete student
app.delete('/delete-student/:studentId', (req, res) => {
    const { studentId} = req.params;
    const index = studentData.findIndex(studentObj => studentObj.id.toString() === studentId);
    studentData.splice(index, 1);
    res.status(200).json({ message: 'success' });
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));