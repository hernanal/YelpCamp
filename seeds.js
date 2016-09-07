var mongoose    =   require("mongoose"),
    Campground  =   require("./models/campground"),
    Comment     =   require("./models/comment");
    
var data = [
    {
        title: "Cloud's Rest",
        image: 'http://oddculture.com/wp-content/uploads/2015/12/Camping-Near-The-Lake-Background-Wallpaper.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ut purus vel iaculis. Vestibulum viverra dapibus velit, ac ultricies sapien efficitur ut. Duis vestibulum urna nec facilisis laoreet. Morbi mollis molestie risus at interdum. Nulla diam magna, feugiat nec convallis et, tristique eu turpis. Cras vulputate ligula massa, eu sollicitudin tellus laoreet mollis. Suspendisse libero dolor, pellentesque vel est sit amet, porta dapibus augue. Sed faucibus ultrices erat faucibus feugiat. Curabitur non erat interdum, fringilla turpis at, tristique mi. Nunc molestie varius purus, vel bibendum erat. Maecenas elementum sit amet est sed tristique. Nulla in dui fringilla, laoreet massa non, porta risus. Donec consequat nulla ut sapien blandit, quis eleifend nibh maximus. Vestibulum consequat aliquam elit, eget sollicitudin augue mollis et. Suspendisse vel lacus gravida, ullamcorper eros ac, bibendum tellus. Maecenas gravida pulvinar ligula non auctor. Ut vitae odio aliquam, congue velit non, molestie nisi. Morbi non dolor condimentum, elementum massa non, aliquet nisi. Aliquam feugiat lorem ante, eu pretium tellus egestas eget. Maecenas semper in sem nec tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed tempus viverra tellus, quis vehicula mi aliquam in. Praesent vestibulum varius dui pellentesque rutrum.'
    },
    {
        title: 'Crystal Lake',
        image: 'http://www.travelandleisure.com/sites/default/files/styles/1600x1000/public/1443561122/CAMPING0915-Glacier-National-Park.jpg?itok=6gQxpDuT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ut purus vel iaculis. Vestibulum viverra dapibus velit, ac ultricies sapien efficitur ut. Duis vestibulum urna nec facilisis laoreet. Morbi mollis molestie risus at interdum. Nulla diam magna, feugiat nec convallis et, tristique eu turpis. Cras vulputate ligula massa, eu sollicitudin tellus laoreet mollis. Suspendisse libero dolor, pellentesque vel est sit amet, porta dapibus augue. Sed faucibus ultrices erat faucibus feugiat. Curabitur non erat interdum, fringilla turpis at, tristique mi. Nunc molestie varius purus, vel bibendum erat. Maecenas elementum sit amet est sed tristique. Nulla in dui fringilla, laoreet massa non, porta risus. Donec consequat nulla ut sapien blandit, quis eleifend nibh maximus. Vestibulum consequat aliquam elit, eget sollicitudin augue mollis et. Suspendisse vel lacus gravida, ullamcorper eros ac, bibendum tellus. Maecenas gravida pulvinar ligula non auctor. Ut vitae odio aliquam, congue velit non, molestie nisi. Morbi non dolor condimentum, elementum massa non, aliquet nisi. Aliquam feugiat lorem ante, eu pretium tellus egestas eget. Maecenas semper in sem nec tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed tempus viverra tellus, quis vehicula mi aliquam in. Praesent vestibulum varius dui pellentesque rutrum.'
    },
    {
        title: 'Starry Night Campground',
        image: 'http://a.abcnews.com/images/Travel/gty_camping_kb_140711_12x5_1600.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ut purus vel iaculis. Vestibulum viverra dapibus velit, ac ultricies sapien efficitur ut. Duis vestibulum urna nec facilisis laoreet. Morbi mollis molestie risus at interdum. Nulla diam magna, feugiat nec convallis et, tristique eu turpis. Cras vulputate ligula massa, eu sollicitudin tellus laoreet mollis. Suspendisse libero dolor, pellentesque vel est sit amet, porta dapibus augue. Sed faucibus ultrices erat faucibus feugiat. Curabitur non erat interdum, fringilla turpis at, tristique mi. Nunc molestie varius purus, vel bibendum erat. Maecenas elementum sit amet est sed tristique. Nulla in dui fringilla, laoreet massa non, porta risus. Donec consequat nulla ut sapien blandit, quis eleifend nibh maximus. Vestibulum consequat aliquam elit, eget sollicitudin augue mollis et. Suspendisse vel lacus gravida, ullamcorper eros ac, bibendum tellus. Maecenas gravida pulvinar ligula non auctor. Ut vitae odio aliquam, congue velit non, molestie nisi. Morbi non dolor condimentum, elementum massa non, aliquet nisi. Aliquam feugiat lorem ante, eu pretium tellus egestas eget. Maecenas semper in sem nec tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed tempus viverra tellus, quis vehicula mi aliquam in. Praesent vestibulum varius dui pellentesque rutrum.'
    }
];    
    
function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        }
        console.log('removed campgrounds!');
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if(err) {
                    console.log(err);
                } else {
                    console.log('campground added!');
                    Comment.create({
                        text: 'This place is great but there is no internet',
                        author: 'homer'
                    }, function(err, comment) {
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log('Created new comment');
                        }
                    });
                }
            });
        });
    });
}

module.exports = seedDB;
