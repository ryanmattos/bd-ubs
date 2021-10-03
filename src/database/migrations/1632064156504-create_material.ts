import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMaterial1632064156504 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
         name: 'material',
         columns: [ 
            {
               name: 'id_material',
               type: 'integer',
               generationStrategy: 'increment',
               unsigned: true,
               isPrimary: true,
               isGenerated: true,
            },
            {
               name: 'nome',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'descricao',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'estoque',
               type: 'integer',
            },
            {
               name: 'tipo_unitario',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'data_validade',
               type: 'date'
            },
         ]
      }) )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('material')

   }

}
