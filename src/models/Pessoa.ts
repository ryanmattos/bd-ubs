import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Endereco from "./Endereco";
import Funcionario from "./Funcionario";
import Telefone from "./Telefone";

@Entity('pessoa')
export default class Pessoa {
   @PrimaryGeneratedColumn('increment')
   id_pessoa: number;

   @Column({ 
      length: 45
   })
   rg: string;

   @Column({ 
      length: 45
   })
   cpf: string;

   @Column({
      length: 45
   })
   nome: string;

   @Column()
   data_nascimento: Date;

   @Column({
      length: 45
   })
   numero_carteirinha: string;

   @OneToMany(() => Telefone, telefone => telefone.pessoa, {
      cascade: ['insert', 'update']
   })
   @JoinColumn({ name: 'id_pessoa' })
   telefones: Telefone[];

   //idEndereco
   @ManyToOne(() => Endereco)
   @JoinColumn({ name: 'id_endereco' })
   endereco: Endereco;

   @OneToOne(() => Funcionario, funcionario => funcionario.pessoa)
   funcionario: Funcionario;
}