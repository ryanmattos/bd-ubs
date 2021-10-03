import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Endereco from "./Endereco";

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

}