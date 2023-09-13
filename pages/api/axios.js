const axios = require("axios");

const login = async (username, password) => {
	try {
		const response = await axios.post("http://localhost:3000/api/login", {
			username,
			password,
		});

		console.log(response.data.message);
		console.log("Token:", response.data.token);
	} catch (error) {
		console.error("Terjadi kesalahan:", error.response.data.message);
	}
};

login("user1", "password1"); // Panggil fungsi ini untuk mencoba login
