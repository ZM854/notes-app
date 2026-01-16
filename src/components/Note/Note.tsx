import type { NoteType } from "../../types/NoteType";
import classes from "./Note.module.css";
type NoteProps = {
  note: NoteType;
};

const Note = ({ note }: NoteProps) => {
  return (
    <div className={classes.noteContainer}>
      <h3 className={classes.noteTitle}>
        {note.id}. {note.title}
      </h3>
      <p className={classes.noteDescription}>{note.description}</p>
    </div>
  );
};

export default Note;
