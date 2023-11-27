import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// Busqueda de los productos en 
//get / api/products
//ruta publica
const getProducts = asyncHandler(async (req, res) =>{ 
    const products = await Product.find({});
    res.json (products);
});

// Busqueda de los productos por id en 
//get / api/products
//ruta publica

const getProductsById = asyncHandler(async (req, res) =>{
    const product = await Product.findById(req.params.id);
    if(product){
        return res.json(product);
    } else{
        res.status(404);
        throw new Error('Recurso no encontrado');
    }
});

export {getProducts, getProductsById};