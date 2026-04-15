import { Schema, model, Document } from 'mongoose';

// 1. Definimos la "forma" que tendrá nuestro Usuario en TypeScript
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role?: string; // El ? significa que es opcional
  createdAt: Date;
}

// 2. Creamos el Esquema de Mongoose (lo que entiende MongoDB)
const userSchema = new Schema<IUser>({
  name: { 
    type: String, 
    required: [true, 'El nombre es obligatorio'] 
  },
  email: { 
    type: String, 
    required: [true, 'El email es obligatorio'], 
    unique: true // No deja repetir emails
  },
  password: { 
    type: String, 
    required: [true, 'La contraseña es obligatoria'] 
  },
  role: { 
    type: String, 
    default: 'user' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// 3. Exportamos el modelo
export default model<IUser>('User', userSchema);