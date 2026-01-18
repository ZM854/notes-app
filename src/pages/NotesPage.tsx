import { useState } from "react";
import NotesButton from "../components/UI/button/NotesButton";
import { useAuth } from "../hooks/UseAuth";
import type { NoteType } from "../types/NoteType";
import NoteList from "../components/NoteList/NoteList";
import NoteCreateModal from "../components/NoteCreateModal/NoteCreateModal";

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

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newNote: NoteType = {
      id: Date.now(),
      title: newNoteData.title,
      description: newNoteData.description,
    };

    setNotes([...notes, newNote]);
    setNewNoteData({ title: "", description: "" });
    setIsModalOpen(false);
  };

  const changeNewNoteData = (field: "title" | "description", value: string) => {
    setNewNoteData((prev) => ({ ...prev, [field]: value }));
  };

  const DeleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div
      // temporary hack
      // need to remove inline styling later
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <NotesButton onClick={() => setIsModalOpen(true)}>Add note</NotesButton>

      <NotesButton onClick={() => setIsAuth(false)}>Logout</NotesButton>
      <NoteList notes={notes} onDelete={DeleteNote} />

      <NoteCreateModal
        value={newNoteData}
        onChange={changeNewNoteData}
        onSubmit={addNote}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </div>
  );
};

export default NotesPage;
