//@desc Get all contacts
//@router GET /api/contacts
//@access public

const getContacts=(req,res)=>{
    res.status(200).json({message:"Get all contacts"});
};

//@desc Get a contact with id
//@router POST /api/contacts/;id
//@access public
const getContact = (req,res)=>{
    res.status(200).json({message:`Get contact with id : ${req.params.id}`});
};

//@desc Create new contact
//@router POST /api/contacts
//@access public

const createContact = (req,res)=>{
    console.log("The request body is : ",req.body);
    res.status(200).json({message:"Create a contact"});
};
//@desc Update a contact with id
//@router POST /api/contacts/;id
//@access public
const updateContact = (req,res)=>{
    res.status(200).json({message:`Update contact ${req.params.id}`});
};
//@desc Delete a contact with id
//@router DELETE  /api/contacts/;id
//@access public
const deleteContact = (req,res)=>{
    res.status(200).json({message:`Delete contact ${req.params.id}`});
};

module.exports={ getContacts, getContact, createContact , updateContact, deleteContact};