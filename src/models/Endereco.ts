import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('endereco')
export default class Endereco {
   @PrimaryGeneratedColumn('increment')
   id_endereco: number;

   @Column({
      length: 45
   })
   rua: string;

   @Column({
      nullable: true
   })
   numero: number;

   @Column({
      length: 45
   })
   cep: string;

   @Column({ length: 45 })
   bairro: string;

   @Column({ length: 45 })
   cidade: string;

   @Column({
      nullable: true,
      length: 100
   })
   referencia: string;

   @Column({
      nullable: true,
      length: 100
   })
   complemento: string;

}