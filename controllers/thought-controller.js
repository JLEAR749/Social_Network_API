const { Thought, User } = require('../models');

const thoughtController ={
  getAllThoughts(req,res){
    Thought.find({})
    .populate({
      path:"reactions",
      select: "-_v",
    })
    .select("-_v")
    .then((dbthoughtData)=> res.json(dbthoughtData))
    .catch((err) => {
      console.log(er);
      res.status(400).json(err);
    });
  },



  // create a single user
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then(async (dbthoughtData) =>
        !dbthoughtData
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({
              thought,
              thought: await thought(req.params.thoughId),
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // get one thought by it's id
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user
  deleteUser(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId})
      .then((dbthoughtData) =>
        !dbthoughtData
          ? res.status(404).json({ message: 'No thought with this ID' })
          : Thought.findOneAndUpdate(
              { thought: req.params.thoughId },
              { $pull: { thought: req.params.thoughId } },
              { new: true }
            )
      )
      .then((dbthoughtData) =>
        !dbthoughtData
          ? res.status(404).json({
              message: 'No thought with this id',
            })
          : res.json({ message: 'Thought successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add a reaction
  addReaction(req, res) {
    console.log('You are adding a reaction');
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((dbthoughtData) =>
        !dbthoughtData
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID :(' })
          : res.json(dbthoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // delete Reaction
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughId },
      { $pull: { reactions: { reactiondId: req.params.reactiondId } } },
      { runValidators: true, new: true }
    )
      .then((dbthoughtData) =>
        !dbthoughtData
          ? res
              .status(404)
              .json({ message: 'No reaction found with that ID :(' })
          : res.json(dbthoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = thoughtController;