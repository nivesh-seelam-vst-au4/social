const db = require("../database")
const Sequelize = require("sequelize")

let User = db.define("users", {
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    mobile: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    following: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: true
    }
}, {
    timestamps: false
})

db.sync( /* { force: true } */ ).then(res => {
    console.log("Users table has been created!")
})

module.exports = User