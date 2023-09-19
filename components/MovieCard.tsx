import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-white shadow-md rounded-md cursor-pointer">
        <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={700} height={800} className="rounded-t-md" />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          {/* <p className="text-indigo-700 text-base mb-1">{movie.release_date}</p> */}
          <p className="font-bold text-m mb-1">Rate: {movie.vote_average}</p>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
