import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  //useQueryClient hook gives us access to the query client instance to enable us to invalidate queries
  const queryclient = useQueryClient();
  //using react-query useMutation hook to delete a cabin
  //deleteCabin is a function that deletes a cabin from the database
  //useMutation takes an object with mutationFn, and returns an object with isLoading, mutate
  //mutate is a function that triggers the mutation
  //onSuccess is a function that runs after the mutation is successful to invalidate the query and refetch the data
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin deleted successfully");

      queryclient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
