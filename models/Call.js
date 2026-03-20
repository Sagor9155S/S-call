const mongoose = require('mongoose');

const CallSchema = new mongoose.Schema({
    caller: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    callType: {
        type: String,
        enum: ['audio', 'video'],
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
    },
    duration: {
        type: Number, // duration in seconds
    },
    status: {
        type: String,
        enum: ['initiated', 'ringing', 'connected', 'ended', 'missed', 'rejected'],
        required: true
    },
    callQuality: {
        type: String,
    },
    recordingUrl: {
        type: String,
    }
});

module.exports = mongoose.model('Call', CallSchema);