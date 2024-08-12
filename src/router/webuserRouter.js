import { Router } from "express";
import {
  createWebuser,
  deleteSpecificUser,
  forgotPassword,
  loginUSer,
  myProfile,
  readAllUsers,
  readSpecificUser,
  resetPassword,
  updatePassword,
  updateProfile,
  updateSpecificUser,
  verifyEmail,
} from "../controller/webuserController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { Webuser } from "../schema/model.js";
import authorized from "../middleware/authorized.js";

let webuserRouter = Router();

webuserRouter.route("/").post(createWebuser).get(isAuthenticated, authorized(["admin", "superAdmin"]), readAllUsers);

webuserRouter.route("/verify-email").patch(verifyEmail);

webuserRouter.route("/login").post(loginUSer);

webuserRouter.route("/my-profile").get(isAuthenticated, myProfile);

webuserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);

webuserRouter.route("/update-password").patch(isAuthenticated, updatePassword);

webuserRouter.route("/forgot-password").post(forgotPassword);

webuserRouter.route("/reset-password").post(isAuthenticated, resetPassword);

webuserRouter
  .route("/:id")
  .get(isAuthenticated, authorized(["admin", "superAdmin"]), readSpecificUser) //admin, super admin
  .patch(
    isAuthenticated,
    authorized(["admin", "superAdmin"]),
    updateSpecificUser
  ) //admin, super admin 
  .delete(isAuthenticated, authorized(["superAdmin"]), deleteSpecificUser); // super admin

export default webuserRouter;
