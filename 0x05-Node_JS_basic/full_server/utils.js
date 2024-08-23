const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, fileContent) => {
      if (error) {
        reject(Error(error));
        return;
      }
      const lines = fileContent.toString().split('\n');

      let studentRecords = lines.filter((line) => line);

      studentRecords = studentRecords.map((record) => record.split(','));

      const categorizedStudents = {};
      for (const index in studentRecords) {
        if (index !== 0) {
          if (!categorizedStudents[studentRecords[index][3]]) categorizedStudents[studentRecords[index][3]] = [];

          categorizedStudents[studentRecords[index][3]].push(studentRecords[index][0]);
        }
      }

      delete categorizedStudents.field;

      resolve(categorizedStudents);

    });
  });
}

export default readDatabase;
