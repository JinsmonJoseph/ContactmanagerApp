const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@router GET /api/contacts
//@access private

const getContacts= asyncHandler(async(req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Get a contact with id
//@router POST /api/contacts/;id
//@access private
const getContact = asyncHandler (async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Create new contact
//@router POST /api/contacts
//@access private

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
//@access private
const updateContact = asyncHandler ( async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
    res.status(200).json(updatedContact);
});
//@desc Delete a contact with id
//@router DELETE  /api/contacts/;id
//@access private
const deleteContact = asyncHandler ( async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json({message:`Delete contact ${req.params.id}`});
});

module.exports={ getContacts, getContact, createContact , updateContact, deleteContact};