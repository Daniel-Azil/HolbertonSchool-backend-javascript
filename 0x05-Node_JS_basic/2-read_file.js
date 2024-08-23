const fs = require('fs');

function countStudents(db_path) {
  let fileContent;
  try {
    fileContent = fs.readFileSync(`${db_path}`, { encoding: 'utf8' });
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = fileContent.split('\n');
  let studentRecords = lines.filter((item) => item);
  const NUMBER_OF_STUDENTS = studentRecords.length ? studentRecords.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  studentRecords = studentRecords.slice(1);
  const dict = {};
  studentRecords.forEach((val) => {
    const rec = val.split(',');
    const key = rec[3];
    if (!(key in dict)) {
      dict[key] = [];
    }
    dict[key].push(`${rec[0]}`);
  });

  for (const t in dict) {
    if (t) {
      console.log(`Number of students in ${t}: ${dict[t].length}. List: ${dict[t].join(', ')}`);
    }
  }
}

module.exports = countStudents;
