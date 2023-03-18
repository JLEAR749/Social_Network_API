const router = require('express').Router();
const {
  getUsers,
//   getSingleCourse,
  createUser,
//   updateCourse,
//   deleteCourse,
} = require('../../controllers/user-controller.js');

// // /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
// router
//   .route('/:userId')
//   .get(getSingleUser)
//   .put(updateUser)
//   .delete(deleteUser);

module.exports = router;
