import { createContext, type Dispatch, type SetStateAction } from "react";

interface UserContextModel {
  userData: {
    token: string;
    isLoggedIn: boolean;
  };
  setUserData: Dispatch<
    SetStateAction<{
      token: string;
      isLoggedIn: boolean;
    }>
  >;
}

export const UserContext = createContext({} as UserContextModel);
