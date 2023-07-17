import * as express from "express";
import {addReview, deleteReview} from "../controllers/review.controller";

const reviewRouter = express.Router();

reviewRouter.post ('/review', addReview);
reviewRouter.delete ('/review/:id', deleteReview);

export default reviewRouter;
