import { Router } from "express"
import { GetUsuarios, PostUsuario } from "../controllers/CUsuario"

const router: Router = Router()

router.get("/", GetUsuarios)

router.post("/", PostUsuario)

export default router
