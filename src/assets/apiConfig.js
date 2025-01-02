export const API_OPTIONS = {
  "method": "GET",
  "headers": {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTgyZjU0NzQwZDU4YjRkZDg1MjllOWRlMzM5ZGEwZSIsIm5iZiI6MTczMDc3MDk1Ni45OTI5MzE2LCJzdWIiOiI2NWRkMDYyZWRjYjZhMzAxODU4NGY4MWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Y10pnZ9t61m2i08N6jXo-vit51zmV6W7nula3OmHP_8"
  }
}

const BASE_URL = "https://api.themoviedb.org/3"

export const API_ENDPOINTS = {
  IMAGE_BACKDROP: `https://image.tmdb.org/t/p/original/`,
  GET_MOVIE_IMAGES: (movieData) => `${BASE_URL}/movie/${movieData.id}/images?language=en`,
  GET_POPULAR_MOVIES: `${BASE_URL}/movie/popular`,
};
