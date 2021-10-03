import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Pessoa from "./Pessoa";

@Entity('telefone')
export default class Telefone {
   @PrimaryGeneratedColumn('increment')
   id_telefone: number;

   @Column({ 
      length: 45
   })
   numero: string;

   @Column({
      nullable: true,
      length: 45
   })
   descricao: string;

   //idPessoa
   @ManyToOne(() => Pessoa, pessoa => pessoa.telefones)
   @JoinColumn({ name: 'id_pessoa' })
   pessoa: Pessoa;
}