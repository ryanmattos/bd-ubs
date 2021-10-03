import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPessoa1632060195576 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
         name: 'pessoa',
         columns: [ 
            {
               name: 'id_pessoa',
               type: 'integer',
               generationStrategy: 'increment',
               unsigned: true,
               isPrimary: true,
               isGenerated: true,
            },
            {
               name: 'rg',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'cpf',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'nome',
               type: 'varchar',
               length: "45"
            },
            {
               name: 'data_nascimento',
               type: 'date',
            },
            {
               name: 'numero_carteirinha',
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
               name: 'PessoaEndereco',
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
      await queryRunner.dropTable('pessoa')

   }

}
