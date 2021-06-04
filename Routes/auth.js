const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const {check , validationResult} = require('express-validator');
const UserModel = require('../models/UserModel');
const auth = require('../middlewares/auth');


/** private route, logged in user can access, to redirect */
router.get('/', auth, async(req, res) => {
   try {
       const user = await (await UserModel.findById(req.user.id)).select('-password');
       res.json(user);
   } catch (err) {
       console.log(err.message);
       res.status(500).send('server error');
       
   }
    
});

/**login interface validation */
router.post('/', [
    check('email', 'please enter email').isEmail(),
    check('password', ' please enter password').exists()
],
 async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({err: errors.array() })
    }
    const {email, password} =req.body;
    try {
        let user = await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({msg: 'User not found with provided email'});

        }
        const checkpassword = await bcrypt.compare(password, user.password);
        if(!checkpassword) {
            return res.status(400).json({msg: 'wrong password'});
        }
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
        console.log(err.message);
        res.status(500).send('server error');
    }
});

module.exports = router;