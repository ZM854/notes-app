import type { NoteType } from "../types/NoteType";

type NoteProps = {
  note: NoteType;
};

const Note = ({ note }: NoteProps) => {
  return (
    <div>
      <h3>
        {note.id}. {note.title}
      </h3>
      <p>{note.description}</p>
    </div>
  );
};

export default Note;
