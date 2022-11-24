const router = require('express').Router();
const {getUsers, getSingleUser, createUser, updateUser, deleteUser} = require('../../controllers/userController');

module.exports = router;
// GET all users
router.route('/').get(getUsers).post(createUser);

// GET single user
router.route('/:userId').get(getSingleUser);

// Creates new user
router.route('/:userId').post(createUser);

// UPDATE user
router.route('/:userId').put(updateUser);

// DELETE user
router.route('/:userId').delete(deleteUser);