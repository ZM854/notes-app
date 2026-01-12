import { useAuth } from "../hooks/UseAuth";
import NotesButton from "./UI/button/NotesButton";
import NotesInput from "./UI/input/NotesInput";

const LoginForm = () => {
  const { setIsAuth } = useAuth();

  return (
    <form onSubmit={() => setIsAuth(true)}>
      <NotesInput placeholder="login" />
      <NotesInput placeholder="password" />
      <NotesButton type="submit">Login</NotesButton>
    </form>
  );
};

export default LoginForm;
