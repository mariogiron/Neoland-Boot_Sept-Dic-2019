const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from alumnos', (err, rows) => {
            if (err) reject(err);
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

