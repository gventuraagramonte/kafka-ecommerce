import mongoose, { Schema } from "mongoose";



export const ShippingSchema = new Schema({
    orderId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    estimatedDelivery: {
        type: Date,
        required: true
    }
}, { timestamps: true })