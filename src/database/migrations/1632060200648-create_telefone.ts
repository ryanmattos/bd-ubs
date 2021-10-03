import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTelefone1632060200648 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
         name: 'telefone',
         columns: [ 
            {
               name: 'id_telefone',
               type: 'integer',
               generationStrategy: 'increment',
               unsigned: true,
               isPrimary: true,
               isGenerated: true,
            },
            {
               name: 'id_pessoa',
               type: 'integer',
            },
            {
               name: 'numero',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'descricao',
               type: 'varchar',
               isNullable: true,
               length: "45"
            },
         ],
         foreignKeys: [
            {
               name: 'TelefonePessoa',
               columnNames: ['id_pessoa'],
               referencedColumnNames: ['id_pessoa'],
               referencedTableName: 'pessoa',
               onDelete: 'CASCADE',
               onUpdate: 'CASCADE',
            },
         ]
      }) )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('telefone')

   }

}
