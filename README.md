This is a boilerplate I use for experiments with realtime apps, websockets, streams and browserify.
It uses the **shoe** package for working with websockets as streams. Doesn't have any error checking.

The browser code uses browserify, create the bundle with:

browserify browser/app.js > public/bundle.js
