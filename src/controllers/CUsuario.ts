import { Request, Response } from "express"
import { Usuario } from "../models/usuario"

const GetUsuarios = (req: Request, res: Response) => {
    return res.status(200).json({
        estado: 2,
        msj: "Get Uusario",
        data: [],
    })
}

const PostUsuario = async (req: Request, res: Response) => {
    const body = req.body

    const registrarUsuario = await Usuario.create(body)
    // await registrarUsuario.save()

    if (registrarUsuario) {
        return res.status(200).json({
            estado: 1,
            msj: "Usuario Creado",
            data: registrarUsuario,
        })
    } else {
        return res.status(200).json({
            estado: 2,
            msj: "Error al crear el usuario",
            data: [],
        })
    }
}

export { GetUsuarios, PostUsuario }
