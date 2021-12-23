import Express from "express"
import APIController from "../controllers/APIController"

const router = Express.Router()

// ROTAS DE USUÁRIO
router.get("/connector/test", APIController.testeReturn)

export default router
