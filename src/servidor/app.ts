import express, { Application } from "express"
import cors from "cors"
import morgan from "morgan"
import conexion from "../conecion/coneccion"
import routerUsuario from "../routers/RUsuario"

export class Servidor {
    private app: Application
    private ruta: string = "/api"
    private puerto: number | string

    constructor() {
        this.app = express()
        this.puerto = process.env.PORT || 3000

        this.coneccionDB()
    }

    private async coneccionDB(): Promise<void> {
        try {
            await conexion.authenticate()
            console.log("Conexion Establecida")

            // MIDDLEWARES
            this.middelewares()

            // RUTAS API
            this.RutasActivas()
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    private middelewares(): void {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(morgan("dev"))
    }

    private RutasActivas(): void {
        this.app.use(`${this.ruta}/hospot`, routerUsuario)
    }

    escuchando(): void {
        this.app.listen(this.puerto, () => {
            console.log(`Servidor escuchando en el puerto: ${this.puerto}`)
            // Error de consola
        })
    }
}