export default {
    queryType:`
    type Query {               
        hello: String
        users:[User]
        user(input:FindOne): User
    }`,
    userType:`
    type User {
        id:ID
        first_name:String
        last_name:String
    }`,
    mutationType: `
    type Mutation {
        createUser(input:UserInput): User
        updateUser(input:UserUpdate,id:ID): User
        deleteUser(id:ID): String 
    }
    `,
    createUserInput:`
    input UserInput{
        first_name:String!
        last_name:String!
        pet:ID
    }`,
    findOneUserInput:`
    input FindOne{
        id:ID
    }`,
    updateUserInput:`
    input UserUpdate{
        first_name:String
        last_name:String
    }`
}
    

    

    

    