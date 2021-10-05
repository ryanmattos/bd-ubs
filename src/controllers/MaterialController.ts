import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import Material from '../models/Material'

const RELATIONS = new Array<string>()

export default {
   async create(req: Request, res: Response) {
      const response = await Transactions.insert<Material>(Material, req.body)

      return res.status(201).json({data: response})
   },

   async find(req: Request, res: Response) {
      const { id } = req.params

      const response = await Transactions.find<Material>(Material, Number(id), RELATIONS)

      return res.status(200).json({data: response})
   },

   async list(req: Request, res: Response) {
      const response = await Transactions.list<Material>(Material, RELATIONS)

      return res.status(200).json({data: response})
   },

   async update(req: Request, res: Response) {
      const { data } = req.body
      
      const response = await Transactions.update<Material>(Material, data);

      return res.status(200).json({data: response});
   },

}