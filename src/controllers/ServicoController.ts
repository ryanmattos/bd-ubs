import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import Servico from '../models/Servico'

const RELATIONS = ['funcionario', 'funcionario.pessoa']

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert<Servico>(Servico, req.body)

      return res.status(201).json({data: response})
   },

   async find(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.find<Servico>(Servico, Number(id), RELATIONS)

      return res.status(200).json({data: response})
   },

   async list(req: Request, res: Response) {
      const response = await Transactions.list<Servico>(Servico, RELATIONS)

      return res.status(200).json({data: response})
   },

   async update(req: Request, res: Response) {
      const { data } = req.body
      
      const response = await Transactions.update<Servico>(Servico, data);

      return res.status(200).json({data: response});
   },

   async delete(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.delete<Servico>(Servico, Number(id));

      return res.status(200).json({data: response})
   }
}