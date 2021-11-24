import { DataTypes } from "sequelize/dist";
import connect from "../db";


export default (sequelize:any)=>{
    sequelize.define("user",{
        first_name:{
            type:DataTypes.STRING
        },
        last_name:{
            type:DataTypes.STRING
        }
    },{
        timestamps:true
    })
}
