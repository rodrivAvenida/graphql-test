import {makeExecutableSchema} from "@graphql-tools/schema" ;
import { resolvers } from "../resolvers/users";
import interfaces from '../interface'

const {
    queryType,
    userType,
    mutationType,
    createUserInput,
    findOneUserInput,
    updateUserInput} = interfaces

const typeDefs = `
    ${queryType}
    ${userType}
    ${mutationType}
    ${createUserInput}
    ${updateUserInput}
    ${findOneUserInput}
`

export default makeExecutableSchema({
    resolvers,
    typeDefs
})