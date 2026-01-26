import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
import { publicRoutes, privateRoutes } from ".";

const AppRouter = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="/*" element={<Navigate to="/notes" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
