// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/router"; // Import useRouter
// import { withSessionSsr } from "@/lib/withSession";
// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   const router = useRouter(); // Deklarasikan router

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("/api/login", {
//         email,
//         password,
//       });

//       console.log(response.data.message); // Tampilkan pesan sukses login

//       // Autentikasi berhasil, arahkan ke halaman utama (index.tsx)
//       if (response.data.success) {
//         router.push("/"); // Mengarahkan ke halaman utama (index.tsx)
//       }
//     } catch (error) {
//       console.error("Gagal login", error.response?.data.message); // Tampilkan pesan kesalahan
//       setErrorMessage("Email atau kata sandi salah");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-2xl font-semibold mb-4">Login</h1>
//         <input type="text" placeholder="Email" className="w-full border p-2 mb-4 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" className="w-full border p-2 mb-4 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
//         {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//         <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
// interface Props {
//   username: string;
// }

// export default function Login({ username }: Props) {
//   const router = useRouter();
//   const emailRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (username) {
//       router.push({ pathname: "/" });
//     }
//   }, []);

//   async function login(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     if (!emailRef.current) return;

//     const email = emailRef.current.value;
//     try {
//       const options = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: email }),
//       };
//       const response = await fetch("/api/login", options);
//       if (response.status !== 200) throw new Error("Can't login");
//       router.push({ pathname: "/" });
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   return (
//     <div>
//       <form onSubmit={login}>
//         <input type="text" ref={emailRef} />
//         <button type="submit">Login</button>
//       </form>
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
//     console.log(err);

//     return {
//       redirect: {
//         destination: "/login",
//         statusCode: 307,
//       },
//     };
//   }
// });

import { useState, useEffect, useRef, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { withSessionSsr } from "@/lib/withSession";

interface LoginPageProps {
  username: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ username }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      console.log(response.data.message);

      if (response.data.success) {
        router.push("/");
      }
    } catch (error) {
      console.error("Gagal login", error.response?.data.message);
      setErrorMessage("Email atau kata sandi salah");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <input type="text" placeholder="Email" className="w-full border p-2 mb-4 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full border p-2 mb-4 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

const Login: React.FC<Props> = ({ username }) => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (username) {
      router.push({ pathname: "/" });
    }
  }, [username, router]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!emailRef.current) return;

    const email = emailRef.current.value;
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      };
      const response = await fetch("/api/login", options);
      if (response.status !== 200) throw new Error("Can't login");
      router.push({ pathname: "/" });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={login}>
        <input type="text" ref={emailRef} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export const getServerSideProps = withSessionSsr(async function getServersideProps({ req, res }) {
  try {
    const username = req.session.username || "";

    return {
      props: {
        username,
      },
    };
  } catch (err) {
    console.log(err);

    return {
      redirect: {
        destination: "/Login",
        statusCode: 307,
      },
    };
  }
});
