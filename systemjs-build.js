var path = require('path');
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('./', './config.js');

builder
  .bundle(
    'index.js',
    'index.bundle.js'
  )
  .then(() => console.log('Build complete'))
  .catch(err => {
    console.warn('Build error:');
    console.log(err);
  });
