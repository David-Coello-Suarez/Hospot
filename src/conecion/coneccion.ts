import { Sequelize } from "sequelize"

const conexion: Sequelize = new Sequelize(`mysql://uqmzksitwdgvg4nw:mnCevtzJqBy1ybSWCQnI@bhw1zvw36q2zxmctgely-mysql.services.clever-cloud.com:3306/bhw1zvw36q2zxmctgely`, {
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