import MovieCard from "@/components/MovieCard";
const PopularMovie = ({ movies }) => {
  if (!movies || !Array.isArray(movies)) {
    return <div>No movies available.</div>;
  }

  return (
    <div className="bg-indigo-400 container max-w-max mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">Popular Movies</h1>
      <div className="mt-15 md:p-2 grid md:grid-cols-2 gap-2 h-15 md:aspect-[4/3] lg:grid-cols-4 lg:p-4 lg:aspect-[3/4] sm: grid-cols-1 sm:p-1 sm: aspect-[2/3]">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovie;
