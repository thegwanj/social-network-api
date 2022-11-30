const router = require('express').Router();
const {getThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, removeReaction} = require('../../controllers/thoughtController');

// GET all thoughts
router.route('/').get(getThoughts).post(createThought);

// GET single thought
router.route('/:thoughtId').get(getSingleThought);

// Creates new thought
router.route('/').post(createThought);

// UPDATE thought
router.route('/:thoughtId').put(updateThought);

// DELETE thought
router.route('/:thoughtId').delete(deleteThought);


// Routes for reactions

// Creates new reaction
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;