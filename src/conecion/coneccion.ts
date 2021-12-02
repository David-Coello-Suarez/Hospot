import { Sequelize } from "sequelize"

const conexion: Sequelize = new Sequelize(`localhost:3000`, {
    dialect: 'mysql',
    logging: true,
    // query: {
    //     raw: true,
    // },
    dialectOptions: {
        dateStrings: true,
        typeCast: true,
    },
    timezone: "-05:00",
})

export default conexion