import express from "express"
import multer from "multer"
import File from "../models/File.js"
import path from "path"

const apiRouter = express.Router()

const multerOptions = { dest: 'uploads/', limits: { fileSize: 1000000} }
const upload = multer(multerOptions)
const handleUpload = upload.fields([{ name: "File", fileSize: 100 }, { name: "tags" }])


apiRouter.post("/uploadImage", handleUpload, async (req,res,next) => {

    const file = req.files
    const filename = req.files.File[0].filename
    const tags = req.body.tags
    const path = req.files.File[0].path

    console.log(tags, ' tafgs')

    const fileObject = {  
        filename,
        path,
        tags
    }
    const newFile = await File.create(fileObject)
    
    res.send(req.files)

})

apiRouter.get("/recentUploads/", async (req,res,next) => {

    const findData = await File.find({}).sort({createdAt : -1}).limit(5)
    res.send(findData)
    console.log(findData)
})

apiRouter.get("/images/:id", async (req,res,next) => {
    const image = await File.findById(req.params.id)
    const absolutePath = path.resolve(image.path)
    res.sendFile(absolutePath)
})

apiRouter.delete("/delete", async (req,res,next) => {
    const deleteAll = await File.deleteMany({})
    res.send(deleteAll)
    console.log(deleteAll)
})

export default apiRouter 