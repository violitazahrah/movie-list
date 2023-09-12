import React, { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = () => {
		// Lakukan proses autentikasi di sini
	};

	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="bg-white p-8 rounded shadow-md w-96">
				<h1 className="text-2xl font-semibold mb-4">Login</h1>
				<input
					type="email"
					placeholder="Email"
					className="w-full px-4 py-2 mb-4 border rounded"
					value={email}
					onChange={handleEmailChange}
				/>
				<input
					type="password"
					placeholder="Password"
					className="w-full px-4 py-2 mb-4 border rounded"
					value={password}
					onChange={handlePasswordChange}
				/>
				<button
					onClick={handleLogin}
					className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
				>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
