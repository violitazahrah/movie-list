const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Data pengguna statis (biasanya disimpan dalam database)
const users = [
	{ email: "user1@example.com", password: "password1" },
	{ email: "user2@example.com", password: "password2" },
];

app.use(bodyParser.json());

// Endpoint untuk login pengguna
app.post("/login", (req, res) => {
	const { email, password } = req.body;

	// Cari pengguna berdasarkan email
	const user = users.find((user) => user.email === email);

	if (!user) {
		return res.status(404).json({ message: "Pengguna tidak ditemukan" });
	}

	// Periksa kata sandi
	if (user.password !== password) {
		return res.status(401).json({ message: "Kata sandi salah" });
	}

	res.status(200).json({ message: "Login berhasil" });
});

app.listen(port, () => {
	console.log(`Server berjalan di port ${port}`);
});
