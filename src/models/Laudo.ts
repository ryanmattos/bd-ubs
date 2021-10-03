import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import AtendimentoServico from "./AtendimentoServico";

@Entity('laudo')
export default class Laudo {
   @PrimaryGeneratedColumn('increment')
   id_laudo: number;

   @Column({
      nullable: true
   })
   data_entregue: Date;

   @Column({
      nullable: true,
      length: 45
   })
   arquivo_resultado: string;

   //idAtendimentoServico
   @ManyToOne(() => AtendimentoServico, atendimentoServico => atendimentoServico.laudos)
   @JoinColumn({ name: 'id_atendimento_servico' })
   atendimento_servico: AtendimentoServico;
}