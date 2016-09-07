var express     = require("express"),
    router      = express.Router(),
    Campground  = require("../models/campground"),
    middleware  = require("../middleware");


// Index Route - show all campgrounds

router.get('/', function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            // Pass values to ejs files
            res.render('campgrounds/index', {
                campgrounds: allCampgrounds,
                currentUser: req.user
            });     
        }
    });
});


// Create Route - add new campground to DB

router.post('/', middleware.isLoggedIn, function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
      id: req.user._id,
      username: req.user.username
    };
    var newCampGround = {
        title: name, 
        image: image, 
        description: desc,
        author: author
    };
    // Create a new campground and save to DB
    Campground.create(newCampGround, function(err, newlyCreated){
        if (err) {
            console.log(err);
        } else {
            res.redirect('/campgrounds');
        }
    });
});


// New Route - show form to create new campground

router.get('/new', middleware.isLoggedIn, function(req, res) {
    res.render('campgrounds/new');
})

// Show Route -Show info about one campground

router.get('/:id', function(req, res) {
    // find the campground with provided ID
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            // render show template with that campground
            res.render('campgrounds/show', {campground: foundCampground});
        }
    });
});


// Edit Route
router.get('/:id/edit', middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        res.render('campgrounds/edit', {campground: foundCampground}); 
    });
});


// Update Route
router.put('/:id', middleware.checkCampgroundOwnership, function(req, res) {
   // Find and update the correct campgrounds
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
       if(err) {
           res.redirect('/campgrounds');
       } else {
           // Redirect somewhere(show page)
           res.redirect('/campgrounds/' + updatedCampground.id);
       }
   });
});


// Destroy Route
router.delete('/:id', middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});


module.exports = router;
