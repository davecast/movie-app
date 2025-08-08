import { getNowPlaying } from "@/core/services/now-playing.services";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  
  const moviesQuery = useQuery({
    queryKey: ['movies'],
    queryFn: getNowPlaying,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })
  
  return {
    moviesQuery
  }
}