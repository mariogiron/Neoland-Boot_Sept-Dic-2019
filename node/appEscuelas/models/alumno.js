const moment = require('moment');

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from alumnos', (err, rows) => {
            if (err) reject(err);
            for (let row of rows) {
                row.fecha_matricula = moment(row.fecha_matricula).format('DD-MM-YYYY');
            }
            resolve(rows);
        })
    });
};

const getAllCallback = (done) => {
    db.query('select * from alumnos', (err, rows) => {
        if (err) return done(err, null);
        done(null, rows);
    })
};

module.exports = {
    getAll: getAll,
    getAllCallback: getAllCallback
}

// function getAll() {

// }

// module.exports = {
//     getAll: getAll
// }

// exports.getAll = () => {

// }

