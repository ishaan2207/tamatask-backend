import mongoose from "mongoose";
const tamaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  }
}, {
    timestamps: true,
});

const Tama = mongoose.model('Tama', tamaSchema);

export default Tama;