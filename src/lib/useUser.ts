import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/userService";

export default function useUser() {
  const { isLoading, data, isError } = useQuery(["me"], getMe, {
    retry: false,
  });
  const isTokenValid = !isError && !!data;

  return {
    userLoading: isLoading,
    user: data,
    isLoggedIn: isTokenValid,
  };
}
