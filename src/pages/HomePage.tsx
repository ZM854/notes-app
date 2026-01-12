import { Link } from "react-router-dom";
import NotesButton from "../components/UI/button/NotesButton";

const HomePage = () => {
  return (
    <div>
      <NotesButton>
        <Link to="/login">Войти</Link>
      </NotesButton>
    </div>
  );
};

export default HomePage;
