const express = require("express");
const schemasRouter = express.Router();
const {
  getAllSchemas,
  postSchema,
} = require("../controllers/schemaController");

schemasRouter.route("/").get(getAllSchemas).post(postSchema);

module.exports = schemasRouter;
