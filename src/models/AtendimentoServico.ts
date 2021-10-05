import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Atendimento from "./Atendimento";
import GastoMaterial from "./GastoMaterial";
import Laudo from "./Laudo";
import Servico from "./Servico";

@Entity('atendimento_servico')
export default class AtendimentoServico {
   @PrimaryGeneratedColumn('increment')
   id_atendimento_servico: number;

   @Column()
   num_sala: number;

   @Column({
      nullable: true,
      length: 200
   })
   observacao: string;

   @Column()
   data_hora_atendimento: Date;

   @OneToMany(() => Laudo, (laudo) => laudo.atendimento_servico, {
      cascade: ['insert', 'update'],
   })
   @JoinColumn({ name: 'id_laudo' })
   laudos: Laudo[];

   // @OneToMany(() => GastoMaterial, (gastoMaterial) => gastoMaterial.atendimento_servico, {
   //    cascade: ['insert', 'update'],
   // })
   // @JoinColumn({ name: 'id_gasto_material' })
   // gastoMateriais: GastoMaterial[];

   //idAtendimento
   @ManyToOne(() => Atendimento, atendimento => atendimento.atendimentos_servico)
   @JoinColumn({ name: 'id_atendimento' })
   atendimento: Atendimento;

   //idServico
   @ManyToOne(() => Servico)
   @JoinColumn({ name: 'id_servico' })
   servico: Servico;

}