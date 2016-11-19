import express from 'express'

import { getUsers, getUser } from './controllers/users'

const router = express.Router()

// Users
router.get('/users', getUsers)
router.get('/user/:id', getUser)

export default router
