// require express 
const express = require("express");
// express router
const router = new express.Router();

// function
const getUser = require("../middleware/getUser");
const postUser = require("../middleware/postUser");
const getParticularUser = require("../middleware/getParticularUser");
const updateUser = require("../middleware/updateUser");
const deleteUser = require("../middleware/deleteUser");

// routes
router.get("/user", getUser.getUser);
router.get("/user/:id", getParticularUser.getParticularUser);
router.post("/user", postUser.postUser);
router.patch("/:id", updateUser.updateUser);
router.delete("/:id", deleteUser.deleteUser);

// export
module.exports = { router }