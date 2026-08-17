const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingsController = require("../controllers/listings.js")
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
.get(wrapAsync(listingsController.index))
.post(isLoggedIn,validateListing, upload.single('listing[image]'), wrapAsync(listingsController.createListing));

//.post( upload.single('listing[image]'),(req, res) => {
//     res.send(req.file);
// });

//New Route
router.get("/new", isLoggedIn,listingsController.renderNewForm);


router.route("/:id")
.get(wrapAsync(listingsController.showListing))
.put(isLoggedIn, isOwner, validateListing, wrapAsync(listingsController.updateListing))
.delete( isLoggedIn, isOwner,wrapAsync(listingsController.deleteListing));


//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingsController.renderEditForm));



//index route
//router.get("/",wrapAsync(listingsController.index));





//show route
//router.get("/:id",wrapAsync(listingsController.showListing)
//);

//Create Route
//router.post("/",isLoggedIn,validateListing, wrapAsync(listingsController.createListing));

//Edit Route
//router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingsController.renderEditForm));


//update Route

//router.put("/:id",isLoggedIn, isOwner, validateListing, wrapAsync(listingsController.updateListing));




//Delete Route
//router.delete("/:id", isLoggedIn, isOwner,wrapAsync(listingsController.deleteListing));

module.exports = router;