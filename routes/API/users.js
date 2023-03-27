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
    .post(getSingleUser)

router
  .route('/:userId')
  .get(getSingleUser)
  .put(createUser)
  .delete(deleteUser);

module.exports = router;
