import MovieCard from "@/components/MovieCard";

// const PopularMovie = ({ movies }) => {
//   return (
//     <div className="bg-indigo-700 container max-w-7xl mx-auto pb-10 px-4">
//       <h1 className="text-white text-2xl mt-8 mb-5">Popular Movies</h1>
//       {movies.map((movie) => (
//         <MovieCard movie={movie} key={movie.id} />
//       ))}
//     </div>
//   );
// };

const PopularMovie = ({ movies }) => {
  if (!movies || !Array.isArray(movies)) {
    return <div>No movies available.</div>;
  }

  return (
    <div className="bg-indigo-700 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">Popular Movies</h1>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default PopularMovie;
