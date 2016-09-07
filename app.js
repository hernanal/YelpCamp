var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    localStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    seedDB          = require("./seeds");
    
var campgroundRoutes    = require("./routes/campgrounds"),
    commentRoutes       = require("./routes/comments"),
    authRoutes          = require("./routes/index");
    
    
mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(flash());
// Seed the database
// seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: 'Camping is the best!',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// MIDDLEWARE for currentUser and flash errors
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// Required routes
app.use(authRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);

// SERVER SET UP

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('YELPCAMP IS IN SESSION!!');
});


/* Seven types of RESTFUL routes
        name        url         verb            description
    ================================================================
    1) INDEX    /dogs           GET         Display a list of dogs
    2) CREATE   /dogs/new       GET         Display form to make a new dog
    3) NEW      /dogs           POST        Add new dog to DB
    4) SHOW     /dogs/:id       GET         Shows info about one dog
    5) EDIT     /dogs/:id/edit  GET         Show edit form for one dog
    6) UPDATE   /dogs/:id       PUT         Update a particular dog, then redirect somewhere
    7) DESTROY  /dogs/:id       DELETE      Delete a particular dog, then redirect somewhere
*/
