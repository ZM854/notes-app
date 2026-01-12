import type { ButtonHTMLAttributes, ReactNode } from "react";

type NotesButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};
const NotesButton = ({ children, ...props }: NotesButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default NotesButton;
