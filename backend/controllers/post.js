const postController = {}
const Model = require('./../Models/Post')
const User = require('./../Models/User')

postController.create = async(req, res) => {
    try {
        const { body } = req
        let post = await Model.create({ data: body.data, user_id: body.user_id })
        res.send(post)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

postController.get = async(req, res) => {
    try {
        let posts = await Model.findAll()
        res.send(posts)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

postController.getForSingleUser = async(req, res) => {
    try {
        const { body, params } = req
        let post = await Model.findAll({ where: { user_id: params.id }, include: [User] });
        res.send(post)
    } catch (error) {
        console.log(error)
    }
}

postController.put = async(req, res) => {
    try {
        const { body, params } = req
        let post = await Model.update({ data: body.data, user_id: body.user_id }, { where: { id: params.id } })
        res.send(post)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

postController.delete = async(req, res) => {
    try {
        const { params } = req
        await Model.destroy({ where: { id: params.id } })
        res.send("Deleted successfully")
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

module.exports = postController