const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    completed: { type: Boolean, default: false },
}, { timestamps: true });

mongoose.model("model", ModelSchema);