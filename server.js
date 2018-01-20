'use strict'
const path = require('path')
const {env} = require('process')
const {createServer} = require('http')
const next = require('next')
const dir = path.resolve(__dirname, '.')
const app = next({dir})
const handle = app.getRequestHandler()
const port = Number(env.PORT || 5000)

console.info('[INFO] Serving...', {port})
createServer(handle).listen(port)
