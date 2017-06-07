var mongoose = require('mongoose');

var caseSchema = new mongoose.Schema({
  name: { type: String, maxlength: 150, required: true },
  description: { type: String, maxlength: 200 },
  graph: {
    verticies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Node' }],
    edges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Edge'}]
  }
}, { timestamps: true });

module.exports = mongoose.model('Case', caseSchema);