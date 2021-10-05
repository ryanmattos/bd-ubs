import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import Ubs from '../models/Ubs'

const RELATIONS = new Array<string>()

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert(Ubs, req.body)

      return res.status(201).json({data: response})
   },

   async find(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.find<Ubs>(Ubs, Number(id), RELATIONS)

      return res.status(200).json({data: response})
   },

   async list(req: Request, res: Response) {
      const response = await Transactions.list<Ubs>(Ubs, RELATIONS)

      return res.status(200).json({data: response})
   }
}