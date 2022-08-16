import mongoose from "mongoose"

export default function connect (){

    const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
    const cs = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`

    console.log(cs, 'This is cs')

    mongoose.connection.on('connecting', ()=> console.log('connectiong'))
    mongoose.connection.on('connected', ()=> console.log('connected'))
    mongoose.connection.on('disconnecting', ()=> console.log('disconnectiong'))
    mongoose.connection.on('error', e => console.log('Error', e))

    return mongoose.connect(cs)


}