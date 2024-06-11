import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  //useQueryClient hook gives us access to the query client instance to enable us to invalidate queries
  const queryclient = useQueryClient();
  //using react-query useMutation hook to delete a cabin
  //deleteCabin is a function that deletes a cabin from the database
  //useMutation takes an object with mutationFn, and returns an object with isLoading, mutate
  //mutate is a function that triggers the mutation
  //onSuccess is a function that runs after the mutation is successful to invalidate the query and refetch the data
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success("Booking deleted successfully");

      queryclient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}
