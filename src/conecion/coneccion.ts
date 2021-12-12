import { Sequelize } from "sequelize"

const conexion: Sequelize = new Sequelize(`mysql://davidc:Davidc.1@localhost:3306/hotspot`, {
    dialect: 'mysql',
    logging: false,
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