import { Sequelize } from "sequelize";
import path from "path";
import fs from "fs";
import sequelize from "sequelize";

const connect = new Sequelize(
  `mysql://root:rodri7997jaja@localhost:3306/graph`,
  { logging: false }
);

const modelRoute = fs
  .readdirSync(path.join(__dirname, "/models"))
  .reduce((total: any[], model: any) => {
    let route = path.join(__dirname, "/models", model);
    total.push(require(route));
    return total;
  }, []);

modelRoute.forEach((model: any) => model.default(connect));

const { user, pet } = connect.models;

/***************************  UNO A UNO  ***********************************/

// user.hasOne(pet, { foreignKey: "idDelQueLoCria" }); =====> el id del usuario se guardara dentro del registro de la mascota
// user.belongsTo(pet, { foreignKey: "mascotilla" }); =====> el id de la mascota se guarda dentro del usuario

/***************************  UNO A MUCHOS  ***********************************/

// user.hasMany(pet, { foreignKey: "idDelUsuario" });  ====>  el id del usuario se guardara en cada mascota que le pertenezca

/*************************  MUCHOS A MUCHOS  ********************************/

// user.belongsToMany(pet, { through: "user_pet" }); =====> through sera el nombre que tomara la tabla intermedia entre pets y users

export default { connect, models: connect.models };
