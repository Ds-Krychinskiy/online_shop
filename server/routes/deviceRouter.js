import Router from "express"
const router = new Router()
import { create, getAll, getOne } from "../controllers/deviceController"


router.post("/", create)
router.get("/", getAll)
router.get("/:id", getOne)

export default router