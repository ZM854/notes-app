import clsx from "clsx";
import NoteCreateForm from "../NoteCreateForm/NoteCreateForm";
import classes from "./NoteCreateModal.module.css";

type NoteCreateModalProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (field: "title" | "description", value: string) => void;
  value: { title: string; description: string };

  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const NoteCreateModal = ({
  onSubmit,
  onChange,
  value,
  isOpen,
  setIsOpen,
}: NoteCreateModalProps) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={clsx(classes.noteCreateModal, isOpen ? classes.active : "")}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <NoteCreateForm value={value} onChange={onChange} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default NoteCreateModal;
