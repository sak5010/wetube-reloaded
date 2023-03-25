import express from "express";
import { addView, addComment } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/view", addView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", addComment);

export default apiRouter;
