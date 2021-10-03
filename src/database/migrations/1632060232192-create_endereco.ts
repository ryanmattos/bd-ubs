import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createEndereco1632060232192 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
         name: 'endereco',
         columns: [ 
            {
               name: 'id_endereco',
               type: 'integer',
               generationStrategy: 'increment',
               unsigned: true,
               isPrimary: true,
               isGenerated: true,
            },
            {
               name: 'rua',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'numero',
               type: 'integer',
               isNullable: true,
            },
            {
               name: 'cep',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'bairro',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'cidade',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'referencia',
               type: 'varchar',
               isNullable: true,
               length: "100"
            },
            {
               name: 'complemento',
               type: 'varchar',
               isNullable: true,
               length: "100"
            },
         ],
      }) )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('endereco')
      
   }

}
