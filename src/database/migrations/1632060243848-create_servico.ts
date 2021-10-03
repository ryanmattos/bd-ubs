import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createServico1632060243848 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
         name: 'servico',
         columns: [ 
            {
               name: 'id_servico',
               type: 'integer',
               generationStrategy: 'increment',
               unsigned: true,
               isPrimary: true,
               isGenerated: true,
            },
            {
               name: 'descricao',
               type: 'varchar',
               isNullable: true,
               length: "200"
            },
            {
               name: 'id_funcionario',
               type: 'integer',
            },
         ],
         foreignKeys: [
            {
               name: 'ServicoFuncionario',
               columnNames: ['id_funcionario'],
               referencedColumnNames: ['id_funcionario'],
               referencedTableName: 'funcionario',
               onDelete: 'CASCADE',
               onUpdate: 'CASCADE',
            },
         ]
      }) )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('servico')

   }

}
