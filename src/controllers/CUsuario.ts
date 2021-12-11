import { Request, Response } from "express"

const GetUsuarios = (req: Request, res: Response) => {
    return res.status(200).json({
        estado: 2,
        msj: "Get Uusario",
        data: [],
    })
}

const PostUsuario = (req: Request, res: Response) => {
    return res.status(200).json({
        estado: 2,
        msj: "Post Uusario",
        data: [],
    })
}

export { GetUsuarios, PostUsuario }
