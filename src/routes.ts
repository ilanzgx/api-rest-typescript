import e, { Router } from 'express'
import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'

const routes = Router()

routes.post('/user', new UserController().create)
routes.post('/login', new UserController().login)

/* Todas as rotas abaixo estão com o middleware de autenticação jwt */
routes.use(authMiddleware)

routes.get('/profile', new UserController().getProfile)

export default routes