import { getNowPlaying, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/core/services/movies";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: getNowPlaying,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  // const popularMoviesQuery = useQuery({
  //   queryKey: ['movies', 'popular'],
  //   queryFn: () => getPopularMovies({ page: 1 }),
  //   staleTime: 1000 * 60 * 60 * 24, // 24 hours
  // })

  // const topRatedMoviesQuery = useQuery({
  //   queryKey: ['movies', 'top-rated'],
  //   queryFn: () => getTopRatedMovies({ page: 1 }),
  //   staleTime: 1000 * 60 * 60 * 24, // 24 hours
  // })

  // const upcomingMoviesQuery = useQuery({
  //   queryKey: ['movies', 'upcoming'],
  //   queryFn: () => getUpcomingMovies({ page: 1 }),
  //   staleTime: 1000 * 60 * 60 * 24, // 24 hours
  // })

  const popularMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'popular'],
    queryFn: ({ pageParam = 1 }) => {
      return getPopularMovies({ page: pageParam })
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return undefined
      return pages.length + 1
    }
  })

  const topRatedMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'top-rated'],
    queryFn: ({ pageParam = 1 }) => {
      return getTopRatedMovies({ page: pageParam })
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return undefined
      return pages.length + 1
    }
  })

  const upcomingMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'upcoming'],
    queryFn: ({ pageParam = 1 }) => {
      return getUpcomingMovies({ page: pageParam })
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return undefined
      return pages.length + 1
    }
  })

  return {
    nowPlayingQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery
  }
}