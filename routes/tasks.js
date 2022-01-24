const express = require("express");
const router = express.Router();
const { getAllTasks,
     getSpecificTask,
      updateTask,
       deleteTask,
        createNewTask } = require("../controllers/tasks")

// you chain to select which routes applies
router.route("/").get(getAllTasks).post(createNewTask);

router.route("/:id").get(getSpecificTask).patch(updateTask).delete(deleteTask)

module.exports = router;