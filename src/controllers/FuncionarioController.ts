import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import Funcionario from '../models/Funcionario'

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert<Funcionario>(Funcionario, req.body)

      return res.status(201).json({data: response})
   },

   async find(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.find<Funcionario>(Funcionario, Number(id))

      return res.status(200).json({data: response})
   },

   async list(req: Request, res: Response) {
      const response = await Transactions.find<Funcionario>(Funcionario)

      return res.status(200).json({data: response})
   },

   async update(req: Request, res: Response) {
      const { data } = req.body
      
      const response = await Transactions.update<Funcionario>(Funcionario, data);

      return res.status(200).json({data: response});
   },

}