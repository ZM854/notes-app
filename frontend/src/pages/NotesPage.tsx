import { useEffect, useState } from "react";
import NotesButton from "../components/UI/button/NotesButton";
import { useAuth } from "../hooks/UseAuth";
import type { NoteType } from "../types/NoteType";
import NoteList from "../components/NoteList/NoteList";
import NoteCreateModal from "../components/NoteCreateModal/NoteCreateModal";
import NotesApi from "../API/NotesApi";
import { useFetching } from "../hooks/UseFetching";

const NotesPage = () => {
  const { setIsAuth } = useAuth();

  const [notes, setNotes] = useState<NoteType[]>([]);

  const [newNoteData, setNewNoteData] = useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  const [fetchNotes] = useFetching(async (signal) => {
    const response = await NotesApi.getAll(signal);
    setNotes(response);
  });

  useEffect(() => {
    fetchNotes();
  }, []);

  const changeNewNoteData = (field: "title" | "description", value: string) => {
    setNewNoteData((prev) => ({ ...prev, [field]: value }));
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const openCreateModal = () => {
    setNewNoteData({ title: "", description: "" });
    setEditingNoteId(null);
    setIsModalOpen(true);
  };

  const openEditModal = (note: NoteType) => {
    setNewNoteData({ title: note.title, description: note.description });
    setEditingNoteId(note.id);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editingNoteId === null) {
      const newNote: NoteType = {
        id: Date.now(),
        ...newNoteData,
      };

      setNotes((prev) => [...prev, newNote]);
    } else {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingNoteId ? { ...note, ...newNoteData } : note,
        ),
      );
    }
    setNewNoteData({ title: "", description: "" });
    setEditingNoteId(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <NotesButton onClick={openCreateModal}>Add note</NotesButton>
        <NotesButton onClick={() => setIsAuth(false)}>Logout</NotesButton>
      </div>

      <NoteList notes={notes} onDelete={deleteNote} onEdit={openEditModal} />

      <NoteCreateModal
        value={newNoteData}
        onChange={changeNewNoteData}
        onSubmit={handleSubmit}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        mode={editingNoteId ? "edit" : "create"}
      />
    </div>
  );
};

export default NotesPage;
