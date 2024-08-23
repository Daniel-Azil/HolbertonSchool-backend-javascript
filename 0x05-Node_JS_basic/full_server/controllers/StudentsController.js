import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, databasePath) {
    readDatabase(databasePath)
      .then((fieldData) => {
        const output = [];
        let message;

        output.push('This is the list of our students');

        for (const field of Object.keys(fieldData)) {
          message = `Number of students in ${field}: ${
            fieldData[field].length
          }. List: ${fieldData[field].join(', ')}`;

          output.push(message);
        }
        response.status(200).send(`${output.join('\n')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, databasePath) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(databasePath)
        .then((fieldData) => {
          const studentsInMajor = fieldData[major];

          response.status(200).send(`List: ${studentsInMajor.join(', ')}`);
        })
        .catch(() => response.status(500).send('Cannot load the database'));
    }
  }
}

module.exports = StudentsController;
