import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection

    connection.on('connected', () => {
      console.log('MongoDb se conecto')
    })

    connection.on('error', (err) => {
      console.log('La coneccion de MongoDb a dado un error, porfavor asegurate que MongoDb este corriendo.' + err)
      process.exit
    })


  } catch (error) {
    console.log('Algo salio mal!')
    console.log(error)
  }
}