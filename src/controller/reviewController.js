import { Review } from "../schema/model.js";


export let createReview = async(req, res) =>{
    let reviewData = req.body;

    try{
        let result = await Review.create(reviewData);
        res.json({
            success: true,
            message: "Review created successfully.",
            result: result,
        })
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        });
    }
}

export let readReview = async(req, res) =>{
    try{
        let result = await Review.find({})
        .populate("productId", "name price -_id")
        .populate("userId", "userName email -_id")
        res.json({
            success: true,
            message: "Review read successfully",
            result: result,
        })
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let readDetailReview = async(req, res) =>{
    let reviewId = req.params.reviewId;

    try{
        let result = await Review.findById(reviewId);

        res.json({
            success: true,
            message: "Review details read.", 
            result: result,
        })
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let deleteReview = async(req, res) =>{
    let reviewId = req.params.reviewId;
    
    try{
        let result = await Review.findByIdAndDelete(reviewId);
        
        res.json({
            success: true,
            message: "Review delete successfully.",
            result: result,
        })
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let updateReview = async(req, res) => {
    let reviewId = req.params.reviewId;
    let reviewData = req.body;

    try{
        let result = await Review.findByIdAndUpdate(reviewId, reviewData);

        res.json({
            success: true,
            message: "Review update successfully.",
            result: result,
        })
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }
}