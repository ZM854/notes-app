import axios from "axios";
import type { NoteType } from "../types/NoteType";
import type { CreateNoteDto, UpdateNoteDto } from "../types/NoteDto";

export default class NotesApi {
  static async create(note: CreateNoteDto, signal?: AbortSignal) {
    const response = await axios.post<NoteType>(
      "http://localhost:3000/api/notes",
      note,
      { signal },
    );
    return response.data;
  }

  static async getAll(signal?: AbortSignal): Promise<NoteType[]> {
    const response = await axios.get<NoteType[]>(
      "http://localhost:3000/api/notes",
      { signal },
    );
    return response.data;
  }
  static async getOne(id: string, signal?: AbortSignal): Promise<NoteType> {
    const response = await axios.get<NoteType>(
      `http://localhost:3000/api/notes/${id}`,
      { signal },
    );
    return response.data;
  }

  static async update(
    id: number,
    noteDto: UpdateNoteDto,
    signal?: AbortSignal,
  ): Promise<NoteType> {
    const response = await axios.put<NoteType>(
      `http://localhost:3000/api/notes/${id}`,
      noteDto,
      { signal },
    );
    return response.data;
  }
  static async delete(id: number, signal?: AbortSignal): Promise<NoteType> {
    const response = await axios.delete<NoteType>(
      `http://localhost:3000/api/notes/${id}`,
      { signal },
    );
    return response.data;
  }
}
