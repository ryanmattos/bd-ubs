import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import Laudo from '../models/Laudo'

const RELATIONS = ['atendimento_servico']

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert<Laudo>(Laudo, req.body)

      return res.status(201).json({data: response})
   },

   async find(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.find<Laudo>(Laudo, Number(id), RELATIONS)

      return res.status(200).json({data: response})
   },

   async list(req: Request, res: Response) {
      const response = await Transactions.list<Laudo>(Laudo, RELATIONS)

      return res.status(200).json({data: response})
   },

   async update(req: Request, res: Response) {
      const { data } = req.body
      
      const response = await Transactions.update<Laudo>(Laudo, data);

      return res.status(200).json({data: response});
   },

}