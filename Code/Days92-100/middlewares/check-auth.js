function checkAuthStatus(req, res, next) {
  const uid = req.session.uid
  if (!uid) {
    return next()
  }

  // This user is authenticated!
  res.locals.uid = uid
  res.locals.isAuth = true
  res.locals.isAdmin = req.session.isAdmin
  next()
}

module.exports = checkAuthStatus
