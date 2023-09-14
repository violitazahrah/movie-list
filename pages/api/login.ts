// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { email, password } = req.body;

		// Ganti ini dengan logika autentikasi sesuai dengan kebutuhan Anda
		if (email === "user@example.com" && password === "password") {
			res.status(200).json({ message: "Login berhasil", success: true });
		} else {
			res
				.status(401)
				.json({ message: "Email atau kata sandi salah", success: false });
		}
	} else {
		res.status(405).json({ message: "Metode tidak diizinkan", success: false });
	}
}
