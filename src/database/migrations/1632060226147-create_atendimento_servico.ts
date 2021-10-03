import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAtendimentoServico1632060226147 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
         name: 'atendimento_servico',
         columns: [ 
            {
               name: 'id_atendimento_servico',
               type: 'integer',
               generationStrategy: 'increment',
               unsigned: true,
               isPrimary: true,
               isGenerated: true,
            },
            {
               name: 'id_atendimento',
               type: 'integer',
            },
            {
               name: 'id_servico',
               type: 'integer',
            },
            {
               name: 'num_sala',
               type: 'integer',
            },
            {
               name: 'observacao',
               type: 'varchar',
               isNullable: true,
               length: "200"
            },
            {
               name: 'data_hora_atendimento',
               type: 'datatime'
            },
         ],
         foreignKeys: [
            {
               name: 'AtendimentoServicoAtendimento',
               columnNames: ['id_atendimento'],
               referencedColumnNames: ['id_atendimento'],
               referencedTableName: 'atendimento',
               onDelete: 'CASCADE',
               onUpdate: 'CASCADE',
            },
            {
               name: 'AtendimentoServicoServico',
               columnNames: ['id_servico'],
               referencedColumnNames: ['id_servico'],
               referencedTableName: 'servico',
               onDelete: 'CASCADE',
               onUpdate: 'CASCADE',
            },
         ]
      }) )

   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('atendimento_servico')

   }

}
