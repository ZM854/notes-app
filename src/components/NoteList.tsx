import type { NoteType } from "../types/NoteType";
import Note from "./Note";

type NoteListProps = { notes: NoteType[] };

const NoteList = ({ notes }: NoteListProps) => {
  if (!notes.length) {
    return <h3>No notes yet</h3>;
  }

  return (
    <div>
      {notes.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
};

export default NoteList;
