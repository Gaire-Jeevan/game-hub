import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../components/data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24h
    initialData: genres // this is static data that we store in separate component as genre will not change over time
  });

export default useGenres;
