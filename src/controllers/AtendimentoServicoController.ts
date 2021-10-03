import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import AtendimentoServico from '../models/AtendimentoServico'

const RELATIONS = ['laudo', 'servico', 'atendimento']

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert<AtendimentoServico>(AtendimentoServico, req.body)

      return res.status(201).json({data: response})
   },

   async find(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.find<AtendimentoServico>(AtendimentoServico, Number(id), RELATIONS)

      return res.status(200).json({data: response})
   },

   async list(req: Request, res: Response) {
      const response = await Transactions.list<AtendimentoServico>(AtendimentoServico, RELATIONS)

      return res.status(200).json({data: response})
   },

   async update(req: Request, res: Response) {
      const { data } = req.body
      
      const response = await Transactions.update<AtendimentoServico>(AtendimentoServico, data);

      return res.status(200).json({data: response});
   },

}