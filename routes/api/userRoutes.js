const router = require('express').Router();
const {getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend} = require('../../controllers/userController');

// GET all users
router.route('/').get(getUsers).post(createUser);

// GET single user
router.route('/:userId').get(getSingleUser);

// Creates new user
router.route('/').post(createUser);

// UPDATE user
router.route('/:userId').put(updateUser);

// DELETE user
router.route('/:userId').delete(deleteUser);


// Routes for friends

// Creates new friend
router.route('/:userId/friends').post(addFriend);

// DELETE friend
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;