import { Request, Response } from "express"

import Transactions from '../utils/Transactions'

import GastoMaterial from '../models/GastoMaterial'

import { getManager, getRepository } from "typeorm"

const RELATIONS = ['laudos', 'servico', 'atendimento', 'atendimento.funcionario', 'atendimento.pessoa', 'atendimento.ubs']

export default {
   async update(req: Request, res: Response) {
      const { data } = req.body
      
      const response = await Transactions.update<GastoMaterial>(GastoMaterial, data);

      return res.status(200).json({data: response});
   },

   async getGastoMaterial(req: Request, res: Response) {
      const { id } = req.params

      const repository = getRepository(GastoMaterial)

      const manager = getManager()

      const rawData = await manager.query(`SELECT * FROM gasto_material gm
         WHERE gm.id_atendimento_servico = ${id}
      `);

      

      return res.status(200).json({data: rawData})
   }

}