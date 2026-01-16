import type { NoteType } from "../../types/NoteType";
import classes from "./Note.module.css";
type NoteProps = {
  note: NoteType;
  noteListNumber: number;
};

const Note = ({ note, noteListNumber }: NoteProps) => {
  return (
    <div className={classes.noteContainer}>
      <h3 className={classes.noteTitle}>
        {noteListNumber}. {note.title}
      </h3>
      <p className={classes.noteDescription}>{note.description}</p>
    </div>
  );
};

export default Note;
