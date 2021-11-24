import { Sequelize, DataTypes } from "sequelize";

export default (sequelize:any)=>{
    sequelize.define("pet",{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
}