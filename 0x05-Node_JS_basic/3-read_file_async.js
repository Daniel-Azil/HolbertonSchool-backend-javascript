const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, fileData) => {
      if (error) reject(Error('Cannot load the database'));
      if (fileData) {
        const resultMessages = [];
        const fileContent = fileData.toString();
        const linesArray = fileContent.split('\n');
        let validLines = linesArray.filter((line) => line);
        const NUMBER_OF_STUDENTS = validLines.length ? validLines.length - 1 : 0;
        const initialMessage = `Number of students: ${NUMBER_OF_STUDENTS}`;
        console.log(initialMessage);
        resultMessages.push(initialMessage);
        validLines = validLines.slice(1);
        const departmentCounts = {};
        validLines.forEach((line) => {
          const record = line.split(',');
          const department = record[3];
          if (!(department in departmentCounts)) {
            departmentCounts[department] = [];
          }
          departmentCounts[department].push(`${record[0]}`);
        });
        for (const department in departmentCounts) {
          if (department) {
            const departmentMessage = `Number of students in ${department}: ${departmentCounts[department].length}. List: ${departmentCounts[department].join(', ')}`;
            console.log(departmentMessage);
            resultMessages.push(departmentMessage);
          }
        }
        resolve(resultMessages);
      }
    });
  });
}

module.exports = countStudents;
