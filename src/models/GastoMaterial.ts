import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import AtendimentoServico from "./AtendimentoServico";
import Material from "./Material";

@Entity('gasto_material')
export default class GastoMaterial {
   @PrimaryGeneratedColumn('increment')
   id_gasto_material: number;

   @Column()
   quantidade: number;

   //idAtendimentoServico
   @ManyToOne(() => AtendimentoServico, atendimentoServico => atendimentoServico.gastoMateriais)
   @JoinColumn({ name: 'id_atendimento_servico' })
   atendimento_servico: AtendimentoServico;

   //idMaterial
   @ManyToOne(() => Material)
   @JoinColumn({ name: 'id_material' })
   material: Material;

}