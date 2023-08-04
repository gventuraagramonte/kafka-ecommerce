import { Schema } from "mongoose";



export const InventorySchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true })