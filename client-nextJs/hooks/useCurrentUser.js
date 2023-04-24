import { CurrentUserContext } from "context/CurrentUserProvider";
import { useContext } from "react";

export const useCurrentUser = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  return { currentUser, setCurrentUser };
};
