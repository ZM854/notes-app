import axios from "axios";
import type { NoteType } from "../types/NoteType";

export default class NotesApi {
  static async create() {}
  static async getAll(signal?: AbortSignal): Promise<NoteType[]> {
    const response = await axios.get<NoteType[]>(
      "http://localhost:3000/api/notes",
      { signal },
    );
    return response.data;
  }
  static async getOne() {}
  static async update() {}
  static async delete() {}
}
