const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@router GET /api/contacts
//@access public

const getContacts= asyncHandler(async(req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
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
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
      });
    res.status(200).json(contact);
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