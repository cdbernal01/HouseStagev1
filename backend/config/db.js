import mongoose from "mongoose";

const  connectDB =async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log (`Conectado a MongoDB: ${conn.connection.host}`);
    }catch (error) {
        console.log(`Error en la conexion a MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;