const express = require("express");
const router = express.Router();
const {getContact} = require("../controllers/contactController");

router.route("/").get(getContact);

router.route("/").post((req,res)=>{
    res.status(200).json({message:"Create a contact"});
});

router.route("/:id").put((req,res)=>{
    res.status(200).json({message:`Update contact ${req.params.id}`});
});

router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:`Delete contact ${req.params.id}`});
});

module.exports=router;