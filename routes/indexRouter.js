const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.getIndex);
indexRouter.get("/new", indexController.getNew);

indexRouter.post("/info", indexController.postInfo);

indexRouter.post("/new", indexController.postNew);

module.exports = indexRouter;
