import { MongoClient, ObjectID } from 'mongodb'

const dbConfig = {
  url: '', // url to mongodb in mlab (or localhost)
  user: '', // user in db
  pass: '' // pass to user
}

class DB {

  ObjectID(id) {
    return ObjectID(id)
  }

  connect(fun) {
    // initialize connection
    MongoClient.connect(`mongodb://${dbConfig.user}:${dbConfig.pass}${dbConfig.url}`, (err, db) => {
      if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err)
      }
      // execution of the function describing the database
      fun(err, db)
    })
  }
}

export default new DB()
