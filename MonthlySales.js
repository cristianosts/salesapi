import mongoose from "mongoose";

const MonthlySalesSchema = new mongoose.Schema({
    month: Number,
    soldValue: Number,
})

export default mongoose.model('MonthlySales', MonthlySalesSchema)