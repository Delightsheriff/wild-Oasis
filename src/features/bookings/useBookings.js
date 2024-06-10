import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

//data fetching with react-query
//useQuery hook takes an object with queryKey and queryFn
//isLoading,error comes from react-query, data is the result of the query
//getCabins is a function that fetches data from the database
//queryKey is an array that identifies the querys data
export function useBookings() {
  const [searchParams] = useSearchParams();

  //Filter

  //get the status filter value from the searchParams
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //Sorting
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    //queryKey is an array that identifies the querys data
    //[filter ] is a dependency array, when the value changes the query will refetch
    queryKey: ["bookings", filter, sortBy, page],

    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  console.log(bookings);

  return { isLoading, bookings, error, count };
}
