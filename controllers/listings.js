const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding ({ accessToken: mapToken });
const {listingSchema, reviewSchema} = require("../schema.js");

module.exports.index = async(req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};


module.exports.showListing = async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: { path: "author",},}).populate("owner");
    if(!listing){
      req.flash("error", "Listing you requested for does not exist!");   
      return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async(req, res, next) => {
    let response = await geocodingClient
     .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
     })
     .send();

    console.log("LOCATION:", req.body.listing.location);
    console.log("MAPBOX RESPONSE:", response.body.features);
  
    if (!response.body.features.length) {
    req.flash("error", "Location not found!");
    return res.redirect("/listings/new");
}


    let url = req.file.path;
    let filename = req.file.filename;
    //console.log(url, "..", filename);
    //listingSchema.validate(req.body);
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};

    const coordinates = response.body.features[0].geometry.coordinates;

    newListing.geometry = {
    type: "Point",
    coordinates: coordinates
};

    let savedListing =  await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
    
    };

module.exports.renderEditForm = async(req, res) => {
        let {id} = req.params;
        const listing = await Listing.findById(id);
        if(!listing){
          req.flash("error", "Listing you requested for does not exist!");   
          return res.redirect("/listings");
        }
        let originalImageUrl = listing.image.url;
        originalImageUrl.replace("/upload","/upload/w_250");
        res.render("listings/edit.ejs",{listing, originalImageUrl });
    };



 
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findById(id);

    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }

    // Update text fields
    listing.title = req.body.listing.title;
    listing.description = req.body.listing.description;
    listing.price = req.body.listing.price;
    listing.location = req.body.listing.location;
    listing.country = req.body.listing.country;

     const response = await geocodingClient
            .forwardGeocode({
                query: req.body.listing.location,
                limit: 1,
            })
            .send();

        if (!response.body.features.length) {
            req.flash("error", "Location not found!");
            return res.redirect(`/listings/${id}/edit`);
        }

        const coordinates =
            response.body.features[0].geometry.coordinates;

        // Save complete geometry
        listing.geometry = {
            type: "Point",
            coordinates: coordinates
        };


    // Update image only when a new image is uploaded
    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    await listing.save();

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};


module.exports.deleteListing = async(req, res) => {
        let {id} = req.params;
        let deletedListing = await Listing.findByIdAndDelete(id);
        console.log(deletedListing);
        req.flash("success", "Listing Deleted!");
        res.redirect("/listings");
    };
    
    

    