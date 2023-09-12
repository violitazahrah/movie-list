import MovieCard from "@/components/MovieCard";

const PopularMovie = ({ movies }) => {
  if (!movies || !Array.isArray(movies)) {
    return <div>No movies available.</div>;
  }

  return (
    <div className="bg-indigo-400 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">Popular Movies</h1>
      <div className="grid gap-4 sm: grid-cols-2 md: grid-cols-3 lg: grid-cols-5">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovie;
