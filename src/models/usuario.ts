import { DataTypes } from "sequelize";
import conexion from "../conecion/coneccion";
import { IUsuarios } from "../interfaces/usuario";

export const Usuario = conexion.define<IUsuarios>("Usuario", {
    nombre:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: "El nombre es requerido",
            },
        },
    },
    apellidos:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: "La dirección es requerida",
            },
        },
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notNull: {
                msg: "La dirección es requerida",
            },
        },
    },
    tlfFijo:{
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            notNull: {
                msg: "La dirección es requerida",
            },
        },
    },
    contrasena:{
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notNull: {
                msg: "La dirección es requerida",
            },
        },
    },
    
})