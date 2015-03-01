GearShed 
==========================

The Gearshed's sharing economy site is based on the MEEN Javascript stack and boilerplate (see Acknowledgements below)

### Technology Used

+ Node - Server Side
+ Express - Web Server Framework
+ Ember - Client Side MVC Framework
+ MongoDB - Database
+ Bootstrap - front end framework
+ SASS - CSS pre-processor
+ jQuery - Write less, do more
+ Grunt - The Javascript task runner
+ Bower - Client-side dependency management
+ Handlebars - Advanced templating
+ Livereload - Automatic browser reload per save
+ Mongoose - A NodeJS object modeler for MongoDB
+ Passport - User Authentication


### Acknowledgements
The Full Stack JS Boilerplate is created by [Martin Genev](http://www.twitter.com/cyberseer) of [Gemini Connect](http://www.geminiconnect.com) and is largely based on the work of [Amos Haviv](https://twitter.com/amoshaviv) on [meanjs.org](http://www.meanjs.org) 

### To Do:

[Alpha]
+ Change Image storage to remote storage (perhaps aws?) since Heroku doesn't allow for storage
+ Usernames, avatars, and locations on items currently only display for the user that made them
+ All dates on items currently marked as today
+ Finish Search
	+ General Search of Title, Category, and Description
	+ Location search using Google Geocoder
+ Buy/Edit buttons - show 'buy' if the item isn't mine - 'edit' if it is
+ "Orders" Section of Site - when a user places an order this section will have that order - a connection between two users 

[Beta]
+ Stripe Functionality
	+ Buy button to link up with purchases
	+ Server side implementation of purchases
	+ Verify we have a way to remit payments to person renting 
+ Google and Facebook Logins

[1.0]
+ Email system
+ Confirmation of return
+ Review system
+ Message system internally - doesn't make them deal with one another
