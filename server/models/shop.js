import mongoose from "mongoose";

const Shop_Schema = mongoose.Schema(
  {
    basic_info: {
      name: { type: String, required: true },
      owner_name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      phone: { type: Number, required: true, unique: true },
      map_coordinates: {
        lat: { type: String },
        lon: { type: String },
      },
      default_timings: {
        open: { type: Date, required: true },
        close: { type: Date, required: true },
      },
      image: { type: String }, //TODO: check encoding
      category: {
        type: String,
        enum: [
          "Canteen",
          "Restaurant",
          "Juice Center",
          "Stationary",
          "Rental",
          "Bakery",
          "Other",
        ],
      },
    },
    payment: { type: Object },
    menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    approved: {
      status: { type: Boolean, default: false },
      approver: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Shop", Shop_Schema);
