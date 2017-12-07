const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec
const monent = require('moment')
require('colors')

const checkFileDirectories = path.resolve(__dirname, './')
fs.watch(checkFileDirectories, { recursive: true }, (event, filename) => {
  console.log(monent().format('hh-mm-ss: ').green + filename.underline.red + '   change, reload server...'.grey)
  exec('pm2 reload 0', function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    console.log('📦  ' + 'server has restart ok !'.green)
    console.log()
  })
})

console.log('watch start the path is '.rainbow + `${checkFileDirectories}`.underline.red)
