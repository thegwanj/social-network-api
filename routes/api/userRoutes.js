const router = require('express').Router();

module.exports = router;
// GET /

// User.find()

// GET /:userId

// User.findById( req.params.userId )
// .populate()
// User.findOne( { _id: req.params.userId } )

// DELETE /:userId

// User.deleteOne( { _id: req.params.userId } )

// PUT /:userId

// User.findOneAndUpdate( search, { $set: req.body } )