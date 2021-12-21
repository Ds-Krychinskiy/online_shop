import {} from 'dotenv/config' 
import express from "express"
import sequelize from "./db.js"
import cors from "cors"
import fileUpload from "express-fileupload"
import router from "./routes/index.js"
import errorHandler from "./middleware/ErrorHandlingMiddleware.js"
import path from "path"

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve("static")))

app.use(fileUpload({}))
app.use("/api", router)


//Mibbleware
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
