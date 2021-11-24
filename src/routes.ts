import {Router} from 'express'
import userSchema from './schemas/users'
import { graphqlHTTP } from 'express-graphql';
const router = Router()

const routes =[
    {path:'/users',schema:userSchema}
]

routes.map((route:any)=> router.use(route.path,graphqlHTTP({graphiql:true,schema:route.schema})))


export default router