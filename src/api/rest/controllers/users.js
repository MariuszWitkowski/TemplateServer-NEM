import DB from '../../../db'

export function getUsers(req, res) {
  DB.connect((err, db) => {
    if (err) {
      // send response
      res.send({
        success: false,
        message: err
      })
    } else {
      // Get the documents collection
      let collection = db.collection('users')

      // Insert some users
      collection.find().toArray((err, results) => {
        let response = {
          success: true,
          message: '',
          data: []
        }
        if (err) {
          console.log(err)
          Object.assign(response, {
            success: false,
            message: err
          })
        } else {
          console.log('find', results)
          Object.assign(response, { data: results })
          response.data = results
        }
        // close connection
        db.close()
        // send response
        res.send(response)
      })
    }
  })
}

export function getUser(req, res) {
  let userId = req.params.id

  if (userId.length < 24) { // id in mogo length is 24
    res.send({
      success: false,
      message: 'Wrong userId'
    })
    return
  }
  DB.connect((err, db) => {
    if (err) {
      // send response
      res.send({
        success: false,
        message: err
      })
    } else {
      // Get the documents collection
      let collection = db.collection('users')

      // Insert some users
      collection.findOne({ _id: DB.ObjectID(userId) }, (err, results) => {
        let response = {
          success: true,
          message: '',
          data: []
        }
        if (err) {
          console.log(err)
          Object.assign(response, {
            success: false,
            message: err
          })
        } else {
          console.log('find', results)
          Object.assign(response, { data: results })
          response.data = results
        }
        // close connection
        db.close()
        // send response
        res.send(response)
      })
    }
  })
}

export function createTestUsers(req, res) {
  DB.connect((err, db) => {
    if (err) {
      // send response
      res.send({
        success: false,
        message: err
      })
    } else {
      // Get the documents collection
      let collection = db.collection('users')

      //Create some users
      let user1 = { name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user'] }
      let user2 = { name: 'modulus user', age: 22, roles: ['user'] }
      let user3 = { name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user'] }

      // Insert some users
      collection.insert([user1, user2, user3], (err, result) => {
        let response = {
          success: true,
          message: '',
          data: []
        }
        if (err) {
          console.log(err)
          Object.assign(response, {
            success: false,
            message: err
          })
        } else {
          console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result)
          Object.assign(response, {
            message: `Inserted ${result.length} documents into the "users" collection.`,
            data: result.ops
          })
        }
        // close connection
        db.close()
        // send response
        res.send(response)
      })
    }
  })
}
