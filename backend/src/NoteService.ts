import prisma from "./db/prisma.js";
import type { CreateNoteDto } from "./types/CreateNoteDto.js";
import type { UpdateNoteDto } from "./types/UpdateNoteDto.js";

class NoteService {
  async create(note: CreateNoteDto) {
    const newNote = await prisma.note.create({
      data: { title: note.title, description: note.description },
    });
    return newNote;
  }

  async getAll() {
    const notes = await prisma.note.findMany();
    return notes;
  }

  async getOne(id: number) {
    const note = await prisma.note.findUnique({
      where: {
        id,
      },
    });
    return note;
  }

  async update(id: number, note: UpdateNoteDto) {
    const updatedNote = await prisma.note.update({
      where: {
        id,
      },
      data: {
        title: note.title,
        description: note.description,
      },
    });

    return updatedNote;
  }

  async delete(id: number) {
    const deletedNote = await prisma.note.delete({
      where: {
        id,
      },
    });
    return deletedNote;
  }
}

export default new NoteService();
