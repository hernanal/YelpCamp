YelpCamp
===============================

## Introduction

This application allows users to share their campsite experiences and collaborate with one another through comments. The application uses the seven types of RESTFUL routes in order to display a list of campsites and comments, create a new campsite or comment, show more info about a particular campsite, edit campsite information or comment content, and delete campsites as well as comments. In order to collaborate on the application you need to be logged in, or sign up, and be authenticated. Only the user who posts a campsite can edit and delete it. Same goes for comments that users post. The application makes use of Express.js to build the backend server and mongoDB as the database to store campsite, comment, and user data. 

## Files

The application is comprised of the following files:

	- One middleware JavaScript file.
	
	- Three model JavaScript files for displaying campgrounds, comments, and users.
	
	- Application dependencies are body-parser, connect-flash, embedded JavaScript (ejs), express, express-session, method-override, mongoose for the database, passport, passport-local, and passport-local-mongoose for authentication.
	
	- One CSS file.

	- Three route files for campgrounds, comments, and the landing page.

	- Three ejs files for editing, viewing, creating, and showing more info, for campgrounds.

	- Two ejs files for editing, and creating, comments.

	- Two ejs files to synchronize the header and footers for each page of the application.

	- Three different ejs files for the various views displayed in the application, landing page, login page, and sign up page. 

	- One main app.js file that controls the different routes, configuration of the application components, and setting up the server. 

	- One package.json file.

	- One seeds.js file. 

## Getting Started

To get started using YelpCamp check out the application [here](https://ancient-beyond-55541.herokuapp.com/). 

You will need to set up a username and password if this is your first time using the application. 

Once logged in you will be able to post new campsites, edit those campsites, and post comments on campsites.

## References

https://www.udemy.com/the-web-developer-bootcamp/

https://www.npmjs.com/

http://reduxblog.herokuapp.com/
