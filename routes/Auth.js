const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const Joi = require('joi');
const {User} = require("../models/user");
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).json({error: error.details[0].message});

    let user = await User.findOne({email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password ');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid email or password ');

    const token = jwt.sign({ _id: user._id}, config.get('jwtPrivateKey'))

    res.send(token);
});

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    };
    return Joi.object(schema).validate(req);
}

module.exports = router;