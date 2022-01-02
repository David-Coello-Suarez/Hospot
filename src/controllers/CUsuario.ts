import { Request, Response } from "express"
import { Usuario } from "../models/usuario"
import MikroNode from "mikronode-ng2"

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
        var connection = MikroNode.getConnection(`${process.env.HOSTMIKTO}`,`${process.env.USERMIKRO}`,`${process.env.PASSMIKRO}`)
        connection.connect(function (conn: { openChannel: () => any; closeOnDone: boolean }) {
            var chan = conn.openChannel()
            conn.closeOnDone = true
            chan.write("/ip/address/print", function () {
                chan.closeOnDone = true
                chan.on("done", function (data: any) {
                    var parsed = MikroNode.parseItems(data)
                    parsed.forEach(function (item: { interface: string; address: string }) {
                        console.log("Interface/IP: " + item.interface + "/" + item.address)
                    })
                })
                chan.once("trap", function (trap: string, chan: any) {
                    console.log("Command failed: " + trap)
                })
                chan.once("error", function (err: string, chan: any) {
                    console.log("Oops: " + err)
                })
            })
        })

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
