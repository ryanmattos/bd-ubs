import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import Pessoa from '../models/Pessoa'

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert<Pessoa>(Pessoa, req.body)

      return res.status(201).json({data: response})
   },

   async find(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.find<Pessoa>(Pessoa, Number(id))

      return res.status(200).json({data: response})
   },

   async list(req: Request, res: Response) {
      const response = await Transactions.find<Pessoa>(Pessoa)

      return res.status(200).json({data: response})
   },

   async update(req: Request, res: Response) {
      const { data } = req.body
      
      const response = await Transactions.update<Pessoa>(Pessoa, data);

      return res.status(200).json({data: response});
   },

   async delete(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.delete<Pessoa>(Pessoa, Number(id));

      return res.status(200).json({data: response})
   }
}