const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {check , validationResult} = require('express-validator');
const UserModel = require('../models/UserModel');

/** registeration user route */

router.post('/', [

    check('name', 'name is required').not().isEmpty(),
    check('email', 'please enter a valid email').isEmail(),
    check('password', 'please enter password with Min 6 or More character ').isLength({
        min: 6})

], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({err: errors.array() })

    }
   
    const {name, email , password} = req.body;
    try {
        /** if user already exists */
        let user = await UserModel.findOne({email});
        if(user){
            return res.status(400).json({msg: 'User already Exists with Email provided'});

        }
        /** if new user then save it */
        user = new UserModel ({
            name,
            email,
            password
        })
       
        /** password converting into hash format */
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, config.get('SecretKey'), {
            expiresIn: 360000
        }, (err, token) => {
            if(err) throw err;
            res.json({token});
        })


    } catch (err) {
        
    }
});

module.exports = router;