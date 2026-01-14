import type { InputHTMLAttributes } from "react";
import classes from "./NotesInput.module.css";

const NotesInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={classes.notesInput} {...props} />;
};

export default NotesInput;
