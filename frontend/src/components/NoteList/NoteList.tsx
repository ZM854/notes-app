import type { NoteType } from "../../types/NoteType";
import Note from "../Note/Note";
import classes from "./NoteList.module.css";
type NoteListProps = {
  notes: NoteType[];
  onDelete: (id: number) => void;
  onEdit: (note: NoteType) => void;
};

const NoteList = ({ notes, onDelete, onEdit }: NoteListProps) => {
  if (!notes.length) {
    return <h3>No notes yet</h3>;
  }

  return (
    <div className={classes.notesList}>
      {notes.map((note, index) => {
        return (
          <Note
            key={note.id}
            note={note}
            noteListNumber={index + 1}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
