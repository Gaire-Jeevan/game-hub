import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../components/data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h
    initialData: genres, // this is static data that we store in separate component as genre will not change over time
  });

export default useGenres;
