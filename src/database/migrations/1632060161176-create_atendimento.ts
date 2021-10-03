import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAtendimento1632060161176 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
         name: 'atendimento',
         columns: [ 
            {
               name: 'id_atendimento',
               type: 'integer',
               generationStrategy: 'increment',
               unsigned: true,
               isPrimary: true,
               isGenerated: true,
            },
            {
               name: 'id_funcionario',
               type: 'integer',
            },
            {
               name: 'id_pessoa',
               type: 'integer',
            },
            {
               name: 'id_ubs',
               type: 'integer',
            }
         ],
         foreignKeys: [
            {
               name: 'AtendimentoFuncionario',
               columnNames: ['id_funcionario'],
               referencedColumnNames: ['id_funcionario'],
               referencedTableName: 'funcionario',
               onDelete: 'CASCADE',
               onUpdate: 'CASCADE',
            }
         ]
      }) )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('atendimento')
   }

}
