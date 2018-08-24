const express = require("express");
const router = express.Router();
const ctrlAdmin = require("../controllers/admin.controller");

//admin
router.post("/admin/login", ctrlAdmin.Login);

module.exports = router;
