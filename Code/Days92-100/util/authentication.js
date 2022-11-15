function createUserSession(req, user, action) {
  // Express-Session package. Access user id
  req.session.uid = user._id.toString()

  req.session.save(action)
}

function destroyUserAuthSession(req) {
  req.session.uid = null
}
module.exports = {
  createUserSession: createUserSession,
  destroyUserAuthSession: destroyUserAuthSession,
}
