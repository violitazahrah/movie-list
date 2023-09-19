// // pages/api/login.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { withSessionRoute } from "@/lib/withSession";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { email, password } = req.body;

//     // Ganti ini dengan logika autentikasi sesuai dengan kebutuhan Anda
//     if (email === "user@example.com" && password === "password") {
//       res.status(200).json({ message: "Login berhasil", success: true });
//     } else {
//       res.status(401).json({ message: "Email atau kata sandi salah", success: false });
//     }
//   } else {
//     res.status(405).json({ message: "Metode tidak diizinkan", success: false });
//   }
// }

// const mockUsers = [
//   {
//     email: "admin@gmail.com",
// 	password: "admin11",
//   },
//   {
//     email: "justuser@gmail.com",
// 	password: "user11"
//   },
// ];

// export default withSessionRoute(async function handler(req, res) {
//   switch (req.method) {
//     case "POST":
//       const { email } = req.body;
//       const loggedInUsername = mockUsers.find((user) => user.email === email);

//       if (!loggedInUsername) {
//         res.status(404).send("Can't find the user");
//         break;
//       }

//       req.session.username = loggedInUsername.username;
//       await req.session.save();

//       res.status(200).send("Found the user");
//       break;
//     default:
//       res.status(405).end(`${req.method} Not Allowed`);
//       break;
//   }
// });

import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "@/lib/withSession";

const mockUsers = [
  {
    email: "admin@gmail.com",
    password: "admin11",
    username: "Admin User", // Menambahkan username untuk pengguna
  },
  {
    email: "user@example.com",
    password: "password",
    username: "Just User", // Menambahkan username untuk pengguna
  },
];

export default withSessionRoute(async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Ganti ini dengan logika autentikasi sesuai dengan kebutuhan Anda
    const loggedInUser = mockUsers.find((user) => user.email === email && user.password === password);

    if (!loggedInUser) {
      res.status(401).json({ message: "Email atau kata sandi salah", success: false });
      return;
    }

    req.session.username = loggedInUser.username; // Menggunakan loggedInUser.username sebagai username
    await req.session.save();

    res.status(200).json({ message: "Login berhasil", success: true, username: loggedInUser.username });
  } else {
    res.status(405).json({ message: "Metode tidak diizinkan", success: false });
  }
});
