import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Pessoa from "./Pessoa";
import Servico from "./Servico";

@Entity('funcionario')
export default class Funcionario {
   @PrimaryGeneratedColumn('increment')
   id_funcionario: number;

   @Column()
   data_admissao: Date;

   @Column()
   cargo: string;

   @Column({
      nullable: true
   })
   data_exclusao: Date;

   @OneToMany(() => Servico, servico => servico.funcionario, {
      cascade: ['insert', 'update']
   })
   @JoinColumn({ name: 'id_funcionario' })
   servicos: Servico[];

   //idPessoa
   @OneToOne(() => Pessoa)
   @JoinColumn({ name: 'id_pessoa'})
   pessoa: Pessoa;

}