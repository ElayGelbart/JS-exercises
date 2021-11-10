const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
  _id: Number,
  agentName: String,
  agentCity: String
});

module.exports = mongoose.model("Agent", AgentSchema);