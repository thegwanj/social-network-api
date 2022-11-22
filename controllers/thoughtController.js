const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        Thought.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    
    getSingleUser(req, res) {
        Thought.findOne({ _id: req.params.userId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));  
    },

    createUser(req, res) {
        Thought.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    updateUser(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((thought) => 
            !thought ? res.status(404).json({message: 'No thought with this id!'}) : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    deleteUser(req, res) {
        Thought.findOneAndRemove({ _id: req.params.userId })
        .then((thought) =>
          !thought ? res.status(404).json({ message: 'No thought with this id!' })
          : Thought.findOneAndUpdate(
                { users: req.params.userId },
                { $pull: { users: req.params.userId } },
                { new: true }
            )
        )
        .then((thought) =>
          !thought
            ? res
                .status(404)
                .json({ message: 'Thought created but no thought with this id!' })
            : res.json({ message: 'Thought successfully deleted!' })
        )
        .catch((err) => res.status(500).json(err));  
    }
};