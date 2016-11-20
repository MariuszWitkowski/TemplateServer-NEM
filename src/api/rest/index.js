import express from 'express'

import { getUsers, getUser, createTestUsers } from './controllers/users'

const router = express.Router()

// Users
router.get('/users', getUsers)
router.get('/testusers', createTestUsers)
router.get('/user/:id', getUser)

export default router
