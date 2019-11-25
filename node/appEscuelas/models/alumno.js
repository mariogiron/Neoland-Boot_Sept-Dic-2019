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

const insert = ({ nombre, apellidos, edad, email, notamedia, matricula, discapacidad = 0, sexo }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into alumnos (nombre, apellidos, edad, email, notamedia, matricula, discapacidad, sexo, fecha_matricula) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, edad, email, notamedia, matricula, discapacidad, sexo, new Date()], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}

const getById = (pAlumnoId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from alumnos where id = ?', [pAlumnoId], (err, rows) => {
            if (err) reject(err);
            if (rows.length == 1) {
                resolve(rows[0]);
            } else {
                reject('Alumno no encontrado')
            }
        });
    });
}

const updateById = ({ nombre, apellidos, edad, email, notamedia, matricula, discapacidad = 0, sexo, id }) => {
    return new Promise((resolve, reject) => {
        db.query('update alumnos set nombre = ?, apellidos = ?, edad= ?, email = ?, notamedia = ?, matricula = ?, discapacidad = ?, sexo = ? where id = ?', [nombre, apellidos, edad, email, notamedia, matricula, discapacidad, sexo, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

const deleteById = (pAlumnoId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from alumnos where id = ?', [pAlumnoId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = {
    getAll: getAll,
    getAllCallback: getAllCallback,
    insert: insert,
    getById: getById,
    updateById: updateById,
    deleteById: deleteById
}

// function getAll() {

// }

// module.exports = {
//     getAll: getAll
// }

// exports.getAll = () => {

// }

