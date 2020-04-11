const { Router } = require('express')
const projectsController = require('./controllers/ProjectsController')
const tasksController = require('./controllers/TasksController')
const middlewares = require('./middlewares')

const routes = Router()



routes.get('/projects', projectsController.index)
routes.post('/projects', projectsController.create)
routes.put('/projects/:id', middlewares.verifyId, projectsController.edit)
routes.delete('/projects/:id', middlewares.verifyId, projectsController.delete)



//Configurações tasks

routes.get('/projects/:id/tasks', middlewares.verifyId, tasksController.index)
routes.post('/projects/:id/tasks', middlewares.verifyId, tasksController.create)
routes.put('/projects/:id/tasks/:task_id', middlewares.verifyId, 
    middlewares.verifyTaskId, tasksController.edit)
routes.delete('/projects/:id/tasks/:task_id', middlewares.verifyId, 
    middlewares.verifyTaskId, tasksController.delete)


module.exports = routes