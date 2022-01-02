import { Sequelize } from "sequelize"

import * as dotenv from "dotenv"

dotenv.config()
console.log("Server DB",process.env.DB)

const conexion: Sequelize = new Sequelize(`${process.env.BD}`, {
    dialect: "mysql",
    logging: false,
    // query: {
    //     raw: true,
    // },
    dialectOptions: {
        dateStrings: true,
        typeCast: true,
    },
    timezone: "-05:00",
    sync: { force: true },
})

export default conexion
