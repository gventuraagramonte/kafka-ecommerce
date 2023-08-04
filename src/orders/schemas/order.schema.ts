import { Schema } from "mongoose";



export const OrderSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    totalAmount: {
        type: String,
        required: true
    },
    products: [{ type: String }]
}, { timestamps: true })