const express = require('express');
const router = express.Router();
const { check, validationResult} = require('express-validator');
const ShipAdd = require('../models/addressModel');
const UserModel = require('../models/UserModel');
const auth = require('../middlewares/auth');

/** show address */
router.get('/', (req, res) => {
    try {
        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('server error');
        
    }
});
/** save user addres  */

router.post('/' , [auth,

    check('firstname', 'enter your firstname').not().isEmpty(),
    check('lastname', 'enter your lastname').not().isEmpty(),
    check('email', ' please enter valid email').isEmail(),
    check('phone','enter your phone no').isLength({ min:10}),
    
    check('address', 'enter your address').not().isEmpty(),
   
    check('postalcode', 'enter your post code').not().isEmpty(),
    check('town', 'enter your town').not().isEmpty(),

], async(req , res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    
    const {firstname, lastname , email, phone, address ,  postalcode , town} = req.body;
    try {
        const newaddress = new ShipAdd({
            firstname,
            lastname,
            email,
            phone,
            address,
            postalcode,
            town
         
        });
     const saveAdd = await newaddress.save();
     res.json(saveAdd);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('server error');

    }
});

module.exports = router;