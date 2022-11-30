const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));  
    },

    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((user) => 
            !user ? res.status(404).json({message: 'No user with this id!'}) : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
        .then((user) =>
          !user ? res.status(404).json({ message: 'No user with this id!' })
          : User.findOneAndUpdate(
                { users: req.params.userId },
                { $pull: { users: req.params.userId } },
                { new: true }
            )
        )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No more user with this id!' })
            : res.json({ message: 'User successfully deleted!' })
        )
        .catch((err) => res.status(500).json(err));  
    },

    // Controllers for friends
    addFriend(req, res) {
        console.log('Adding a friend!');
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.body}},
            {runValidators: true, new: true}
        )
        .then((user) =>
            !user 
            ? res.status(404).json({message: 'No user with that ID'})
            : res.json(user)
        )
       .catch((err) => res.status(500).json(err));
    },    
    removeFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId}},
            {runValidators: true, new: true}
        )
        .then((user) =>
            !user
            ? res.status(404).json({message: 'No user with that ID'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    }    
};