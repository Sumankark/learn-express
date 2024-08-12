import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secretKey } from "../../config.js";
import { Webuser } from "../schema/model.js";
import { sendEmail } from "../utils/sendemail.js";

export let createWebuser = async (req, res) => {
  try {
    let data = req.body;
    console.log(data)
    let hashPassword = await bcrypt.hash(data.password, 10);

    data = {
      ...data,
      isVerifiedEmail: false,
      password: hashPassword,
    };
    let result = await Webuser.create(data);

    // send email with link
    // generate token
    let infoObj = {
      _id: result._id,
    };
    let expireInfo = {
      expiresIn: "5d",
    };

    let token = await jwt.sign(infoObj, secretKey, expireInfo);
    // link=> frontend link
    // send mail
    await sendEmail({
      from: "'Houseobj'<karkisuman0627@gmail.com>",
      to: data.email,
      subject: "account create",
      html: `
            <h1> Your account  has been created successfully </h1>

            <a href="http://localhost:3000/verify-email?token=${token}">http://localhost:3000/verify-email?token=${token}</a>
            `,
    });

    res.status(201).json({
      success: true,
      message: "Webuser created successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let verifyEmail = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    // verify token

    let infoObj = jwt.verify(token, secretKey);

    let userId = infoObj._id;

    let result = await Webuser.findByIdAndUpdate(
      userId,
      { isVerifiedEmail: true },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "Webuser verified successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let loginUSer = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let user = await Webuser.findOne({ email: email });

    if (user) {
      if (user.isVerifiedEmail) {
        let isValidPassword = await bcrypt.compare(password, user.password);
        if (isValidPassword) {
          let infoObj = {
            _id: user._id,
          };
          let expireInfo = {
            expiresIn: "365d",
          };

          let token = await jwt.sign(infoObj, secretKey, expireInfo);
          res.status(200).json({
            success: true,
            message: "user login Successfully",
            result: user,
            token: token,
          });
        } else {
          let error = new Error("Credential does not match");
          throw error;
        }
      } else {
        let error = new Error("Credential does not match");
        throw error;
      }
    } else {
      let error = new Error("Credential does not match");
      throw error;
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const myProfile = async (req, res, next) => {
  try {
    let id = req._id;

    let result = await Webuser.findById(id);
    res.status(200).json({
      success: true,
      message: "profile read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    let id = req._id;
    let data = req.body;
    delete data.email;
    delete data.password;

    let result = await Webuser.findByIdAndUpdate(id, data, { new: true });
    res.status(201).json({
      success: true,
      message: "Profile update successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updatePassword = async (req, res, next) => {
  try {
    let _id = req._id;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;

    let data = await Webuser.findById(_id);
    let hashPassword = data.password;

    let isValidPassword = await bcrypt.compare(oldPassword, hashPassword);
    console.log(isValidPassword);
    if (isValidPassword) {
      let newHashPassword = await bcrypt.hash(newPassword, 10);

      let result = await Webuser.findByIdAndUpdate(
        _id,
        { password: newHashPassword },
        { new: true }
      );

      res.status(201).json({
        success: true,
        message: "Password update successfully",
        result: result,
      });
    } else {
      let error = new Error("Credential does not match");
      throw error;
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllUsers = async (req, res, next) => {
  try {
    let result = await Webuser.find({});
    res.status(200).json({
      success: true,
      message: "All user read successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    let result = await Webuser.findById(id);
    res.status(200).json({
      success: true,
      message: "All user read successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateSpecificUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    let data = req.body;
    delete data.email;
    delete data.password;

    let result = await Webuser.findByIdAndUpdate(id, data, { new: true });
    res.status(201).json({
      success: true,
      message: "Update user read successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteSpecificUser = async (req, res, next) => {
  try {
    let id = req.params.id;

    let result = await Webuser.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "user delete successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    let email = req.body.email;

    let result = await Webuser.findOne({ email: email });

    if (result) {
      let infoObj = {
        _id: result._id,
      };
      let expireInfo = {
        expiresIn: "365d",
      };

      let token = await jwt.sign(infoObj, secretKey, expireInfo);
      console.log(token);
      // send email

      await sendEmail({
        from: "'Houseobj'<karkisuman0627@gmail.com>",
        to: email,
        subject: "Reset Password",
        html: `
              <h1> Please click given link to reset your password </h1>
  
              <a href="http://localhost:3000/reset-password?token=${token}">http://localhost:3000/reset-passsword?token=${token}</a>
              `,
      });
      res.status(200).json({
        success: true,
        message: "to reset password link has been send to email.",
        result: token,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Email does not exist.",
      });
    }

    res.status(200).json({
      success: true,
      message: "user delete successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    let _id = req._id;
    let hashPassword = await bcrypt.hash(req.body.password, 10);

    let result = await Webuser.findByIdAndUpdate(
      _id,
      { password: hashPassword },
      { new: true }
    );
    res.status(201).json({
      success: true,
      message: "password reset successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
