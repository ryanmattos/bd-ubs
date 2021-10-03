import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUbs1632060252334 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
         name: 'ubs',
         columns: [ 
            {
               name: 'id_ubs',
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
               name: 'sigla',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'id_endereco',
               type: 'integer',
            }
         ],
         foreignKeys: [
            {
               name: 'UbsEndereco',
               columnNames: ['id_endereco'],
               referencedColumnNames: ['id_endereco'],
               referencedTableName: 'endereco',
               onDelete: 'CASCADE',
               onUpdate: 'CASCADE',
            },
         ]
      }) )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('ubs')

   }

}
