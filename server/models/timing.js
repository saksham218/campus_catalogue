import mongoose from "mongoose";

const Timing_Schema = mongoose.Schema({
  shop: { type: mongoose.Schema.Types.ObjectId, ref: "Shop", required: true },
  date: {
    from: { type: Date, required: true },
    to: { type: Date, required: true },
  },
  is_open: { type: Boolean, default: true },
});

export default mongoose.model("Timing", Timing_Schema);
