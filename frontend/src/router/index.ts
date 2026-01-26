import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import type { AppRoute } from "../types/AppRoute";

export const publicRoutes: AppRoute[] = [
  { path: "/login", component: LoginPage },
  { path: "/", component: HomePage },
];

export const privateRoutes: AppRoute[] = [
  { path: "/notes", component: NotesPage },
];
