import dotenv from "dotenv"
import express from "express"
import connect from "./lib/database.js"
import apiRouter from "./routes/apiRouter.js"
import cors from "cors"

dotenv.config()
connect()



//const handleUpload = upload.fields([{  }])

const app = express()
app.use(cors())
app.use(express.json())

// Middleware


// Routes
app.use("/api", apiRouter)


app.listen(3099, () => {
  console.log(`The server 🙈 is listening on port 3099`)
})
