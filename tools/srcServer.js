// this file will configure a web server which will server files inside our src folder

import express from 'express'
import webpack from 'webpack'
import path from 'path'
import open from 'open'
import config from '../webpack.config.dev'

/* eslint-disable no-console */

const port = 3002
const app = express()

// create an instance of express
const compiler = webpack(config)

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    // writeToDisk: true,
  }),
)

app.use(require('webpack-hot-middleware')(compiler))

// what kind of file we need to return for the requests
// below we are configuring to return index.html for all the requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})
