import { axiosClient } from "@/core/api/axios.api";
import { MovieMapper } from "@/core/utils/mappers";
import { Movie, MoviesResponse } from "@/types/movies";

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

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const { data } = await axiosClient.get<MoviesResponse>('/popular');
    const movies = data.results.map(MovieMapper.fromMovieResponseToMovie);
    return movies
  } catch (error) { 
    console.error('API Error:', error);
    throw 'Cannot load popular movies';
  }
} 

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  try {
    const { data } = await axiosClient.get<MoviesResponse>('/top_rated');
    const movies = data.results.map(MovieMapper.fromMovieResponseToMovie);
    return movies
  } catch (error) { 
    console.error('API Error:', error);
    throw 'Cannot load top rated movies';
  }
} 

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  try {
    const { data } = await axiosClient.get<MoviesResponse>('/upcoming');
    const movies = data.results.map(MovieMapper.fromMovieResponseToMovie);
    return movies
  } catch (error) { 
    console.error('API Error:', error);
    throw 'Cannot load upcoming movies';
  }
} 