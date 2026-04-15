import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`🟢 MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`🔴 Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB; // <--- ASEGÚRATE DE QUE ESTA LÍNEA ESTÉ AQUÍ