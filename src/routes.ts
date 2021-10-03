import { Router } from 'express'
import AtendimentoController from './controllers/AtendimentoController';
import AtendimentoServicoController from './controllers/AtendimentoServicoController';
import EnderecoController from './controllers/EnderecoController';
import FuncionarioController from './controllers/FuncionarioController';
import LaudoController from './controllers/LaudoController';
import MaterialController from './controllers/MaterialController';
import PessoaController from './controllers/PessoaController';
import ServicoController from './controllers/ServicoController';
import TelefoneController from './controllers/TelefoneController';
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
routes.post('/atendimento', AtendimentoController.create)
routes.get('/atendimento', AtendimentoController.list)
routes.get('/atendimento/:id', AtendimentoController.find)

/**ATENDIMENTO SERVICO ROUTES */
routes.post('/atendimento-servico', AtendimentoServicoController.create)
routes.get('/atendimento-servico', AtendimentoServicoController.list)
routes.get('/atendimento-servico/:id', AtendimentoServicoController.find)

/**FUNCIONARIO ROUTES */
routes.post('/funcionario', FuncionarioController.create)
routes.get('/funcionario', FuncionarioController.list)
routes.get('/funcionario/:id', FuncionarioController.find)
routes.put('/funcionario/:id', FuncionarioController.update)

/**GASTO MATERIAL ROUTES */

/**MATERIAL ROUTES */
routes.post('/material', MaterialController.create)
routes.get('/material', MaterialController.list)
routes.get('/material/:id', MaterialController.find)
routes.put('/material/:id', MaterialController.update)

/**SERVICO ROUTES */
routes.post('/servico', ServicoController.create)
routes.get('/servico', ServicoController.list)
routes.get('/servico/:id', ServicoController.find)
routes.put('/servico/:id', ServicoController.update)
routes.delete('/servico/:id', ServicoController.delete)

/**LAUDO ROUTES */
routes.post('/laudo', LaudoController.create)
routes.get('/laudo', LaudoController.list)
routes.get('/laudo/:id', LaudoController.find)
routes.put('/laudo/:id', LaudoController.update)

/**TELEFONE ROUTES */
routes.post('/telefone', TelefoneController.create)
routes.get('/telefone', TelefoneController.list)
routes.get('/telefone/:id', TelefoneController.find)
routes.put('/telefone/:id', TelefoneController.update)
routes.delete('/telefone/:id', TelefoneController.delete)

/**PESSOA ROUTES */
routes.post('/pessoa', PessoaController.create)
routes.get('/pessoa', PessoaController.list)
routes.get('/pessoa/:id', PessoaController.find)
routes.put('/pessoa/:id', PessoaController.update)
routes.delete('/pessoa/:id', PessoaController.delete)




export default routes;