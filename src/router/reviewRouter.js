import { Router } from "express";
import { createReview, deleteReview, readDetailReview, readReview, updateReview } from "../controller/reviewController.js";

let reviewRouter = Router();

reviewRouter
.route("/")
.post(createReview)
.get(readReview)

reviewRouter
.route("/:reviewId")
.get(readDetailReview)
.delete(deleteReview)
.patch(updateReview);

export default reviewRouter;