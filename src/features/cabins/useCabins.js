import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

//data fetching with react-query
//useQuery hook takes an object with queryKey and queryFn
//isLoading,error comes from react-query, data is the result of the query
//getCabins is a function that fetches data from the database
//queryKey is an array that identifies the querys data
export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}
