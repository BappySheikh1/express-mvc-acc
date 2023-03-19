const express= require('express')
const { getAllUsers } = require('../controller/users.controller')


const router = express.Router()

router
.route('/')
.get(getAllUsers)