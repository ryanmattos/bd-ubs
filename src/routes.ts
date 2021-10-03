import { Router } from 'express'
import EnderecoController from './controllers/EnderecoController';
import UbsController from './controllers/UbsController'


const routes = Router();

/**UBS ROUTES */
routes.get('/ubs', UbsController.create)
routes.get('/ubs', UbsController.create)

/**ENDERECO ROUTES */
routes.post('/endereco', EnderecoController.create)
routes.get('/endereco', EnderecoController.list)
routes.get('/endereco/:id', EnderecoController.find)
routes.put('/endereco/:id', EnderecoController.update)
routes.delete('/endereco/:id', EnderecoController.delete)

/**ATENDIMENTO ROUTES */
routes.post('/atendimento', EnderecoController.create)
routes.get('/atendimento', EnderecoController.create)
routes.get('/atendimento/:id', EnderecoController.create)

/**ATENDIMENTO SERVICO ROUTES */
routes.post('/atendimento-servico', EnderecoController.create)
routes.get('/atendimento-servico', EnderecoController.create)
routes.get('/atendimento-servico/:id', EnderecoController.create)

/**FUNCIONARIO ROUTES */
routes.post('/funcionario', EnderecoController.create)
routes.get('/funcionario', EnderecoController.create)
routes.get('/funcionario/:id', EnderecoController.create)
routes.put('/funcionario/:id', EnderecoController.create)

/**GASTO MATERIAL ROUTES */

/**MATERIAL ROUTES */
routes.post('/material', EnderecoController.create)
routes.get('/material', EnderecoController.create)
routes.get('/material/:id', EnderecoController.create)
routes.put('/material/:id', EnderecoController.create)

/**SERVICO ROUTES */
routes.post('/servico', EnderecoController.create)
routes.get('/servico', EnderecoController.create)
routes.get('/servico/:id', EnderecoController.create)
routes.put('/servico/:id', EnderecoController.create)
routes.delete('/servico/:id', EnderecoController.create)

/**LAUDO ROUTES */
routes.post('/laudo', EnderecoController.create)
routes.get('/laudo', EnderecoController.create)
routes.get('/laudo/:id', EnderecoController.create)
routes.put('/laudo/:id', EnderecoController.create)

/**TELEFONE ROUTES */
routes.post('/telefone', EnderecoController.create)
routes.get('/telefone', EnderecoController.create)
routes.get('/telefone/:id', EnderecoController.create)
routes.put('/telefone/:id', EnderecoController.create)
routes.delete('/telefone/:id', EnderecoController.create)

/**PESSOA ROUTES */
routes.post('/pessoa', EnderecoController.create)
routes.get('/pessoa', EnderecoController.create)
routes.get('/pessoa/:id', EnderecoController.create)
routes.put('/pessoa/:id', EnderecoController.create)
routes.delete('/pessoa/:id', EnderecoController.create)




export default routes;