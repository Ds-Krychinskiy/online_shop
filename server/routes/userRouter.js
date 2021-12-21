import Router from "express"
const router = new Router()
import { registration, login, check } from "../controllers/userController"
import authMiddleware from "../middleware/authMiddleware"

router.post("/registration", registration)
router.post("/login", login)
router.get("/auth", authMiddleware,  check)

export default router