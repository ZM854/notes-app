import { Router } from "express";
import NotesController from "./NotesController.js";

const router = Router();

router.get("/notes", NotesController.getAll);
router.get("/notes/:id", NotesController.getOne);
router.post("/notes", NotesController.create);
router.put("/notes/:id", NotesController.update);
router.delete("/notes/:id", NotesController.delete);

export default router;
