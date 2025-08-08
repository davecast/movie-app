import { MOVIE_DB_IMAGE_BASE_URL } from "@/constants";
import { Movie, MovieResponse } from "@/types/movies";

 export class MovieMapper {
  static fromMovieResponseToMovie(movie: MovieResponse): Movie {
    return {  
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `${MOVIE_DB_IMAGE_BASE_URL}${movie.poster_path}`,
      backdrop: `${MOVIE_DB_IMAGE_BASE_URL}${movie.backdrop_path}`
    }
  }
 }