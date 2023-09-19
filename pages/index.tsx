// import axios from "axios";
// import Hero from "@/components/Hero";
// import { server } from "@/config";
// import PopularMovie from "@/components/PopularMovie";
// import { withSessionSsr } from "@/lib/withSession";

// export default function Home({ movies }) {
//   console.log(movies);
//   return (
//     <div className="bg-indigo-400">
//       <Hero />
//       <PopularMovie movies={movies.results} /> {/* Perbaikan: Gunakan movies.results */}
//     </div>
//   );
// }

// export async function getStaticProps() {
//   try {
//     const res = await axios.get(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
//     const movies = res.data;

//     return {
//       props: { movies },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: { movies: [] },
//     };
//   }
// }

// interface Props {
//   username: string;
// }

// export default function Home({ username }: Props) {
//   return (
//     <div>
//       <div className="name">I'm {username || "Guest User"}</div>
//       <button>
//         <Link href={"/login"}>Go To Login</Link>
//       </button>
//     </div>
//   );
// }

// export const getServerSideProps = withSessionSsr(async function getServersideProps({ req, res }) {
//   try {
//     const username = req.session.username || "";

//     return {
//       props: {
//         username: username,
//       },
//     };
//   } catch (err) {
//     console.log("page Home error", err);

//     return {
//       redirect: {
//         destination: "/login",
//         statusCode: 307,
//       },
//     };
//   }
// });

// import axios from "axios";
// import Hero from "@/components/Hero";
// import PopularMovie from "@/components/PopularMovie";
// import { server } from "@/config";
// import { withSessionSsr } from "@/lib/withSession";

// export default function Home({ movies }) {
//   return (
//     <div className="bg-indigo-400">
//       <Hero />
//       <PopularMovie movies={movies.results} />
//     </div>
//   );
// }

// export const getServerSideProps = withSessionSsr(async function getServersideProps({ context, req, res }) {
//   try {
//     const res = await axios.get(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
//     const movies = res.data;

//     const username = req.session.username || "";
//     const user = context.req.session.get("user");

//     if (!user) {
//       return {
//         redirect: {
//           destination: "/login",
//           permanent: false,
//         },
//       };
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         user: "",
//         movies: { results: [] },
//       },
//     };
//   }
// });

import axios from "axios";
import Hero from "@/components/Hero";
import PopularMovie from "@/components/PopularMovie";
import { server } from "@/config";
import { withSessionSsr } from "@/lib/withSession";

export default function Home({ movies }) {
  return (
    <div className="bg-indigo-400">
      <Hero />
      <PopularMovie movies={movies.results} />
    </div>
  );
}

export const getServerSideProps = withSessionSsr(async function getServersideProps({ req }) {
  try {
    const res = await axios.get(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    const movies = res.data;

    const username = req.session.username || "";
    const user = req.session.username || null;

    if (!user) {
      return {
        redirect: {
          destination: "/Login",
          permanent: false,
        },
      };
    }

    return {
      props: {
        movies,
        user,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        user: null,
        movies: { results: [] },
      },
    };
  }
});
