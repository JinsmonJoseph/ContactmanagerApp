//@desc Get all contacts
//@router GET /api/contacts
//@access public

const getContact=(req,res)=>{
    res.status(200).json({message:"Get all contacts"});
};

//@desc Create new contact
//@router POST /api/contacts
//@access public

const createContact = (req,res)=>{
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

module.exports={ getContact, createContact , updateContact, deleteContact};