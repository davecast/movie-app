import { getNowPlaying, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/core/services/movies";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: getNowPlaying,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  const popularMoviesQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: getPopularMovies,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  const topRatedMoviesQuery = useQuery({
    queryKey: ['movies', 'top-rated'],
    queryFn: getTopRatedMovies,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  const upcomingMoviesQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: getUpcomingMovies,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  return {
    nowPlayingQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery
  }
}