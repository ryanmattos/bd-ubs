import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createLaudo1632060190328 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
         name: 'laudo',
         columns: [ 
            {
               name: 'id_laudo',
               type: 'integer',
               generationStrategy: 'increment',
               unsigned: true,
               isPrimary: true,
               isGenerated: true,
            },
            {
               name: 'data_entregue',
               type: 'datetime',
               isNullable: true,
            },
            {
               name: 'arquivo_resultado',
               type: 'varchar',
               isNullable: true,
               length: "200"
            },
            {
               name: 'id_atendimento_servico',
               type: 'integer',
            },
         ],
         foreignKeys: [
            {
               name: 'LaudoAtendimentoServico',
               columnNames: ['id_atendimento_servico'],
               referencedColumnNames: ['id_atendimento_servico'],
               referencedTableName: 'atendimento_servico',
               onDelete: 'CASCADE',
               onUpdate: 'CASCADE',
            },
         ]
      }) )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('laudo')

   }

}
