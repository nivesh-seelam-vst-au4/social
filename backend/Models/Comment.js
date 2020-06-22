const db = require("../database")
const Sequelize = require("sequelize")
const Post = require("./Post")

let Comment = db.define("comments", {
    data: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})


Post.hasMany(Comment, { foreignKey: "post_id" })
Comment.belongsTo(Post, { foreignKey: "post_id" })


db.sync( /* { force: true } */ ).then(res => {
    console.log("comments table has been created!")
})

module.exports = Comment