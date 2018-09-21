const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const router = express.Router();


router.post('/signin', (req, res) => {
    User.findOne({email: req.body.email})
    .exec()
    .then(user => {
        bcrypt.compare(req.body.password, user.password, (err, resp)=> {
            if(err || !resp)
                return res.status(401).json({
                    failed: 'Unauthorized Access'
                });
            return res.status(200).json({
                success: 'Welcome to JWT Auth'
            });
        })
    }).catch(error => {
        res.status(500).json({error: error});
    });
});
module.exports = router;
