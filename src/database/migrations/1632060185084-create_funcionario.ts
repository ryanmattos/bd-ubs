import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFuncionario1632060185084 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
         name: 'funcionario',
         columns: [ 
            {
               name: 'id_funcionario',
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
               name: 'id_ubs',
               type: 'integer',
            },
            {
               name: 'data_admissao',
               type: 'datetime'
            },
            {
               name: 'cargo',
               type: 'varchar'
            },
            {
               name: 'data_exclusao',
               type: 'datetime',
               isNullable: true,
            },
         ],
         foreignKeys: [
            {
               name: 'FuncionarioPessoa',
               columnNames: ['id_pessoa'],
               referencedColumnNames: ['id_pessoa'],
               referencedTableName: 'pessoa',
               onDelete: 'CASCADE',
               onUpdate: 'CASCADE',
            },
            {
               name: 'FuncionarioUbs',
               columnNames: ['id_ubs'],
               referencedColumnNames: ['id_ubs'],
               referencedTableName: 'ubs',
               onDelete: 'CASCADE',
               onUpdate: 'CASCADE',
            }
         ]
      }) )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('funcionario')
   }

}
