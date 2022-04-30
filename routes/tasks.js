const express = require('express');
const router = express.Router();
const {getAllTasks , createTask , getSimpleTask , updateTask , deleteTask} = require('../controllers/tasks');


router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSimpleTask).patch(updateTask).delete(deleteTask);

module.exports = router 