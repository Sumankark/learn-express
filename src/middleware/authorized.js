import { Webuser } from "../schema/model.js";

let authorized = (roles) => {
  return async (req, res, next) => {
    try {
      let _id = req._id;

      let result = await Webuser.findById(_id);

      let tokenRole = result.role;

      if (roles.includes(tokenRole)) {
        next();
      } else {
        res.status(403).json({
          success: false,
          message: "User not authorized",
        });
      }
      console.log(result);
    } catch (error) {
      res.status(403).json({
        success: false,
        message: "User not authorized",
      });
    }
  };
};

export default authorized;