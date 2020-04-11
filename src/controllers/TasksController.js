const connection = require('../database/connection')

module.exports = {
    async index (req, res) {
        const tasks = await connection('tasks').select('*')
        return res.json(tasks)
    },


    async create (require, response) {
        const project_id = require.params.id
        const { title } = require.body

        await connection('tasks').insert({
            title,
            project_id
        })
    
        return response.json()
    },


    async edit (request, response) {
        const { id, task_id } = request.params
        const { title } = request.body

        await connection('tasks').where('project_id', '=', id ,'and', 'id', '=',
        task_id).update({
            title
        })
    
        response.json()
    },


    async delete (req, res) {
        const { id, task_id } = req.params

        await connection('tasks').where('project_id', '=', id ,'and', 'id', '=',
        task_id).del()
    
        return res.json()
    }
}