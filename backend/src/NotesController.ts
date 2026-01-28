import NoteService from "./NoteService.js";
import type { Request, Response } from "express";

class NoteController {
  async create(req: Request, res: Response) {
    try {
      const note = await NoteService.create(req.body);
      res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const notes = await NoteService.getAll();
      res.json(notes);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (Number.isNaN(id)) {
        return res.status(400).json({ message: "Invalid id" });
      }
      const note = await NoteService.getOne(id);
      res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (Number.isNaN(id)) {
        return res.status(400).json({ message: "Invalid id" });
      }
      const updatedNote = await NoteService.update(id, req.body);
      res.json(updatedNote);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (Number.isNaN(id)) {
        return res.status(400).json({ message: "Invalid id" });
      }
      const deletedNote = await NoteService.delete(id);
      res.json(deletedNote);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new NoteController();
