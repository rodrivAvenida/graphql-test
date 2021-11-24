import {Sequelize} from "sequelize";
import path from "path";
import fs from 'fs';
import sequelize from "sequelize";

const connect = new Sequelize (`mysql://root:rodri7997jaja@localhost:3306/graph`,{logging:false})

const modelRoute = fs.readdirSync(path.join(__dirname,'/models'))
.reduce((total:any[],model:any)=>{
    let route = path.join(__dirname,'/models',model)
    total.push(require(route))
    return total
},[])

modelRoute.forEach((model:any)=>model.default(connect))

const {
    user,
    pet
}=connect.models

user.hasOne(pet,{as:"owner",foreignKey:"id"})



export default {connect,models:connect.models}