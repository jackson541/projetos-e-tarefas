const connection = require('../database/connection')

module.exports = {
    
    async index (req, res) {
        const projects = await connection('projects').select('*')
        return res.json(projects)
    },


    async create (require, response) {

        const { title } = require.body

        await connection('projects').insert({
            title
        })
    
        return response.json()
    },


    async edit (request, response) {
        const { id } = request.params
        const { title } = request.body

        await connection('projects').where('id', '=', id).update({
            title
        })
    
        response.json()
    },


    async delete (req, res) {
        const { id } = req.params

        await connection('projects').where('id', '=', id).del()
    
        return res.json()
    }

}

