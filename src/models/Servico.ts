import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Funcionario from "./Funcionario";

@Entity('servico')
export default class Servico {
   @PrimaryGeneratedColumn('increment')
   id_servico: number;

   @Column({
      nullable: true,
      length: 200
   })
   descricao: string;

   //idFuncionario
   @ManyToOne(() => Funcionario, funcionario => funcionario.servicos)
   @JoinColumn({ name: 'id_funcionario' })
   funcionario: Funcionario;
}