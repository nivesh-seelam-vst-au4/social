const db = require("../database")
const Sequelize = require("sequelize")
const User = require("./User")

let Post = db.define("posts", {
    data: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})


User.hasMany(Post, { foreignKey: "user_id" })
Post.belongsTo(User, { foreignKey: "user_id" })


db.sync( /* { force: true } */ ).then(res => {
    console.log("Posts table has been created!")
})

module.exports = Post