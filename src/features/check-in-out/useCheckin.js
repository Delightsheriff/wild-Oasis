import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useChecking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`Booking  #${data.id} checked in successfully`);
      queryClient.invalidateQueries({ active: true }); // Invalidate the active bookings query
      navigate("/");
    },
    onError: () => {
      toast.error("Could not check in booking");
    },
  });

  return { checkin, isCheckingIn };
}