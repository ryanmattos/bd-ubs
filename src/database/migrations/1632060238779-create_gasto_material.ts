import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createGastoMaterial1632060238779 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
         name: 'gasto_material',
         columns: [ 
            {
               name: 'id_atendimento_servico',
               type: 'integer',
            },
            {
               name: 'id_material',
               type: 'integer',
            },
            {
               name: 'quantidade',
               type: 'integer',
            },
         ],
         foreignKeys: [
            {
               name: 'GastoMaterialAtendimentoServico',
               columnNames: ['id_atendimento_servico'],
               referencedColumnNames: ['id_atendimento_servico'],
               referencedTableName: 'atendimento_servico',
               onDelete: 'CASCADE',
               onUpdate: 'CASCADE',
            },
            {
               name: 'GastoMaterialMaterial',
               columnNames: ['id_material'],
               referencedColumnNames: ['id_material'],
               referencedTableName: 'material',
               onDelete: 'CASCADE',
               onUpdate: 'CASCADE',
            },
         ]
      }) )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('gasto_material')

   }

}
