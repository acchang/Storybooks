const express = require('express')
const router = express.Router()

// @desc    Login/Landing page
// @route   GET /
router.get('/',(req,res)=>{
    res.render('Login')
})

// @desc    Dashbard
// @route   GET / dashbard
router.get('/dashboard', (req,res) => {
    res.render('Dashboard')
})

module.exports = router