export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string | null;
  backdrop: string | null;
}

export interface MovieResponse {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieResponse[];
  total_pages: number;
  total_results: number;
}

// Ejemplo de respuesta:
/*
{
  "dates": {
    "maximum": "2025-08-13",
    "minimum": "2025-07-02"
  },
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/wSy4EZlZcbxyoLS5jQk5Vq3Az8.jpg",
      "genre_ids": [
        878,
        53
      ],
      "id": 755898,
      "original_language": "en",
      "original_title": "War of the Worlds",
      "overview": "Will Radford is a top analyst for Homeland Security who tracks potential threats through a mass surveillance program, until one day an attack by an unknown entity leads him to question whether the government is hiding something from him... and from the rest of the world.",
      "popularity": 2470.4836,
      "poster_path": "/yvirUYrva23IudARHn3mMGVxWqM.jpg",
      "release_date": "2025-07-29",
      "title": "War of the Worlds",
      "video": false,
      "vote_average": 4.495,
      "vote_count": 191
    }
  ],
  "total_pages": 190,
  "total_results": 3795
}
*/