import { Router } from "express";
import { createUser, deleteMyProfile, deleteUser, loginUser, myProfile, readDetailUser, readUser, updateMyProfile, updateUser } from "../controller/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";


let userRouter = Router();

userRouter.route("/")  // localhost:8000/users
.post(createUser)
.get(readUser)

userRouter.route("/login")  // localhost:8000/users/login
.post(loginUser)

userRouter.route("/my-profile")
.get(isAuthenticated, myProfile)
.patch(isAuthenticated, updateMyProfile)
.delete(isAuthenticated, deleteMyProfile)

userRouter.route("/:userId")  // localhost:8000/users/any 
.delete(deleteUser)
.get(readDetailUser)
.patch(updateUser)


export default userRouter;