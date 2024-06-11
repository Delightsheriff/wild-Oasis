import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(); //this will remove all queries from the cache when the user logs out
      navigate("/login"), { replace: true }; // replace:true will replace the current history entry
    },
  });

  return {
    logout,
    isLoading,
  };
}
