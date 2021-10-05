import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Endereco from "./Endereco";
import Funcionario from "./Funcionario";

@Entity('ubs')
export default class Ubs {
   @PrimaryGeneratedColumn('increment')
   id_ubs: number;

   @Column({
      length: 45
   })
   nome: string;

   @Column({
      length: 45
   })
   sigla: string;

   //idEndereco
   @ManyToOne(() => Endereco)
   @JoinColumn({ name: 'id_endereco' })
   endereco: Endereco;

   @OneToMany(() => Funcionario, funcionario => funcionario.ubs, {
      cascade: ['insert', 'update']
   })
   @JoinColumn({ name: 'id_ubs' })
   funcionarios: Funcionario[];

}