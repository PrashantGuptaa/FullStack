1. To Fetch Data Of all Students
Path - /fetch-all-student-data
HTTP Operation - GET

2. To Fetch Single Student Data
Path - /fetch-student-data/:studentId
HTTP Operation - GET

3. Add New Student
Path = /save-student
HTTP Operation - POST
BODY - {
    name,
    class,
    subjects,
}

4. Update Student Data
Path - /update-student-data/:studentId
HTTP Operation - PATCH
BODY - {
    name,
    class,
    subjects,
}

5. Delete Student 
Path - /delete-student/:studentId
HTTP Operation - DELETE

