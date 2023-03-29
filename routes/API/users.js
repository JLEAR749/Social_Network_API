const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller.js');

router.route('/')
    .get(getUsers)
    .post(createUser)
    .get(getSingleUser)

router
  .route('/:userId')
  .get(getSingleUser)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser)
  

router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend)

module.exports = router;
