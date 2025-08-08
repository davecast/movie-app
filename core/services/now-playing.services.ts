import { axios_client } from "@/core/api/axios.api";
import { MovieMapper } from "@/core/utils/mappers";
import { Movie, MoviesResponse } from "@/types/movies";

export const getNowPlaying = async (): Promise<Movie[]> => {
  try {
    const { data } = await axios_client.get<MoviesResponse>('/now_playing');
    const movies = data.results.map(MovieMapper.fromMovieResponseToMovie);
    return movies
  } catch (error) { 
    console.error('API Error:', error);
    throw 'Cannot load now playing movies';
  }
} 