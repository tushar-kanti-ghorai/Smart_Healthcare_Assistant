import mongoose from "mongoose";

// Payment schema to track payment history
const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referencing the User model (make sure User model exists)
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String, // e.g., "Razorpay", "Stripe", etc.
    required: true,
  },
  paymentId: {
    type: String, // Transaction ID from the payment gateway (Razorpay, Stripe, etc.)
    required: true,
  },
  status: {
    type: String,
    enum: ["success", "failed", "pending", "cancelled"], // Added "cancelled" for flexibility
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add an index on `user` field for better performance when querying payment history for a user.
paymentSchema.index({ user: 1 });

// Create and export the Payment model.
const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
