const Users = require("../models/Users")
const jwt = require("jsonwebtoken")

exports.auth = (req, res, next) => {
	let header, token;
	if (
		!(header = req.header('Authorization')) ||
		!(token = header.replace('Bearer ', ''))
	)
		return res.status(401).send({ message: 'Unauthorized' });

	try {
		const verified = jwt.verify(token, process.env.SECRET_KEY);
		req.user = verified;
		next();
	} catch (error) {
		res.status(400).send({ message: 'Invalid token' });
	}
};

exports.Admin = (req,res,next)=>{

}