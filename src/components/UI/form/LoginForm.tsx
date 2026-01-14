import { useAuth } from "../../../hooks/UseAuth";
import NotesButton from "../button/NotesButton";
import NotesInput from "../input/NotesInput";
import classes from "./LoginForm.module.css";
const LoginForm = () => {
  const { setIsAuth } = useAuth();

  return (
    <form className={classes.loginForm} onSubmit={() => setIsAuth(true)}>
      <NotesInput placeholder="login" />
      <NotesInput placeholder="password" />
      <NotesButton className={classes.submitBtn} type="submit">
        Login
      </NotesButton>
    </form>
  );
};

export default LoginForm;
