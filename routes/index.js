const express = require('express')
const router = express.Router()

// @desc    Login/Landing page
// @route   GET /

router.get('/', (req, res)=> {
    res.render('login', {
        layout: 'login'
    })
})


// @desc    Dashbard
// @route   GET / dashbard
router.get('/dashboard', (req,res) => {
    res.render('dashboard')
})

module.exports = router