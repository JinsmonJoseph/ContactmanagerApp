const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@router GET /api/contacts
//@access public

const getContacts= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get all contacts"});
});

//@desc Get a contact with id
//@router POST /api/contacts/;id
//@access public
const getContact = asyncHandler (async (req,res)=>{
    res.status(200).json({message:`Get contact with id : ${req.params.id}`});
});

//@desc Create new contact
//@router POST /api/contacts
//@access public

const createContact = asyncHandler (async (req,res)=>{
    console.log("The request body is : ",req.body);
    res.status(200).json({message:"Create a contact"});
});
//@desc Update a contact with id
//@router POST /api/contacts/;id
//@access public
const updateContact = asyncHandler ( async (req,res)=>{
    res.status(200).json({message:`Update contact ${req.params.id}`});
});
//@desc Delete a contact with id
//@router DELETE  /api/contacts/;id
//@access public
const deleteContact = asyncHandler ( async (req,res)=>{
    res.status(200).json({message:`Delete contact ${req.params.id}`});
});

module.exports={ getContacts, getContact, createContact , updateContact, deleteContact};