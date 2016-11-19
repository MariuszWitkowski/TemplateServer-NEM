export function getUsers(req, res) {
  res.send([{ name: 'Ala', age: 20 }])
}

export function getUser(req, res) {
  let userId = req.params.id
  res.send({ id: 1234, name: 'Ala', age: 20 })
}
