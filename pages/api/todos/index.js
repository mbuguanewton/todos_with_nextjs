import dbConnect from '../../../db/dbConnect'
import Todo from '../../../db/models/Todo'

dbConnect()

export default async (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const todos = await Todo.find({})
                res.status(200).json({ success: true, data: todos })
            } catch (error) {
                res.status(400).json({ success: false })
            }

            break

        case 'POST':
            try {
                const newTodo = new Todo({
                    title: req.body.title,
                    markasread: false,
                })
                const todo = await newTodo.save()
                res.status(201).json({ success: true, data: todo })
            } catch (error) {
                res.status(400).json({ success: false })
            }
    }
}
