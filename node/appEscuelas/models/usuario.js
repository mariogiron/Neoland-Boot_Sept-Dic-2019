const insert = ({ username, email, password }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios (username, email, password) values (?, ?, ?)', [username, email, password], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
};

const getByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where email = ?', [pEmail], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

module.exports = {
    insert: insert,
    getByEmail: getByEmail
};