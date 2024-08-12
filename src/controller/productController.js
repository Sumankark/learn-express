import { Product } from "../schema/model.js";


export let createProduct = async(req, res) =>{
    let productData = req.body;

    try{
        let result = await Product.create(productData);
        res.status(201).json({
            success: true,
            message: "Product created successfully.",
            result: result,
        })
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export let readProduct = async(req, res) =>{
    try{
        let result = await Product.find({});

        res.status(200).json({
            success: true,
            message: "Product read successfully",
            result: result,
        })
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

export let readDetailProduct = async(req, res) =>{
    let productId = req.params.productId;

    try{
        let result = await Product.findById(productId);

        res.json({
            success: true,
            message: "product details read.", 
            result: result,
        })
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let deleteProduct = async(req, res) =>{
    let productId = req.params.productId;
    
    try{
        let result = await Product.findByIdAndDelete(productId);
        
        res.json({
            success: true,
            message: "Product delete successfully.",
            result: result,
        })
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let updateProduct = async(req, res) => {
    let productId = req.params.productId;
    let productData = req.body;

    try{
        let result = await Product.findByIdAndUpdate(productId, productData);

        res.json({
            success: true,
            message: "Product update successfully.",
            result: result,
        })
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }
}