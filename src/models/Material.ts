import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('material')
export default class Material {
   @PrimaryGeneratedColumn('increment')
   id_material: number;

   @Column({ 
      length: 45
   })
   nome: string;

   @Column({ 
      length: 45
   })
   descricao: string;

   @Column()
   estoque: number;

   @Column({ 
      length: 45
   })
   tipo_unitario: string;

   @Column()
   data_validade: Date;

}