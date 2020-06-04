const express = require("express");
const apiRouter = express.Router();
const schemaRouter = require("./schemaRouter");
const formsRouter = require("./formRouter");

apiRouter.route("/").get((req, res) => res.status(200).send("Hey"));
apiRouter.use("/schemas", schemaRouter);
// apiRouter.use("/forms", formsRouter);

module.exports = apiRouter;
