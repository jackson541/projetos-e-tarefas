const express = require('express')
const cors = require('cors')
const routes = require('./routes.js')
//const ProjectsController = require('./controllers/ProjectsController.js')

const server = express()

/**
 * Aqui deve ser definido a URl liberada para uso da API
 * ex:
 * server.use(cors({
 *      origin: 'http://front.com'
 * }))
 * 
 * atualmente todos os links estão liberados para uso
 */
server.use(cors())

server.use(express.json())
server.use(routes)



server.listen(3333)