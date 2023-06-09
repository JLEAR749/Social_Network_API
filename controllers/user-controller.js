const { User, Thought } = require("../models");
const { populate } = require("../models/User");

const userController = {
  getUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-_v",
      })
      .select("-_v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(er);
        res.status(400).json(err);
      });
  },

  // create a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then(async (dbUserData) => {
        console.log(dbUserData);
        !dbUserData
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              dbUserData,
            });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //update user by id
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }).then(
      (dbUserData) => {
        console.log(dbUserData)
        !dbUserData
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              dbUserData,
            });
      }
    );
  },
  // create user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      // .then((dbUserData) =>
      //   !dbUserData
      //     ? res.status(404).json({ message: "No such user exists" })
      //     : User.findOneAndUpdate(
      //         { users: req.params.userId },
      //         { $pull: { students: req.params.userId } },
      //         { new: true }
      //       )
      // )
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({
              message: "no user found with this ID",
            })
          : res.json({ message: "User successfully deleted" })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add a friend
  addFriend(req, res) {
    console.log("You are adding a friend");
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: "No friend found with that ID :(" })
          : res.json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove a friend
  removeFriend(req, res) {
    console.log(req.params)
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((dbUserData) =>{
        console.log(dbUserData)
        return !dbUserData
          ? res.status(404).json({ message: "No user found with that ID :(" })
          : res.json(dbUserData)
      })
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;
