import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import AtendimentoServico from "./AtendimentoServico";
import Funcionario from "./Funcionario";
import Pessoa from "./Pessoa";
import Ubs from "./Ubs";

@Entity('atendimento')
export default class Atendimento {
   @PrimaryGeneratedColumn('increment')
   id_atendimento: number;

   @OneToMany(() => AtendimentoServico, (atendimento_servico) => atendimento_servico.atendimento, {
      cascade: ['insert', 'update'],
   })
   @JoinColumn({ name: 'id_atendimento_servico' })
   atendimentos_servico: AtendimentoServico[];
   
   //idFuncionario
   @ManyToOne(() => Funcionario)
   @JoinColumn({ name: 'id_funcionario' })
   funcionario: Funcionario;

   //idPessoa
   @ManyToOne(() => Pessoa)
   @JoinColumn({ name: 'id_pessoa' })
   pessoa: Pessoa;

   //idUbs
   @ManyToOne(() => Ubs)
   @JoinColumn({ name: 'id_ubs' })
   ubs: Ubs;
}