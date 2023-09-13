const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;
const secretKey = "rahasiaku"; // Ganti dengan kunci rahasia yang lebih kuat

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Simpan informasi pengguna (biasanya disimpan di database)
const users = [
	{ id: 1, username: "user1", password: "password1" },
	{ id: 2, username: "user2", password: "password2" },
];

// Endpoint untuk login
app.post("/api/login", (req, res) => {
	const { username, password } = req.body;

	// Cari pengguna berdasarkan username
	const user = users.find((user) => user.username === username);

	// Jika pengguna tidak ditemukan atau password salah
	if (!user || user.password !== password) {
		return res.status(401).json({ message: "Login gagal" });
	}

	// Buat token JWT untuk pengguna yang berhasil login
	const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

	// Kirim token sebagai respons
	res.status(200).json({ message: "Login berhasil", token });
});

app.listen(port, () => {
	console.log(`Server berjalan di http://localhost:${port}`);
});
