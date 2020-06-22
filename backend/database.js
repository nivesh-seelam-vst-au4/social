const Sequelize = require('sequelize');
const dbConnection = new Sequelize('postgres://postgres:qwerty@localhost:5432/social');

dbConnection
    .authenticate()
        .then((res)=>{
            console.log(' Db Connection is created');
        })
        .catch(()=>{ 
            console.log(' Db Connection is not created');
        })

module.exports = dbConnection;
