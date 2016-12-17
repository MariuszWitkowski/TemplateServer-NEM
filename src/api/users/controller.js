import User from './user'

/*
  req.body = {
    "name": "Ala",
    "age": 21,
    "roles": [
      "user"
    ]
  }
*/
export function addUser(req, res) {
  try {
    let availableParams = [
      'name',
      'age',
      'roles'
    ]
    let user = new User()
    availableParams.forEach((param) => {
      user[param] = req.body[param]
    })

    console.log('Add user %s with age %d', user.name, user.age)

    user.save((err) => {
      console.log('Save user')
      if (err)
        res.send(err)

      res.json({ message: 'User created!' })
    })
  } catch (err) {
    console.error(err)
    res.send(err)
  }
}

export function getUsers(req, res) {
  try {
    console.log('Get users')

    User.find((err, users) => {
      if (err)
        res.send(err)

      res.json(users)
    })
  } catch (err) {
    console.error(err)
    res.send(err)
  }
}

export function getUser(req, res) {
  try {
    console.log('Get user [%s]', req.params.id)

    User.findById(req.params.id, (err, user) => {
      if (err)
        res.send(err)

      res.json(user)
    })
  } catch (err) {
    console.error(err)
    res.send(err)
  }
}

export function updateUser(req, res) {
  try {
    console.log('Update user [%s]', req.params.id)

    User.findById(req.params.id, (err, user) => {
      if (err)
        res.send(err)

      let availableParams = [
        'name',
        'age',
        'roles'
      ]
      availableParams.forEach((param) => {
        user[param] = req.body[param]
      })

      user.save((err) => {
        console.log('Update user')
        if (err)
          res.send(err)

        res.json({ message: 'User updated!' })
      })
    })
  } catch (err) {
    console.error(err)
    res.send(err)
  }
}

export function deleteUser(req, res) {
  try {
    console.log('Delete user [%s]', req.params.id)

    User.remove({
      _id: req.params.id
    }, (err, user) => {
      if (err)
        res.send(err)

      res.json({ message: `Successfully deleted ${req.params.id}!` })
    })
  } catch (err) {
    console.error(err)
    res.send(err)
  }
}
