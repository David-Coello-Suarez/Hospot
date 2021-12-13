import { Router } from "express"
import multer from "multer"

import { GetUsuarios, PostUsuario } from "../controllers/CUsuario"

const upload = multer()
const router: Router = Router()

router.get("/", GetUsuarios)

router.post("/", upload.none(), PostUsuario)

export default router
