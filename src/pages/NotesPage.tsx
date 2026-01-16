import { useState } from "react";
import NotesButton from "../components/UI/button/NotesButton";
import { useAuth } from "../hooks/UseAuth";
import type { NoteType } from "../types/NoteType";
import NoteList from "../components/NoteList/NoteList";
import NoteCreateForm from "../components/NoteCreateForm/NoteCreateForm";

const NotesPage = () => {
  const { setIsAuth } = useAuth();

  const [notes, setNotes] = useState<NoteType[]>([
    { id: 1, title: "Aboba", description: "Biba" },
    { id: 2, title: "Aboba", description: "Biba" },
    { id: 3, title: "Aboba", description: "Biba" },
  ]);

  const [newNoteData, setNewNoteData] = useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });

  const addNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newNote: NoteType = {
      id: Date.now(),
      title: newNoteData.title,
      description: newNoteData.description,
    };

    setNotes([...notes, newNote]);
    setNewNoteData({ title: "", description: "" });
  };

  const changeNewNoteData = (field: "title" | "description", value: string) => {
    setNewNoteData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      // temporary hack
      // need to remove inline styling later
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <NotesButton onClick={() => setIsAuth(false)}>Logout</NotesButton>
      <NoteCreateForm
        value={newNoteData}
        onChange={changeNewNoteData}
        onSubmit={addNote}
      />
      <NoteList notes={notes} />
    </div>
  );
};

export default NotesPage;
