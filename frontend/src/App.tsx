import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context";
import AppRouter from "./router/AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
