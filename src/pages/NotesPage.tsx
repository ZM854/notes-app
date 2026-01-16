import { useState } from "react";
import NotesButton from "../components/UI/button/NotesButton";
import NotesInput from "../components/UI/input/NotesInput";
import { useAuth } from "../hooks/UseAuth";
import type { NoteType } from "../types/NoteType";
import NoteList from "../components/NoteList/NoteList";

const NotesPage = () => {
  const { setIsAuth } = useAuth();

  const [notes, setNotes] = useState<NoteType[]>([
    { id: 1, title: "Aboba", description: "Biba" },
    { id: 2, title: "Aboba", description: "Biba" },
    { id: 3, title: "Aboba", description: "Biba" },
  ]);

  const [newNoteData] = useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });

  const addNote = () => {
    const newNote: NoteType = {
      id: Date.now(),
      title: newNoteData.title,
      description: newNoteData.description,
    };

    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <NotesButton onClick={() => setIsAuth(false)}>Logout</NotesButton>

      <form onSubmit={addNote}>
        <NotesInput />
        <NotesInput />
        <NotesButton type="submit">Add note</NotesButton>
      </form>
      <NoteList notes={notes} />
    </div>
  );
};

export default NotesPage;
