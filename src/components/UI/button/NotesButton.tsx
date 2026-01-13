import type { ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./NotesButton.module.css";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariantProps = {
  to?: never;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkVariantProps = {
  to: LinkProps["to"];
} & Omit<LinkProps, "to">;

type NotesButtonProps = {
  children: ReactNode;
} & (ButtonVariantProps | LinkVariantProps);

const NotesButton = (props: NotesButtonProps) => {
  if ("to" in props && props.to !== undefined) {
    const { children, to, ...linkProps } = props;

    return (
      <Link className={classes.notesButton} to={to} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { children, ...buttonProps } = props;

  return (
    <button className={classes.notesButton} {...buttonProps}>
      {children}
    </button>
  );
};

export default NotesButton;
