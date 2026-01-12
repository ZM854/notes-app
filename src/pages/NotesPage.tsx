import NotesButton from "../components/UI/button/NotesButton";
import { useAuth } from "../hooks/UseAuth";

const NotesPage = () => {
  const { setIsAuth } = useAuth();
  return (
    <div>
      <NotesButton onClick={() => setIsAuth(false)}>Logout</NotesButton>
    </div>
  );
};

export default NotesPage;
