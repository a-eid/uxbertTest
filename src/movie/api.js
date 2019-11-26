const API_KEY = '12c5a108444b39c3043eaa1e034575e0';

export async function fetchMovies(title, page = 1) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        title,
      )}&page=${page}`,
    );
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    // handle errors ( not really sure what values are possible here ...)
    return {results: []};
  }
}
