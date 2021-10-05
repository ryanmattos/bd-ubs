import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import Endereco from '../models/Endereco'

const RELATIONS = new Array<string>()

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert<Endereco>(Endereco, req.body)

      return res.status(201).json({data: response})
   },

   async find(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.find<Endereco>(Endereco, Number(id), RELATIONS)

      return res.status(200).json({data: response})
   },

   async list(req: Request, res: Response) {
      const response = await Transactions.list<Endereco>(Endereco, RELATIONS)

      return res.status(200).json({data: response})
   },

   async update(req: Request, res: Response) {
      const { data } = req.body
      
      const response = await Transactions.update<Endereco>(Endereco, data);

      return res.status(200).json({data: response});
   },

   async delete(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.delete<Endereco>(Endereco, Number(id));

      return res.status(200).json({data: response})
   }
}