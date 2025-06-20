const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            message
        });

        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting contact form', error });
    }
};

exports.getContactSubmissions = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contact submissions', error });
    }
};