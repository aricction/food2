const express = require('express');
const router = express.Router();
const { check , validationResult} = require('express-validator');

const feedbackModel = require('../models/feedbackModel');



router.get('/', (req , res) => {
    try {
        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('server error');
        
    }
});


router.post('/', [
  check('name', 'name is required').not().isEmpty(),
  check('email', ' please enter valid email').isEmail(),
  check('phone','enter your phone no').isLength({ min:10}),
  check('message', 'enter your feedback').not().isEmpty()

], async(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
 
    const {name, email, phone , message} = req.body;
    try {

        const newfeedback = new feedbackModel({
            name,
            email,
            phone,
            message
        });
        const savefeedback = await newfeedback.save();
        res.json(savefeedback);
        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('server error');
        
    }
})

module.exports = router;