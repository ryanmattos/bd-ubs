import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import Telefone from '../models/Telefone'

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert<Telefone>(Telefone, req.body)

      return res.status(201).json({data: response})
   },

   async find(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.find<Telefone>(Telefone, Number(id))

      return res.status(200).json({data: response})
   },

   async list(req: Request, res: Response) {
      const response = await Transactions.find<Telefone>(Telefone)

      return res.status(200).json({data: response})
   },

   async update(req: Request, res: Response) {
      const { data } = req.body
      
      const response = await Transactions.update<Telefone>(Telefone, data);

      return res.status(200).json({data: response});
   },

   async delete(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.delete<Telefone>(Telefone, Number(id));

      return res.status(200).json({data: response})
   }
}