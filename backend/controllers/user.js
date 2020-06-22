const userController = {}
const Model = require('./../Models/User')

userController.create = async(req, res) => {
    try {
        const { body } = req
        let user = await Model.create({ user_name: body.user_name, first_name: body.first_name, last_name: body.last_name, email: body.email, mobile: body.mobile, password: body.password, age: body.age, following: body.following })
        res.send(user)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

userController.get = async(req, res) => {
    try {
        let users = await Model.findAll()
        res.send(users)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

userController.getOneUser = async(req, res) => {
    try {
        const { body, params } = req
        let post = await Model.findAll({ where: { id: params.id } });
        res.send(post)
    } catch (error) {
        console.log(error)
    }
}

userController.put = async(req, res) => {
    try {
        const { body, params } = req
        let user = await Model.update({ user_name: body.user_name, first_name: body.first_name, last_name: body.last_name, email: body.email, mobile: body.mobile, password: body.password, age: body.age, following: body.following }, { where: { id: params.id } })
        res.send(user)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

userController.delete = async(req, res) => {
    try {
        const { params } = req
        await Model.destroy({ where: { id: params.id } })
        res.send("Deleted successfully")
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

module.exports = userController