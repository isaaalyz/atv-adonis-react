/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

// Rota pública de teste
router.get('/', async () => {
  return { message: 'API BANIF - Backend AdonisJS', version: '1.0.0' }
})

// Rotas de autenticação (públicas)
router.group(() => {
  router.post('/register', '#controllers/auth_controller.register')
  router.post('/login', '#controllers/auth_controller.login')

  // Rotas protegidas de autenticação
  router.post('/logout', '#controllers/auth_controller.logout').use(middleware.auth())
  router.get('/me', '#controllers/auth_controller.me').use(middleware.auth())
}).prefix('/auth')

// Rotas de clientes (protegidas)
router.group(() => {
  router.get('/', '#controllers/cliente_controller.index')
  router.get('/:id', '#controllers/cliente_controller.show')
  router.post('/', '#controllers/cliente_controller.store')
}).prefix('/clientes').use([middleware.auth()])

// Rotas de contas (protegidas)
router.group(() => {
  router.post('/', '#controllers/conta_controller.store') // criar conta
  router.get('/:id/saldo', '#controllers/conta_controller.saldo') // verificar saldo
}).prefix('/contas').use([middleware.auth()])

// Rotas de movimentações (protegidas)
router.group(() => {
  router.post('/transferir', '#controllers/movimentacao_controller.transferir') // transferência Pix
  router.post('/depositar', '#controllers/movimentacao_controller.depositar')
  router.post('/sacar', '#controllers/movimentacao_controller.sacar')
  router.get('/extrato/:conta_id', '#controllers/movimentacao_controller.extrato')
}).prefix('/movimentacoes').use([middleware.auth()])

// Rotas de aplicações financeiras (protegidas)
router.group(() => {
  router.post('/', '#controllers/aplicacao_controller.store') // criar aplicação
  router.post('/:id/resgatar', '#controllers/aplicacao_controller.resgatarAplicacao') // resgatar
}).prefix('/aplicacoes').use([middleware.auth()])
