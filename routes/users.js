const express = require('express');
const router = express.Router();
const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

router.get('/get',(req,res)=>{
     let sql = "select * from user;"
     db.query(sql,(err,result)=>{
          if(err){
               res.status(500).json({message:"Error Occured :"+err});
          }
          else{
               if(result.length > 0){
                    res.status(200).json(result);
               } else{
                    res.status(200).json({message:"No Data Found..!"})
               }
          }
     });
});

//user register post method
router.post('/register',async(req,res)=>{
     const{username,password} = req.body;
     const sql = "insert into user(username,password) values(?,?);"

     if(!username || !password){
          return res.status(400).json({message:"All Fields Required.."});
     }

     let salt = await bcrypt.genSalt(10);
     let hashedpass = await bcrypt.hash(password,salt);

     const value = [username,hashedpass]
     db.query(sql,value,(err,value)=>{
          if(err){
               res.status(500).json({message:"Error Occured "+err});
          } else{
               res.status(201).json({message:"User Created"});
          }
     });
});

router.post('/login',(req,res)=>{
     const{username,password} = req.body;
     if(!username || !password){
          return res.status(400).json({message:"All Fields Required.."});
     } else {
          let sql = "select username,password from user where username = ?;";
          db.query(sql,username,async(err,result)=>{
               if(err){
                    res.status(500).json({message:"Error Occured while fetching from database.."});
               }
               else if(result.length === 0){
                    return res.status(401).json({message:"No User Found with this username"});
               } else{
                    const user = result[0];
                    const isMatch = await bcrypt.compare(password,user.password);
                    if(!isMatch){
                         return res.status(401).json({message:"Invalid Password..!"});
                    }else{
                         const token = jwt.sign({username:user.username},process.env.JWT_SECRET_KEY);
                         res.status(200).json({message:"Logged In Successfully..!"+token});
                    }
               }
          });
     }
});

module.exports = router;