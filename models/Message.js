const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  messageType: { type: String, enum: ['text', 'image', 'voice', 'emoji'], required: true },
  content: { type: String, required: true },
  mediaUrl: { type: String },
  duration: { type: Number },
  isRead: { type: Boolean, default: false },
  readAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);