import mongoose from "mongoose";
import Tama from "../models/tama.model.js";

export const getTama = async (req, res) => {
    try {
        const tamas = await Tama.find();
        res.status(200).json({ success: true, data: tamas });
    } catch (error) {
        console.error("Error in fetching Tamas:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const createTama = async (req, res)=> {
    const tama = req.body;

    if (!tama.name || !tama.image){
        return res.status(400).json({ success: false, message: "Please provide all the required fields" });
    }

    const newTama = new Tama (tama);

    try {
        await newTama.save();
        res.status(201).json({ success: true, data: newTama });
    } catch (error) {
        console.error("Error in creating Tama:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const updateTama = async (req, res) => {
    const {id} = req.params;

    const tama = req.body;

    if (!mongoose.Types.ObjectId.isValid(id) ) {
        return res.status(404).json({ success: false, message: "Tama not found" });
    }

    try {
        const updatedTama = await Tama.findByIdAndUpdate(id, tama, { new: true });
        res.status(200).json({ success: true, data: updatedTama });
    } catch (error) {
        res.status(500).json({ success: false, message: "Tama not found" });
    }
};

export const deleteTama = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id) ) {
        return res.status(404).json({ success: false, message: "Tama not found" });
    }

    try {
        await Tama.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Tama deleted successfully" });
    } catch (error) {
        console.log("Error in deleting Tama:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};