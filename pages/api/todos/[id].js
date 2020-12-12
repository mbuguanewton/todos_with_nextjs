import dbConnect from '../../../db/dbConnect'
import Todo from '../../../db/models/Todo'

dbConnect()

export default async (req, res) => {
    const {
        query: { id },
        method,
    } = req

    switch (method) {
        case 'GET':
            try {
                const todo = await Todo.findOne({ _id: id })

                if (!todo) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: todo })
            } catch (error) {
                res.status(400).json({ success: false })
            }

            break
        case 'PUT':
            try {
                const update = {
                    title: req.body.title,
                    markasread: req.body.markasread,
                }
                const todo = await Todo.findByIdAndUpdate(id, update, {
                    new: true,
                    runValidators: true,
                })

                if (!todo) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: todo })
            } catch (error) {
                res.status(400).json({ success: false })
            }

            break

        case 'DELETE':
            try {
                const todo = await Todo.deleteOne({ _id: id })

                if (!todo) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} })
            } catch (error) {
                res.status(400).json({ success: false })
            }
    }
}
