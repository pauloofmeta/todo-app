const express = require('express')

module.exports = function(server) {
  // API routes
  const router = express.Router()
  server.use('/api', router)

  const todoService = require('../api/todo/todoServices')
  todoService.register(router, '/todos')
}