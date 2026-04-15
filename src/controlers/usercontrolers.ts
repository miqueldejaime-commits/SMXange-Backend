import { Request, Response } from 'express';
import User from '../models/User';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // 1. Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // 2. Crear el nuevo usuario
    const user = await User.create({
      name,
      email,
      password // Nota: Más adelante deberíamos encriptarla por seguridad
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        message: '¡Usuario registrado con éxito! ✅'
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};