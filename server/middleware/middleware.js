import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const middleware = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];

        if(!token) {
            res.status(401).json({success: false, message: "Unauthorized"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if(!decoded){
            res.status(401).json({success: false, message: "wrong token"});
        }

        const user = await User.findById({_id: decoded.id});

        const newUser = {name: user.name, id: user._id};
        req.user = newUser;
        next();
    }
    catch(error){
    }
}

export default middleware;