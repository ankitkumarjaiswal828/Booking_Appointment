function findStudentNameByAge(studentObj, targetAge) {
  for (const studentName in studentObj) {
    if (studentObj.hasOwnProperty(studentName)) {
      if (studentObj[studentName] === targetAge) {
        return studentName;
      }
    }
  }
  return null; // Return null if no student with the specified age is found
}

// Example usage
const studentObj = {
  'yash': 26,
  'vaibhav': 24,
  'rajesh': 25,
};

const ageToFind = 25;
const result = findStudentNameByAge(studentObj, ageToFind);

if (result) {
  console.log(result); // Output: rajesh
} else {
  console.log('No student found with the specified age.');
}
