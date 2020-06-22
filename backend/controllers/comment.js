const commentController = {}
const Model = require('./../Models/Comment')
const Post = require('./../Models/Post')


commentController.create = async(req, res) => {
    try {
        const { body } = req
        let comment = await Model.create({ data: body.data, post_id: body.post_id })
        res.send(comment)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

commentController.get = async(req, res) => {
    try {
        let comments = await Model.findAll()
        res.send(comments)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

commentController.getCommentForPost = async(req, res) => {
    try {
        const { body, params } = req
        let comment = await Model.findAll({ where: { post_id: params.id }, include: [Post] });
        res.send(comment)
    } catch (error) {
        console.log(error)
    }
}

commentController.put = async(req, res) => {
    try {
        const { body, params } = req
        let comment = await Model.update({ data: body.data, post_id: body.post_id }, { where: { id: params.id } })
        res.send(comment)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

commentController.delete = async(req, res) => {
    try {
        const { params } = req
        await Model.destroy({ where: { id: params.id } })
        res.send("Deleted successfully")
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

module.exports = commentController