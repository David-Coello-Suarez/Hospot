import { Sequelize } from "sequelize"

const conexion: Sequelize = new Sequelize(`mysql://udmblwbci2efnadz:hib3C0d5ZBxw2yW2QWwv@brstnivzvrvn55x5coqi-mysql.services.clever-cloud.com:3306/brstnivzvrvn55x5coqi`, {
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