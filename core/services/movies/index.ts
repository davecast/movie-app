import { axiosClient } from "@/core/api/axios.api";
import { MovieMapper } from "@/core/utils/mappers";
import { Movie, MoviesResponse } from "@/types/movies";

interface Options {
  page?: number;
  limit?: number;
}

export const getNowPlaying = async (): Promise<Movie[]> => {
  try {
    const { data } = await axiosClient.get<MoviesResponse>('/now_playing');
    const movies = data.results.map(MovieMapper.fromMovieResponseToMovie);
    return movies
  } catch (error) { 
    console.error('API Error:', error);
    throw 'Cannot load now playing movies';
  }
} 

export const getPopularMovies = async ({ page = 1, limit = 10 }: Options): Promise<Movie[]> => {
  try {
    const { data } = await axiosClient.get<MoviesResponse>('/popular', {
      params: {
        page,
        limit,
      },
    });
    const movies = data.results.map(MovieMapper.fromMovieResponseToMovie);
    return movies
  } catch (error) { 
    console.error('API Error:', error);
    throw 'Cannot load popular movies';
  }
} 

export const getTopRatedMovies = async ({ page = 1, limit = 10 }: Options): Promise<Movie[]> => {
  try {
    const { data } = await axiosClient.get<MoviesResponse>('/top_rated', {
      params: {
        page,
        limit,
      },
    });
    const movies = data.results.map(MovieMapper.fromMovieResponseToMovie);
    return movies
  } catch (error) { 
    console.error('API Error:', error);
    throw 'Cannot load top rated movies';
  }
} 

export const getUpcomingMovies = async ({ page = 1, limit = 10 }: Options): Promise<Movie[]> => {
  try {
    const { data } = await axiosClient.get<MoviesResponse>('/upcoming', {
      params: {
        page,
        limit,
      },
    });
    const movies = data.results.map(MovieMapper.fromMovieResponseToMovie);
    return movies
  } catch (error) { 
    console.error('API Error:', error);
    throw 'Cannot load upcoming movies';
  }
} 