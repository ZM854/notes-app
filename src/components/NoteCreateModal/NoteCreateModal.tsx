import clsx from "clsx";
import NoteCreateForm from "../NoteCreateForm/NoteCreateForm";
import classes from "./NoteCreateModal.module.css";

type NoteCreateModalProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (field: "title" | "description", value: string) => void;
  value: { title: string; description: string };

  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

  mode: "edit" | "create";
};

const NoteCreateModal = ({
  onSubmit,
  onChange,
  value,
  isOpen,
  setIsOpen,
  mode,
}: NoteCreateModalProps) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={clsx(classes.noteCreateModal, isOpen ? classes.active : "")}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <NoteCreateForm
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
          mode={mode}
        />
      </div>
    </div>
  );
};

export default NoteCreateModal;
