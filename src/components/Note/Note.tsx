import type { NoteType } from "../../types/NoteType";
import NotesButton from "../UI/button/NotesButton";
import classes from "./Note.module.css";
type NoteProps = {
  note: NoteType;
  noteListNumber: number;

  onDelete: (id: number) => void;
};

const Note = ({ note, noteListNumber, onDelete }: NoteProps) => {
  return (
    <div className={classes.noteContainer}>
      <div className={classes.noteInfo}>
        <h3 className={classes.noteTitle}>
          {noteListNumber}. {note.title}
        </h3>
        <p className={classes.noteDescription}>{note.description}</p>
      </div>
      <div className={classes.noteControls}>
        <NotesButton>Edit</NotesButton>
        <NotesButton onClick={() => onDelete(note.id)}>Delete</NotesButton>
      </div>
    </div>
  );
};

export default Note;
