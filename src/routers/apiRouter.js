import express from "express";
import {
  addView,
  addComment,
  removeComment,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/view", addView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", addComment);
apiRouter.delete("/comments/:id([0-9a-f]{24})", removeComment);

export default apiRouter;
