import mongoose from "mongoose"

const { Schema, model } = mongoose

const required = true
const timestamps = true

const fileSchema = new Schema({
   filename:   { type: String, required },
   path:       { type: String, required },
   tags:        { type: String },
   user:       { type: { ip: { type: Number} } },
}, { timestamps })



const File = model("file", fileSchema)

export default File