import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import Ubs from '../models/Ubs'

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert(Ubs, req.body)

      return res.status(201).json({data: response})
   }
}