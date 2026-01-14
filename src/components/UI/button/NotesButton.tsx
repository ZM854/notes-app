import type { ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./NotesButton.module.css";
import { Link, type LinkProps } from "react-router-dom";
import clsx from "clsx";

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
    const { children, to, className, ...linkProps } = props;

    return (
      <Link
        className={clsx(classes.notesButton, className)}
        to={to}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const { children, className, ...buttonProps } = props;

  return (
    <button className={clsx(classes.notesButton, className)} {...buttonProps}>
      {children}
    </button>
  );
};

export default NotesButton;
