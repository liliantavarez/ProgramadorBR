const userController = {
	register: function (req, res) {
		console.log("Registro");
		res.send("register");
	},
	login: function (req, res) {
		console.log("Login");
		res.send("login");
	},
};

module.exports = userController;
