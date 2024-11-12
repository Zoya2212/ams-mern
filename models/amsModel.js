
// module.exports = Ams;
const mongoose = require('mongoose');

// Define the schema for supervisor
const supervisorSchema = new mongoose.Schema({
  supervisorId: { type: Number, required: true, unique: true },
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  contactNumber: { type: String, required: true },
  emailAddress: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true }
  },
  aadharDetails: {
    aadharNumber: { type: String, required: true },
    aadharFrontUpload: { type: String },
    aadharBackUpload: { type: String }
  },
  password: { type: String, required: true }
});

// Define the schema for ams which holds supervisorMaster
const amsSchema = new mongoose.Schema({
  supervisorMaster: { 
    supervisorId: null,
    type: Map,
    of: supervisorSchema  // Store supervisors as a map
  }
}, { timestamps: true });

// Check if the 'ams' model is already defined and use it, otherwise create it
const Ams = mongoose.models.Ams || mongoose.model('Ams', amsSchema);

module.exports = Ams;