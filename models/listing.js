const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const Review = require("./review.js");
const review = require("./review.js");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    url: String,
    filename: String
  },
    // filename: {
    //   type: String,
    //   default: "listingimage",
    // },

    // url: {
    //   type: String,
    //   default:
    //     "https://cdn.pixabay.com/photo/2014/02/09/05/40/maldives-262516_1280.jpg",

    //   set: (v) =>
    //     v === ""
    //       ? "https://cdn.pixabay.com/photo/2014/02/09/05/40/maldives-262516_1280.jpg"
    //       : v,
    // },


  

  price: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },

  reviews: [
    {
    type: Schema.Types.ObjectId,
    ref: "Review"
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
  },
    coordinates: {
      type: [Number],
      required: true

    }
  }

});

listingSchema.post("findOneAndDelete", async(listing) => {
  if(listing) {
  await Review.deleteMany({_id : {$in: listing.reviews}});

}
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;