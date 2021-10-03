import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import Atendimento from '../models/Atendimento'

const RELATIONS = ['atendimentos_servico', 'funcionario', 'funcionario.pessoa', 'pessoa', 'ubs']

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert<Atendimento>(Atendimento, req.body)

      return res.status(201).json({data: response})
   },

   async find(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.find<Atendimento>(Atendimento, Number(id), RELATIONS)

      return res.status(200).json({data: response})
   },

   async list(req: Request, res: Response) {
      const response = await Transactions.list<Atendimento>(Atendimento, RELATIONS)

      return res.status(200).json({data: response})
   },

}