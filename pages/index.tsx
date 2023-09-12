import axios from "axios";
import Hero from "@/components/Hero";
import { server } from "@/config";
import PopularMovie from "@/components/PopularMovie";

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div className="bg-indigo-400">
      <Hero />
      <PopularMovie movies={movies.results} /> {/* Perbaikan: Gunakan movies.results */}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    const movies = res.data;

    return {
      props: { movies },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { movies: [] },
    };
  }
}
