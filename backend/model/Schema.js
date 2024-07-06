const mongoose = require("mongoose");

// Create a schema for the participant table
const participantSchema = new mongoose.Schema({
  // Define the fields for the participant table
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

// Create a schema for the organizer table
const organizerSchema = new mongoose.Schema({
  // Define the fields for the organizer table
  name: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  sports: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
    unique: false,
  },
  phone: {
    type: String,
    required: true,
    // unique: true,
  },
  event_name: {
    type: String,
    required: true,
  },
});

// Create a schema for the vendor table
const vendorSchema = new mongoose.Schema({
  // Define the fields for the vendor table
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    // unique: true,
  },
  equipment: {
    type: [String],
    required: true,
  },
  ground: {
    type: String,
    required: true,
  },
});

// Create the participant model
const Participant = mongoose.model("Participant", participantSchema);

// Create the organizer model
const Organizer = mongoose.model("Organizer", organizerSchema);

// Create the vendor model
const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = {
  Participant,
  Organizer,
  Vendor,
};
