import { DataTypes } from "sequelize"
import conexion from "../conecion/coneccion"
import { IUsuarios } from "../interfaces/usuario"

export const Usuario = conexion.define<IUsuarios>("Usuario", {
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: "El nombre es requerido",
            },
        },
    },
    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: "Los apellidos son requerido",
            },
        },
    },
    correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notNull: {
                msg: "El correo es requerido",
            },
        },
    },
    contrasena: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notNull: {
                msg: "La contraseña es requerida",
            },
        },
    },
})

Usuario.sync()
