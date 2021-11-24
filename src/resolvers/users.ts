import db from "../db/db";

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world with GraphQL";
    },
    users: async () => {
      const userList = await db.models.user.findAll(); //FindAll
      return userList;
    },
    user: async (_: any, { input }: any) => {
      const findUser: any = await db.models.user.findByPk(input.id); //Find One
      return findUser;
    },
  },
  Mutation: {
    createUser: async (
        _: any, 
        { input }: {input:{
            first_name:string, 
            last_name:string,
            }
        }) => {
      try {
        if (!input.first_name || !input.last_name)
          throw new Error("Faltan parámetros");

        let newUser = await db.models.user.create(input);
        return newUser;
      } catch (err: any) {
        console.log(err);
        return err;
      }
    },

    updateUser: async(_:any,{input,id}:{input:{
        first_name?:string,
        last_name?:string
        },
        id:number
        }) => {

        try {
            // let user = await db.models.user.update(input,{where:{id}})
            let user :any= await db.models.user.findByPk(id)
            if (!user) throw new Error ("EL usuario no existe")

            user.first_name=input.first_name
            user.last_name= input.last_name

            await user.save()

            return user
        } catch (error) {
            console.log({error})
            return error
        }

    },
    deleteUser: async(_:any,input:{id:number})=>{
        try {
            const exUser:any = await db.models.user.destroy({where:{id:input.id}})
            if(!exUser) return "No existe un usuario con ese id"
            return "Usuario eliminado"
        } catch (error) {
            console.log(error)
            return error
        }
    }
  } as any,
};
