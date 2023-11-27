import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";

//Autentificacion Uusuario
//Post / api/users/login
//ruta publica
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});
//Registro Usuario
//Post / api/users/
//ruta publica
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("El email ya ha sido registrado previamente");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Informacion invalidad");
  }
});

//Cerrar Sesion Usuario
//Post / api/users/logout
//ruta private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    message: "Successfully logged out",
  });
});

//Obtener perfil usuario
//get / api/users/profile
//ruta private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("No existe el usuario");
  }
});

//Actualizar perfil usuario
//PUT / api/users/profile
//ruta private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404).json;
    throw new Error("No existe el usuario");
  }
});

//Obtener usuarios
//get / api/users
//ruta private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("Get Users");
});

//Obtener usuario por ID
//get / api/users/:id
//ruta private/admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("Get User byID");
});

//Eliminar usuarios
//DELETE / api/users:id
//ruta private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete User");
});

//Eliminar usuarios
//Update / api/users/:id
//ruta private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update User");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
