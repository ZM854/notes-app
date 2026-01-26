import { createContext, type Dispatch, type SetStateAction } from "react";

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);
