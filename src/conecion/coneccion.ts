import { Sequelize } from "sequelize"

const conexion: Sequelize = new Sequelize(`mysql://davidc:Davidc.1@@localhost/hotspot`, {
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
