import express from "express";
import Session from "../models/Session.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/",verifyToken,async(req,res)=>{

 const session = new Session({
  userId:req.user.id,
  role:req.body.role,
  experience:req.body.experience
 })

 await session.save();

 res.json(session)

})

router.get("/",verifyToken,async(req,res)=>{

 const sessions = await Session.find({
  userId:req.user.id
 })

 res.json(sessions)

})

export default router;