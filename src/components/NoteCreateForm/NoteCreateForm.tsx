import NotesButton from "../UI/button/NotesButton";
import NotesInput from "../UI/input/NotesInput";

type NoteCreateFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (field: "title" | "description", value: string) => void;

  value: { title: string; description: string };
};

const NoteCreateForm = ({ onSubmit, onChange, value }: NoteCreateFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <NotesInput
        value={value.title}
        onChange={(e) => onChange("title", e.target.value)}
        placeholder="title"
      />
      <NotesInput
        value={value.description}
        onChange={(e) => onChange("description", e.target.value)}
        placeholder="description"
      />
      <NotesButton type="submit">Add note</NotesButton>
    </form>
  );
};

export default NoteCreateForm;
