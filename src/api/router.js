import express from 'express'

import { addUser, getUsers, getUser, updateUser, deleteUser } from './users/controller'

const router = express.Router()

/**
 * Users route
 */
router.route('/users')
.post(addUser)
.get(getUsers)

router.route('/users/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser)


export default router
