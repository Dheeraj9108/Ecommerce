const User = require('../../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if(error){return res.status(400).json(error)}
            if (user) return res.status(400).json({
                message: "Admin already registered"
            });
            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;
            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString(),
                role:'admin'
            });
            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: error
                    });
                }

                if (data) {
                    return res.status(201).json({
                        user: "Admin created sucessfully"
                    })
                }
            });
        });
}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if (error) return res.status(400).json({ error });
        if (user) {

            if (user.authenticate(req.body.password) && user.role === 'admin') {
                const token = jwt.sign({ _id: user._id, role:user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
                const { _id, firstName, lastName, email, role, fullName } = user;
                res.status(200).json({
                    token,
                    user: {
                        _id, firstName, lastName, email, role, fullName
                    }
                });

            } else {
                res.status(400).json({
                    message: "Invalid Credentials"
                })
            }

        } else {
            res.status(400).json({ message: "Something went wrong" })
        }
    })
}

exports.signout = (req,res)=>{
    res.clearCookie('token')
    res.status(200).json({message:'Signout successfully'})
}