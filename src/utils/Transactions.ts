import { getRepository, EntityTarget } from "typeorm"

export default {
   async insert<T>(entity: EntityTarget<T>, data: T) {
      const repository = getRepository(entity);
      
      const obj = repository.create(data);

      await repository.save(obj);

      return obj;
   },

   async find<T>(entity: EntityTarget<T>, id: number, relations?: string[]) {
      const repository = getRepository(entity);
      
      const obj = await repository.findOne(id, {
            relations: relations
         })

      return obj;
   },

   async list<T>(entity: EntityTarget<T>, relations?: string[]) {
      const repository = getRepository(entity);
      
      const obj = await repository.find({
            relations: relations
         })

      return obj;
   },

   async update<T>(entity: EntityTarget<T>, data: T) {
      const repository = getRepository(entity);

      await repository.save(data);

      return { message: 'Updated successfully' }
   },

   async delete<T>(entity: EntityTarget<T>, id: number) {
      const repository = getRepository(entity);

      const data = await repository.findOne(id);

      if (data) {
         await repository.delete(data);

         return { message: 'Register deleted successfully' }
      }
      else
         return { message: "Register does not exist" }
   }
}