/* eslint-disable */
'use strict'
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=false&reload=true')

hotClient.subscribe(function (event) {
  console.log(event)
  if (event.action === 'reload') {
    window.location.reload()
  }
})
