const connection = require('./database/connection')

module.exports = {
    async verifyId (req, res, next) {
        const aux = await connection('projects').select('id').where('id', '=', req.params.id)
        if(aux[0]) {
            next()
        } else {
            res.json()
        }
    },
    
    

    async verifyTaskId (req, res, next) {
        const aux = await connection('tasks').select('id').where('id', '=', req.params.task_id)
        if(aux[0]) {
            next()
        } else {
            res.json()
        }
    }
}