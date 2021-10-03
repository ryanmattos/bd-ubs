import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import Atendimento from '../models/Atendimento'

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert<Atendimento>(Atendimento, req.body)

      return res.status(201).json({data: response})
   },

   async find(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.find<Atendimento>(Atendimento, Number(id))

      return res.status(200).json({data: response})
   },

   async list(req: Request, res: Response) {
      const response = await Transactions.find<Atendimento>(Atendimento)

      return res.status(200).json({data: response})
   },

}