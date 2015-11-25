
Streams are one of the most powerful way to express data flow operations. And the way Node implemented them is great. I recommend you to expend some time learning how to think in [Streams with node](https://github.com/substack/stream-handbook).

This boilerplate project uses [shoe](https://github.com/substack/shoe) to add a stream interface to a websocket so you can pipe other streams from/to.  It's very simple but serves as an starting point.

In the browser shoe is also used, and browserify is used to compile.

## Setup

* clone the repository
* Install dependencies (npm install)
* node server ( to start the web server )

By default it will run on port 9999

* Open the page from multiple browsers /devices
* Write a message to broadcast it to the connected peers.


## Change browser code

You must install browserify and run

	browserify browser/app.js > public/bundle.js

## TODO:

* Build step


