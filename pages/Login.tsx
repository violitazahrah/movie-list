import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router"; // Import useRouter

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<string>("");

	const router = useRouter(); // Deklarasikan router

	const handleLogin = async () => {
		try {
			const response = await axios.post("/api/login", {
				email,
				password,
			});

			console.log(response.data.message); // Tampilkan pesan sukses login

			// Autentikasi berhasil, arahkan ke halaman utama (index.tsx)
			if (response.data.success) {
				router.push("/"); // Mengarahkan ke halaman utama (index.tsx)
			}
		} catch (error) {
			console.error("Gagal login", error.response?.data.message); // Tampilkan pesan kesalahan
			setErrorMessage("Email atau kata sandi salah");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-md">
				<h1 className="text-2xl font-semibold mb-4">Login</h1>
				<input
					type="text"
					placeholder="Email"
					className="w-full border p-2 mb-4 rounded-lg"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					className="w-full border p-2 mb-4 rounded-lg"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
				<button
					onClick={handleLogin}
					className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
				>
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
