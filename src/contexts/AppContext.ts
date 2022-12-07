import { createContext } from "react";

export interface AppContextProps {
  searchBarVisible: boolean;
  setSearchBarVisible: Function;
}

export const AppContext = createContext<AppContextProps>({
  searchBarVisible: false,
  setSearchBarVisible: () => {},
});
