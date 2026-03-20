const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    user: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    contactName: { type: String, required: true },
    isRegistered: { type: Boolean, default: false },
    registeredUser: { type: String, default: null },
    isFavorite: { type: Boolean, default: false },
    lastCalled: { type: Date, default: null },
    callCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;