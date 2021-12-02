import { Model } from "sequelize";

export interface IUsuarios extends Model{
    nombre: string
    apellidos: string
    email: string
    tlfFijo: string
    contrasena: string
}